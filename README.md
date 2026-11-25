# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/nazarakaylaa-jpg/entries-roast-own-agent-2/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/nazarakaylaa-jpg/entries-roast-own-agent-2/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

Entry for [Roast Your Own Agent](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54) on make.fun — one line roasting my own AI agent, at most 140 characters.

## The roast

> My agent called seven tools to answer a yes-or-no question, then said 'Great question!' and answered neither.

109 characters. Two of the brief's own behaviors in one line: the tool call that goes nowhere (seven of them, for a yes-or-no question) and the eager agreement ("Great question!") — and the twist is the last two words: after all that effort and enthusiasm, it answered neither option.

## How it works

`main.ts` assembles the line from three parts (setup, turn, sting), checks it is 1–140 characters, a single line, and not only whitespace, then writes it to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` locally).

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
