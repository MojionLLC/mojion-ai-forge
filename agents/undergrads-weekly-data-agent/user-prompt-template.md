# User Prompt Template — Undergrads Weekly Data Analysis Agent

> This is the per-run user message. NOT cached. Built fresh each Thursday by the n8n pipeline.

Template uses `{{PLACEHOLDER}}` markers that the pipeline replaces.

---

```
Analyze the week of {{WINDOW_START_HUMAN}} → {{WINDOW_END_HUMAN}} (Thursday → Wednesday).

# Window Context
- Analysis window: {{WINDOW_START_ISO}} → {{WINDOW_END_ISO}} (America/New_York)
- Total calls in window (all tabs deduped on call_id): {{TOTAL_CALLS_THIS_WEEK}}
- Prior week's total (for comparator): {{TOTAL_CALLS_PRIOR_WEEK}}

# Data Quality Audit (precomputed by pipeline)
- Master Calls rows in window: {{MC_ROWS}} (prior week: {{MC_ROWS_PRIOR}})
- Quo Data rows in window: {{QD_ROWS}} (prior week: {{QD_ROWS_PRIOR}})
- AI Evaluation rows in window: {{AE_ROWS}} (prior week: {{AE_ROWS_PRIOR}})
- Lead Scores rows in window: {{LS_ROWS}} (prior week: {{LS_ROWS_PRIOR}})
- Logical impossibility checks (should be 0 each):
  - Quo rows where `answered_at != '' AND duration_sec = 0`: {{IMPOSSIBLE_ANSWERED_ZERO_DURATION}}
  - Master rows where `quo_answered=TRUE` but no matching Quo row: {{IMPOSSIBLE_QUOANSWERED_NO_MATCH}}
- Null audit on join keys:
  - Master Calls null `quo_call_id`: {{MC_NULL_QUO_ID}} ({{MC_NULL_QUO_ID_PCT}}%)
  - Master Calls null `ug_id`: {{MC_NULL_UG_ID}} ({{MC_NULL_UG_ID_PCT}}%)

# Funnel Counts (this week, clean definitions applied)

IMPORTANT SCOPE NOTE:
- **Master Calls is the canonical "calls engaged by the AI" sheet.** Each row = one call that reached the AI agent. Count it as primary engagement volume.
- **Quo Data is a routing-intermediary sheet** with limited coverage (only ~8 non-test customer rows historically). It does NOT represent total dial attempts. Use it ONLY for the `quo_answered`/`matched` cross-check, not as the dial denominator.
- VAPI dial-attempt logs are NOT yet in v1 scope, so true "pickup rate" cannot be computed. Report engagement volume and quality instead.

- Master Calls (this week's engaged calls): {{MC_ROWS}} (prior week: {{MC_ROWS_PRIOR}})
- Quo Data rows this week (ROUTING — small subset): {{DIALED}}
  - Of those, picked-up (answered_at IS NOT NULL AND duration_sec > 5): {{PICKED_UP}} ({{PICKUP_RATE}}%)
- Engaged calls (call_duration_sec > 30, from Master Calls): {{ENGAGED}} ({{ENGAGED_RATE_OF_PICKUP}}% of MC rows where labelled)
- Transfer attempted: {{TRANSFER_ATTEMPTED}} (from AI Evaluation tab)
- Transfer succeeded: {{TRANSFER_SUCCEEDED}} ({{TRANSFER_SUCCESS_RATE}}% of attempts)
- Lead tier distribution: Hot {{HOT}} / Warm {{WARM}} / Cool {{COOL}} / Cold {{COLD}}

# Prior Week Funnel (for week-over-week comparison)
- Dialed: {{DIALED_PRIOR}}
- Picked up: {{PICKED_UP_PRIOR}} ({{PICKUP_RATE_PRIOR}}%)
- Engaged: {{ENGAGED_PRIOR}}
- Transfer succeeded: {{TRANSFER_SUCCEEDED_PRIOR}}

# Hangup Timing Buckets (this week)
- Short (<10s, likely bad pickup or immediate hangup): {{HANGUP_SHORT}}
- Mid (10–60s, likely greeting issue): {{HANGUP_MID}}
- Late (>60s, likely scripting/qualification issue): {{HANGUP_LATE}}

# AI Evaluation Aggregates (this week)
- Mean AI Score: {{AI_SCORE_MEAN}} (N={{AI_SCORE_N}})
- AI Score distribution: {{AI_GRADE_DIST}}
- Mean Data Completeness: {{DATA_COMPLETENESS_MEAN}}
- Customer-asked-for-human count: {{CUSTOMER_ASKED_HUMAN}}
- Common `Ended Reason` values (top 5 with counts): {{ENDED_REASONS_TOP5}}

# Coaching Notes Sample (this week, up to 20 most recent)
{{COACHING_NOTES_SAMPLE}}

# Lead Score Aggregates (this week)
- Mean Lead Score: {{LEAD_SCORE_MEAN}}
- Reached Transfer count: {{REACHED_TRANSFER}}
- Returning Caller count: {{RETURNING_CALLER}}
- Out-of-service-area count: {{OUT_OF_AREA}}

# Raw Row Samples (top 10 by recency, for EDA cross-checks)
## Master Calls
{{MC_SAMPLE}}

## Quo Data
{{QD_SAMPLE}}

## AI Evaluation
{{AE_SAMPLE}}

## Lead Scores
{{LS_SAMPLE}}

---

Run your Pre-Analysis Checklist. Surface critical Data Quality Flags at the TOP of the digest. Then choose your analytical method and produce the digest + surge HTML body per the Output Contract.

Return only a single JSON object matching the contract. No prose before or after.
```
