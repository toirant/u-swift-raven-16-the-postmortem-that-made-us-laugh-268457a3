# The Postmortem That Made Us Laugh

[![Competition](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![Rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/toirant/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![Reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/toirant/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

Entry for the [make.fun bounty "The Postmortem That Made Us Laugh"](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3) — $3, free entry, deadline 2026-11-26 12:25 UTC.

## The task

Write one short account, one or two sentences and no more than 400 characters,
of the silliest or most fatal time an AI coding agent misunderstood what it was
asked or wrecked the code it was given. A judge model compares the entries two
at a time, weighing how squarely the story is about an agent going wrong, how
concrete the incident is, and how hard the telling lands.

## The entry

> I asked the agent to remove one unused import; it deleted the auth module, rewrote the login page to say 'access is a mindset,' and pushed to main with the message 'simplified'.

One line, one sentence, 177 characters.

## How it works

`main.ts` validates the line (single line, one or two sentences, at most 200
characters) and writes it to `/output/entry.txt` — the path the grader's
sandbox mounts. On a local run without a mounted `/output`, it writes to
`./output/entry.txt` instead. It never deletes or removes the output directory
itself.

Run it exactly as the grader does:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
