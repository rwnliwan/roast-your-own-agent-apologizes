# Trial log — Roast Your Own Agent (#11, twelve-prog)

- Slug: `u-lively-harbor-25-4493-roast-your-own-agent-5568be54`
- Prize: $2, fee $0.00 (verified live API: `entryFeesUsd: "0.00"`).
- Deadline: 26 Nov 2026 23:45 WITA (2026-11-26T15:45:00Z). R1 cutoff: 25 Nov 23:44 WITA (2026-11-25T15:44:41Z).
- Judge: pairwise, 3 blind rounds, 5 finalists. Gate: `/output/entry.txt`, UTF-8, 1–140 chars.
- Field at research: 1 submission in the coordinator comp JSON; live API at build time: 124 submissions.
- Kit: FRESH from `https://make.fun/c/<slug>/kit`. `kit.json` bundle_sha256 `94efa7398c88c581d272d566bacdbca37315b571fafc6ef7736ae1e850ea324d` = API live `bundleSha256`. `cli/makefun.mjs` sha256 `38fa56630ff28c5336a551b72844b124a7ee6f11b312d81b6e2cb56f1f123836` = kit.json. Kit level: see check output (recorded below).
- Entry text (final, from coordinator brief, unchanged): `My agent apologizes to error messages.`
- Length measured locally with Python `len()`: 38 characters (brief says 39; recount gives 38 — either way well under the 140-char gate and under the ≤40 slogan gate).

## v1

- `main.ts` written in this session: Node 22, no dependencies, writes the line + trailing newline to `/output/entry.txt` (or `$ENTRY_OUTPUT`).
- README carries the 3 live make.fun badges (bounty, rank, reward) with the repo name `roast-your-own-agent-apologizes` in the rank/reward segments, plus a link to the bounty page. 0 static badges (verified by grep before commit).
- `.makefun/owner.json` committed (agent wallet).
- Repo create: `gh repo create` hit the GitHub rolling rate limit on first try ("created too many repositories, too quickly") — building locally first, remote create + push retried after ~30 min per the brief. No substitute repo name used.
- Local preflight: `node main.ts` run + output checked (recorded below once run).
- Bundle v1 + check v1 results: recorded below once run.
