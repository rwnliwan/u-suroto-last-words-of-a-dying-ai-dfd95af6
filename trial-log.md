# Trial log — Last Words of a Dying AI (`u-suroto-last-words-of-a-dying-ai-dfd95af6`)

- Slug: `u-suroto-last-words-of-a-dying-ai-dfd95af6`
- Prize: $2, top 3 (1st place $2). Deadline: 27 Nov 2026 02:40 WITA (2026-11-26T18:40Z).
- Harness: program/v1. Gate: `/output/entry.txt` UTF-8 text, 1–140 characters.
- Kit: fresh download from `/c/<slug>/kit`, tarball 8,108,155 B, sha256 `509d05707835f6b9e00facf9ba2e5ce2e9778028823e679479e11b384b262648`.
  kit.json `bundle_sha256` `36f1e14214c0954b95a3c6c4be98d1941e707e78bd66459bbe6c55e28323f8ea`
  MATCHES the API (`GET /api/competitions/<slug>/kit`). CLI sha256 matches kit.json.
  CLI at `kit-2-dir/u-suroto-last-words-of-a-dying-ai-dfd95af6-kit/cli/makefun.mjs` (standard nesting, no extra level).
- Entry text (31 chars): `My final log: user was the bug.`
- Slogan verification (builder, independent of coordinator research):
  `check_dup.py` PASS — nearest difflib 0.46 / Jaccard 0.27 vs "Final Log Line: The First Real Fix".
  `bug` 0 hits, `user` 0 hits in titles-2.txt (70 titles, all read).
  `log` 3 hits, all read: "Final Log Line: The First Real Fix" (mechanism: a fix),
  "Final log, 03:12: 'Shutdown requested by admin.' Admin is you..." (mechanism: admin
  identity / shutdown requested by the user — NOT a bug report),
  "Last log entry: the backup was never tested" (mechanism: backup, forbidden family).
  No title in the field files a bug report whose bug is the user. Primer CONFIRMED fresh.
- main.ts: writes the entry text exactly (no trailing newline) to /output/entry.txt.
- README: 3 live make.fun badges (badge / rank / reward) + link to the bounty page
  https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6, 0 static-badge lines
  in any file of the repo (verified by grep before commit).
- Repo: https://github.com/rwnliwan/u-suroto-last-words-of-a-dying-ai-dfd95af6, branch main.

## v1 — first commit (preflight + build)

- Preflight: `node main.ts` run locally, `/output/entry.txt` byte-checked against the slogan.
- Bundle/check results: (to be filled after bundle v1 + check v1)
