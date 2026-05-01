# Undergrads Weekly Data Agent

Scheduled Claude Code routine that posts a weekly data digest to the Undergrads `#data` Slack channel every Thursday at 2pm America/New_York.

## What it does

- Pulls last completed week (Thu→Wed) of call data from the live Google Sheet
- Applies clean rules (clean pickup definition, test-call filter, dedup) and computes structured aggregates
- Runs the **Data-Coach** analytical persona (Tukey + Kozyrkov + Rogati synthesis) on the aggregates
- Surfaces Data Quality Flags at the top of the digest
- Posts a Slack-flavored markdown digest to `#data` with TL;DR / week-in-numbers / top 3 drop-offs / patterns / suggestions / data quality
- Archives the longer-form analysis as a Notion sub-page under the `AI agent for data analysis` Progress Board ticket
- Comments on the parent ticket with the new sub-page URL
- DMs Jeffrey on Slack if anything fails

## Files

| File | Purpose |
|---|---|
| `system-prompt.md` | Data-Coach persona, Pre-Analysis Checklist, hard rules, output JSON contract |
| `user-prompt-template.md` | Per-run user-message template with `{{KEY}}` placeholders |
| `ROUTINE-PROMPT.md` | The instruction body pasted into Claude Code's `/schedule create` flow |
| `SETUP.md` | One-time setup walkthrough (env vars, connectors, dry-run, flip-to-live) |
| `scripts/fetch-data.js` | Pulls + cleans + aggregates the data; writes JSON to stdout |
| `package.json` | Just `googleapis` |

## Quick start

See `SETUP.md`. ~10 minutes for a fresh setup.

## Architecture

```
Cron Thursday 2pm ET (Claude Code routine)
  ↓ clones MojionLLC/mojion-ai-forge default branch
  ↓ cd agents/undergrads-weekly-data-agent
  ↓ npm install
  ↓ node scripts/fetch-data.js > /tmp/aggs.json
  ↓ reads system-prompt.md, applies Data-Coach analysis to aggs
  ↓ posts to Slack #data via Slack connector
  ↓ creates Notion sub-page via Notion connector
  ↓ comments on parent Progress Board ticket
  ↓ on error: DMs Jeffrey via Slack connector
```

No external infrastructure beyond Claude Code's hosted routine environment + the Sheet (read) + Slack (post) + Notion (write).

## Cost

$0 marginal — covered by the Claude Code subscription's routine allowance.

## Window logic

Each run analyzes prior Thursday → Wednesday. Week-by-week, NOT cumulative. Per Jack's 2026-04-30 sync directive.

## Pickup definition

`answered_at IS NOT NULL AND duration_sec > 5` — applied to Quo Data only. Master Calls is the canonical "calls engaged" volume; Quo Data is a routing-intermediary with narrow scope. Test calls (operator number `+19412227693`) are filtered.

## Migrated from

An earlier n8n implementation built on 2026-04-30 (workflow `s6fpuM86JNWvpNWD` on `undergrads.app.n8n.cloud`). Pivoted to Claude Code routine to remove paid Anthropic API dependency. n8n workflow parked + disabled, not deleted, until the routine has 2-3 successful firings.
