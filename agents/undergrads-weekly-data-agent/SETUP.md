# Setup — Undergrads Weekly Data Agent (Claude Code Routine)

End-to-end setup for the scheduled routine. ~10 minutes the first time.

## 1. Pre-reqs you'll need

| Item | Where | Notes |
|---|---|---|
| Google service account JSON | `~/Downloads/gen-lang-client-0477036736-11f1c3a089f2.json` | Already exists. Has Sheets read scope on the live Undergrads sheet. |
| Notion integration token | https://www.notion.so/my-integrations | Create new integration if none. Capabilities: Read + Insert + Update content. **Share the integration with page `34c9e132-91bf-80f4-8bb4-ed0f1ebc7f81`** (the Progress Board ticket). |
| Slack bot token | https://api.slack.com/apps | Optional — only needed if you don't enable the Slack connector. Bot needs `chat:write` and `chat:write.public`. |
| `#data` Slack channel ID | Slack right-click → Copy link | Format: `C09XXXXXX`. For the dry-run, use `C0A2Z1DFTMK` (`#ai-testing`). |
| Jeffrey DM channel ID | Slack DM → right-click → Copy link | Optional — for failure alerts. If unset, alerts go to `DATA_CHANNEL_ID` with an `[INTERNAL]` prefix. |

## 2. Create the routine

Open Claude Code and run:

```
/schedule create
```

Walk through the conversational flow. Use these answers:

- **Name:** `Undergrads Weekly Data Agent`
- **Repo:** `MojionLLC/mojion-ai-forge` (default branch: `main`)
- **Working directory:** root (the prompt cd's into `agents/undergrads-weekly-data-agent`)
- **Model:** Opus 4.7 (fall back to Sonnet 4.6 if Opus isn't on your plan — analytical depth still good)
- **Schedule:** Thursdays at 2:00 PM, timezone America/New_York
- **Connectors:** Enable **Slack** and **Notion**. Disable any others.
- **Routine prompt:** paste the body of `ROUTINE-PROMPT.md` (everything after the first `---`)

When asked about environment variables, set:

```
GOOGLE_SA_JSON=<paste the full contents of gen-lang-client-...json as a single line — yes, the whole JSON>
NOTION_TOKEN=<your Notion integration token, raw — no "Bearer " prefix>
SLACK_BOT_TOKEN=<optional — only if you skipped the Slack connector>
DATA_CHANNEL_ID=C0A2Z1DFTMK
JEFFREY_DM_CHANNEL=<your Slack DM channel ID, or leave unset>
```

`DATA_CHANNEL_ID` starts at the test channel for the dry-run. We swap it to `#data` after green-light (step 4 below).

## 3. Dry-run

In the routine list (https://claude.ai/code/routines), find the new routine and click **Run now**.

Watch the session unfold. Verify:

1. `npm install` completes cleanly
2. `node scripts/fetch-data.js > /tmp/aggs.json` runs and produces sensible numbers (cat `/tmp/aggs.json` to inspect)
3. The agent runs the Pre-Analysis Checklist and surfaces Data Quality Flags
4. The agent posts to Slack `#ai-testing` (the dry-run channel)
5. The agent creates a Notion sub-page under the `AI agent for data analysis` ticket
6. The agent comments on the parent ticket with the new sub-page URL

If any step fails, the routine should post a failure DM (or a `[INTERNAL]` message in the dry-run channel).

## 4. Flip to live

Once the dry-run output looks good:

1. In the routine settings, change `DATA_CHANNEL_ID` env var to your real `#data` channel ID
2. Save
3. Verify the schedule is **enabled**

The next firing happens at the next Thursday 2pm ET. First production run target: Thu 2026-05-07 (window: Thu 4/30 → Wed 5/6).

## 5. Editing the prompts later

The Data-Coach persona, hard rules, and output contract live in `system-prompt.md`. Edit, commit + push to `main`, and the next routine run picks up the new version. No need to redeploy the routine — it clones the repo on every run.

The data fetch + aggregation logic lives in `scripts/fetch-data.js`. Same flow — edit, commit, push.

The routine instruction itself (`ROUTINE-PROMPT.md`) is what you pasted into the routine. To update it: edit + push to repo for the record, then update the routine prompt in the web UI as well.

## 6. Failure handling

The routine prompt has a step 7 that posts a Slack DM on any unrecoverable failure. Beyond that, every run shows up as a session at https://claude.ai/code/routines — failed runs are easy to inspect.

If three Thursdays in a row fail, manually inspect the sessions and update `system-prompt.md` or the fetch script to handle the failure mode.

## 7. What's parked (not deleted)

The earlier n8n implementation lives at:
- `~/JarvisVault/clients/undergrads-moving/projects/weekly-data-agent/` (local)
- n8n workflow `s6fpuM86JNWvpNWD` on undergrads.app.n8n.cloud (DISABLED)
- n8n error notifier `X1aS4upelzfjq8yS`

Keep them off but parked through the first 2-3 successful routine firings. After that, delete via the n8n UI to clean up.
