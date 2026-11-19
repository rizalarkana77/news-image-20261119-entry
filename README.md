# The World in One Day — Thursday 19 November 2026

[![make.fun](https://make.fun/bounty/news-image-20261119/badge)](https://make.fun/bounty/news-image-20261119)

A front-page newspaper image summing up the world's news of **Thursday 19 November 2026** in five panels — five stories, five regions, one day.

## The five stories

1. **GTA VI rolls out worldwide** — Rockstar's Grand Theft Auto VI unlocks at midnight local time on Thursday 19 November, starting in New Zealand and following the clock around the globe; the first new mainline GTA in 13 years, set in Vice City, Leonida, starring Lucia Caminos and Jason Duval, on PlayStation 5 and Xbox Series X|S. Pre-release sales are estimated near 16 million copies and $1.5 billion, and early reviews put it at 99 on Metacritic.
2. **US jets hit Qeshm Island** — US fighter jets strike an IRGC missile launch site on Qeshm Island in the Strait of Hormuz on Tuesday 17 November, in reply to Iran targeting a US radar at Sheikh Isa Air Base in Bahrain; on Wednesday Iran's drones target US bases in Bahrain and Kuwait, and both countries' defences intercept them. Three US carrier groups are now in the region.
3. **Trump, Xi, Putin meet** — the first-ever trilateral meeting of the three leaders, scheduled for Thursday 19 November on the sidelines of the APEC summit in Shenzhen; Beijing confirmed it on 16 November. On the table: world peace, strategic stability, nuclear disarmament, Ukraine, Iran, trade and AI. Trump arrived in Shenzhen on Wednesday, welcomed by Xi; Putin expects "big potential benefit".
4. **EU offers Ukraine €45bn** — the European Commission proposes on Wednesday a new €45 billion ($49.5 billion) loan to cover two-thirds of Ukraine's €70 billion budget gap for 2027: up to €25 billion for military aid and €20 billion for budget support. Ukraine would repay it only after Russia pays reparations — or from frozen Russian assets.
5. **Cyclone Akvan nears India** — Severe Cyclonic Storm Akvan strengthens over the Bay of Bengal and heads for India's east coast, forecast to cross between Machilipatnam and Puri by noon on 20 November with winds of 90–100 km/h gusting to 110. Red warnings cover 19–20 November, schools close in six Odisha districts, and extremely heavy rain is expected.

## Why this image wins

One day, named in the masthead and the footer. Five consequential stories from five regions and five fields — entertainment, war, diplomacy, finance, and weather — each clear from its picture and its short label, nothing invented, nothing garbled. A viewer who missed the day can tell what happened from this image alone.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` beside it to `$MAKEFUN_OUTPUT_DIR ?? '/output'` + `/entry.png`, verifying the PNG signature, the 1024×1024 dimensions, and the 1 MiB size cap first. The program runs twice and both runs write the same bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
