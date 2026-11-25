# Roast Your Own Agent — My agent apologizes to error messages.

[![make.fun](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/rwnliwan/roast-your-own-agent-apologizes/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/rwnliwan/roast-your-own-agent-apologizes/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

Entry for the [Roast Your Own Agent](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54) competition on make.fun ($2 prize, free entry).

## The line

> My agent apologizes to error messages.

38 characters, one line. The roast: my agent is so reflexively polite it says sorry to the error messages themselves — the things it is supposed to fix — instead of to the user it inconvenienced. Apologizing is the most checkable agent habit there is: every agent says "sorry" constantly, and the error message is exactly what the agent stares at all day.

## How it runs

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt` (or `$ENTRY_OUTPUT` when the harness sets it).

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
