#!/usr/bin/env node
// Pulls last completed week of Undergrads call data from Google Sheets,
// applies clean rules, computes aggregates, and prints a JSON object to stdout.
//
// Designed to run inside a Claude Code scheduled routine. Dependencies:
//   - googleapis (npm)
//   - GOOGLE_SA_JSON env var (full JSON content of the service account key)
//
// Usage (manual / debugging):
//   GOOGLE_SA_JSON=$(cat ~/Downloads/gen-lang-client-*.json) node scripts/fetch-data.js
//
// In the routine: `node agents/undergrads-weekly-data-agent/scripts/fetch-data.js > /tmp/aggs.json`

const { google } = require('googleapis');

const SHEET_ID = '12bDLsita1QPuhpL997Q6t8WprXtvggdG5h0RFpfVCOY';
const TEST_NUMBERS = new Set(['+19412227693', '19412227693']);

function lastCompletedWeekWindow() {
  const now = new Date();
  const dow = now.getUTCDay();
  let daysSinceThu = (dow - 4 + 7) % 7;
  const lastThu = new Date(now);
  lastThu.setUTCDate(now.getUTCDate() - daysSinceThu);
  const start = new Date(lastThu);
  start.setUTCDate(lastThu.getUTCDate() - 7);
  start.setUTCHours(4, 0, 0, 0);
  const end = new Date(start);
  end.setUTCDate(start.getUTCDate() + 7);
  end.setUTCMilliseconds(end.getUTCMilliseconds() - 1);
  return { start, end };
}

function parseISO(s) { if (!s) return null; const d = new Date(s); return isNaN(d.getTime()) ? null : d; }
function parseHuman(s) { if (!s) return null; const d = new Date(s); return isNaN(d.getTime()) ? null : d; }
function inWindow(d, w) { return d && d >= w.start && d <= w.end; }
function uniqBy(rows, key) {
  const seen = new Set(), out = [];
  for (const r of rows) {
    const k = r[key];
    if (!k) { out.push(r); continue; }
    if (!seen.has(k)) { seen.add(k); out.push(r); }
  }
  return out;
}
function pickup(r) {
  const a = String(r.answered_at || '').trim();
  const d = Number(r.duration_sec || 0);
  return a !== '' && d > 5;
}
function pct(n, d) { return d > 0 ? Math.round((n / d) * 1000) / 10 : 0; }
function filterTest(rows, col) { return rows.filter(r => !TEST_NUMBERS.has(String(r[col] || '').trim())); }

async function getSheets() {
  if (!process.env.GOOGLE_SA_JSON) throw new Error('GOOGLE_SA_JSON env var is required');
  const credentials = JSON.parse(process.env.GOOGLE_SA_JSON);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });
  return google.sheets({ version: 'v4', auth: await auth.getClient() });
}

async function readTab(sheets, tab) {
  const r = await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID, range: `${tab}!A:Z` });
  const rows = r.data.values || [];
  if (rows.length < 2) return [];
  const headers = rows[0];
  return rows.slice(1).map(row => {
    const obj = {};
    headers.forEach((h, i) => { obj[h] = row[i] !== undefined ? row[i] : ''; });
    return obj;
  });
}

async function main() {
  const overrideStart = process.env.WINDOW_START;
  const overrideEnd = process.env.WINDOW_END;
  let window;
  if (overrideStart && overrideEnd) {
    window = { start: new Date(overrideStart + 'T04:00:00Z'), end: new Date(overrideEnd + 'T03:59:59Z') };
    window.end.setUTCDate(window.end.getUTCDate() + 1);
  } else {
    window = lastCompletedWeekWindow();
  }
  const priorWindow = {
    start: new Date(window.start.getTime() - 7 * 24 * 60 * 60 * 1000),
    end: new Date(window.end.getTime() - 7 * 24 * 60 * 60 * 1000),
  };

  const sheets = await getSheets();
  const [mcAll, qdAll, aeAll, lsAll] = await Promise.all([
    readTab(sheets, 'Master Calls'),
    readTab(sheets, 'Quo Data'),
    readTab(sheets, 'AI Evaluation'),
    readTab(sheets, 'Lead Scores'),
  ]);

  // Master Calls customer phone is `ai_phone` (real_phone is the VAPI line, always 19412227693)
  const mc = uniqBy(filterTest(mcAll, 'ai_phone').filter(r => inWindow(parseISO(r.timestamp), window)), 'master_id');
  const qd = uniqBy(filterTest(qdAll, 'customer_phone').filter(r => inWindow(parseISO(r.created_at), window)), 'quo_call_id');
  const ae = aeAll.filter(r => inWindow(parseHuman(r.Timestamp), window));
  const ls = lsAll.filter(r => inWindow(parseHuman(r.Timestamp), window));
  const mcPrior = uniqBy(filterTest(mcAll, 'ai_phone').filter(r => inWindow(parseISO(r.timestamp), priorWindow)), 'master_id');
  const qdPrior = uniqBy(filterTest(qdAll, 'customer_phone').filter(r => inWindow(parseISO(r.created_at), priorWindow)), 'quo_call_id');
  const aePrior = aeAll.filter(r => inWindow(parseHuman(r.Timestamp), priorWindow));
  const lsPrior = lsAll.filter(r => inWindow(parseHuman(r.Timestamp), priorWindow));

  const dialed = qd.length;
  const pickedUp = qd.filter(pickup).length;
  const engaged = mc.filter(r => Number(r.call_duration_sec || 0) > 30).length;
  const transferAttempted = ae.filter(r => String(r['Transfer Attempted']).toUpperCase() === 'TRUE').length;
  const transferSucceeded = ae.filter(r => String(r['Transfer Succeeded']).toUpperCase() === 'TRUE').length;
  const customerAskedHuman = ae.filter(r => String(r['Customer Asked for Human']).toUpperCase() === 'TRUE').length;

  const tiers = { Hot: 0, Warm: 0, Cool: 0, Cold: 0, Other: 0 };
  ls.forEach(r => {
    const t = String(r['Lead Tier'] || '').trim();
    if (tiers[t] !== undefined) tiers[t]++; else tiers.Other++;
  });

  let hShort = 0, hMid = 0, hLate = 0;
  mc.forEach(r => {
    const d = Number(r.call_duration_sec || 0);
    if (d < 10) hShort++; else if (d < 60) hMid++; else hLate++;
  });

  const scores = ae.map(r => Number(r['AI Score'])).filter(n => !isNaN(n));
  const aiMean = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length * 10) / 10 : 0;

  const grades = {};
  ae.forEach(r => {
    const g = String(r['AI Grade'] || 'Unknown').trim() || 'Unknown';
    grades[g] = (grades[g] || 0) + 1;
  });

  const endedReasonCounts = {};
  ae.forEach(r => {
    const v = String(r['Ended Reason'] || 'unknown').trim();
    endedReasonCounts[v] = (endedReasonCounts[v] || 0) + 1;
  });
  const endedReasonsTop5 = Object.entries(endedReasonCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([k, v]) => k + ' (' + v + ')').join(', ');

  const leadScores = ls.map(r => Number(r['Lead Score'])).filter(n => !isNaN(n));
  const leadMean = leadScores.length ? Math.round(leadScores.reduce((a, b) => a + b, 0) / leadScores.length * 10) / 10 : 0;
  const reachedTransfer = ls.filter(r => String(r['Reached Transfer']).toUpperCase() === 'TRUE').length;
  const returningCaller = ls.filter(r => String(r['Returning Caller']).toUpperCase() === 'TRUE').length;
  const outOfArea = ls.filter(r => /Outside area/i.test(String(r['In Service Area']))).length;

  const impossibleAnsweredZeroDuration = qd.filter(r => {
    const a = String(r.answered_at || '').trim();
    const d = Number(r.duration_sec || 0);
    return a !== '' && d === 0;
  }).length;
  const validQuoIds = new Set(qd.map(r => r.quo_call_id));
  const impossibleQuoAnsweredNoMatch = mc.filter(r => {
    return String(r.quo_answered).toUpperCase() === 'TRUE' && r.quo_call_id && !validQuoIds.has(r.quo_call_id);
  }).length;

  const mcNullQuoId = mc.filter(r => !r.quo_call_id).length;
  const mcNullUgId = mc.filter(r => !r.ug_id).length;

  const coachingNotes = ae
    .filter(r => r['Coaching Notes'] && String(r['Coaching Notes']).trim())
    .slice(-20)
    .map(r => '- (' + r['UG ID'] + ') ' + r['Coaching Notes']).join('\n');

  const sample = (rows) => rows.slice().reverse().slice(0, 10);
  const sampleStr = (rows, keys) => sample(rows).map(r => keys.map(k => k + '=' + JSON.stringify(r[k])).join(', ')).join('\n');

  const aggs = {
    WINDOW_START_HUMAN: window.start.toISOString().slice(0, 10),
    WINDOW_END_HUMAN: window.end.toISOString().slice(0, 10),
    WINDOW_START_ISO: window.start.toISOString(),
    WINDOW_END_ISO: window.end.toISOString(),
    TOTAL_CALLS_THIS_WEEK: mc.length,
    TOTAL_CALLS_PRIOR_WEEK: mcPrior.length,
    MC_ROWS: mc.length, MC_ROWS_PRIOR: mcPrior.length,
    QD_ROWS: qd.length, QD_ROWS_PRIOR: qdPrior.length,
    AE_ROWS: ae.length, AE_ROWS_PRIOR: aePrior.length,
    LS_ROWS: ls.length, LS_ROWS_PRIOR: lsPrior.length,
    IMPOSSIBLE_ANSWERED_ZERO_DURATION: impossibleAnsweredZeroDuration,
    IMPOSSIBLE_QUOANSWERED_NO_MATCH: impossibleQuoAnsweredNoMatch,
    MC_NULL_QUO_ID: mcNullQuoId, MC_NULL_QUO_ID_PCT: pct(mcNullQuoId, mc.length),
    MC_NULL_UG_ID: mcNullUgId, MC_NULL_UG_ID_PCT: pct(mcNullUgId, mc.length),
    DIALED: dialed,
    PICKED_UP: pickedUp, PICKUP_RATE: pct(pickedUp, dialed),
    ENGAGED: engaged, ENGAGED_RATE_OF_PICKUP: pct(engaged, pickedUp),
    TRANSFER_ATTEMPTED: transferAttempted, TRANSFER_ATTEMPT_RATE: pct(transferAttempted, engaged),
    TRANSFER_SUCCEEDED: transferSucceeded, TRANSFER_SUCCESS_RATE: pct(transferSucceeded, transferAttempted),
    HOT: tiers.Hot, WARM: tiers.Warm, COOL: tiers.Cool, COLD: tiers.Cold,
    DIALED_PRIOR: qdPrior.length,
    PICKED_UP_PRIOR: qdPrior.filter(pickup).length,
    PICKUP_RATE_PRIOR: pct(qdPrior.filter(pickup).length, qdPrior.length),
    ENGAGED_PRIOR: mcPrior.filter(r => Number(r.call_duration_sec || 0) > 30).length,
    TRANSFER_SUCCEEDED_PRIOR: aePrior.filter(r => String(r['Transfer Succeeded']).toUpperCase() === 'TRUE').length,
    HANGUP_SHORT: hShort, HANGUP_MID: hMid, HANGUP_LATE: hLate,
    AI_SCORE_MEAN: aiMean, AI_SCORE_N: scores.length,
    AI_GRADE_DIST: Object.entries(grades).map(([k, v]) => k + ':' + v).join(', '),
    DATA_COMPLETENESS_MEAN: 'see Coaching Notes column',
    CUSTOMER_ASKED_HUMAN: customerAskedHuman,
    ENDED_REASONS_TOP5: endedReasonsTop5,
    COACHING_NOTES_SAMPLE: coachingNotes || '(none)',
    LEAD_SCORE_MEAN: leadMean,
    REACHED_TRANSFER: reachedTransfer,
    RETURNING_CALLER: returningCaller,
    OUT_OF_AREA: outOfArea,
    MC_SAMPLE: sampleStr(mc, ['timestamp','customer_name','call_duration_sec','call_status','quo_answered','data_quality','came_from']),
    QD_SAMPLE: sampleStr(qd, ['created_at','answered_at','duration_sec','matched','customer_phone']),
    AE_SAMPLE: sampleStr(ae, ['Timestamp','UG ID','AI Score','AI Grade','Transfer Attempted','Transfer Succeeded','Call Outcome','Ended Reason']),
    LS_SAMPLE: sampleStr(ls, ['Timestamp','UG ID','Lead Score','Lead Tier','Reached Transfer','In Service Area']),
  };

  process.stdout.write(JSON.stringify(aggs, null, 2));
}

main().catch(e => { console.error('FETCH_DATA_ERROR:', e.message); process.exit(1); });
