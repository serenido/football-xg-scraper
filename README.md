# Football xG Scraper API

Get Understat expected goals (xG) data as clean rows: xG league tables, fixtures and results with xG, team match logs (xG, xGA, PPDA), player stats per 90, every shot with xG, lineups. Premier League, La Liga, Bundesliga, Serie A, Ligue 1, RFPL, 2014 to now.

Runs in the cloud on Apify. No servers, no proxy setup, no code to maintain. **[Open it on Apify](https://apify.com/serenido/football-xg-scraper)**

**Price:** $3 per 1,000 rows. No monthly fee. Apify's free plan gives $5 of usage every month, no credit card needed. [Current price](https://apify.com/serenido/football-xg-scraper/pricing).

## What you get

- xG league table: points vs expected points (xPts), xG, xGA, npxG, PPDA, deep passes; optional form table of the last N matches
- Fixtures and results with home/away xG and Understat's win/draw/loss probabilities
- Team match logs: xG, xGA, PPDA and deep passes per team per match
- Player season stats with per-90 numbers (xG90, xA90, xGChain90)
- Every shot with xG, pitch position, situation and shot type; lineups and player match logs

## Quick start: Python

```bash
pip install -U apify-client
```

```python
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")

run = client.actor("serenido/football-xg-scraper").call(run_input={
    "mode": "table",
    "leagues": [
        "EPL",
        "La_liga"
    ],
    "seasons": [
        "current"
    ]
})

for item in client.dataset(run.default_dataset_id).iterate_items():
    print(item)
```

## Quick start: JavaScript (Node.js)

```bash
npm install apify-client
```

```javascript
import { ApifyClient } from "apify-client";

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const run = await client.actor("serenido/football-xg-scraper").call({
    "mode": "table",
    "leagues": [
        "EPL",
        "La_liga"
    ],
    "seasons": [
        "current"
    ]
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

## Quick start: one HTTP call

Runs the tool and returns the rows in one request. Good for runs under 5 minutes; for bigger runs use the Python or JavaScript example.

```bash
curl -X POST "https://api.apify.com/v2/acts/serenido~football-xg-scraper/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"mode": "table", "leagues": ["EPL", "La_liga"], "seasons": ["current"]}'
```

Get your token in [Apify Console > Settings > API & Integrations](https://console.apify.com/settings/integrations).

## Use it from AI apps (MCP)

Any app that supports remote MCP servers (Claude, ChatGPT, Cursor, VS Code and others) can run this tool for you. Add this server URL: `https://mcp.apify.com?tools=serenido/football-xg-scraper`. Your Apify account connects on first use. Example config for Cursor:

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=serenido/football-xg-scraper"
    }
  }
}
```

## Input example

```json
{
  "mode": "table",
  "leagues": [
    "EPL",
    "La_liga"
  ],
  "seasons": [
    "current"
  ]
}
```

Other modes: `matches`, `teamMatches`, `players`, `shots`, `lineups`, `playerMatches`. All options are listed on the [input page](https://apify.com/serenido/football-xg-scraper/input-schema).

## Output example (one row)

```json
{
  "type": "shot",
  "league": "Premier League (England)",
  "season": "2026/27",
  "matchId": "31239",
  "date": "2026-10-12 19:00:00",
  "homeTeam": "Coventry",
  "awayTeam": "Newcastle United",
  "minute": 5,
  "team": "Coventry",
  "player": "Jack Rudoni",
  "result": "Goal",
  "isGoal": true,
  "xG": 0.7612,
  "x": 0.885,
  "y": 0.5,
  "situation": "Penalty",
  "shotType": "LeftFoot"
}
```

Download as JSON, CSV or Excel, or connect to Make, Zapier or n8n.

## Use cases

- Football models and betting research
- Fantasy football (FPL) player picks by xG and xA
- Match reports and data journalism

## More tools by Serenido

- [Weibo Scraper](https://github.com/serenido/weibo-scraper): posts, hot searches, comments and creators. No login.
- [Bilibili Scraper](https://github.com/serenido/bilibili-scraper): videos, comments, danmaku and creators. No login.
- [AliExpress Product Details Scraper](https://github.com/serenido/aliexpress-product-details-scraper): every variant with price and stock, shipping to 89 countries.
- [AliExpress Search Scraper](https://github.com/serenido/aliexpress-search-scraper): price, discount and exact order count for any search.
- [Australian Supermarket Prices: Coles, Woolworths and ALDI](https://github.com/serenido/coles-woolworths-aldi-scraper): Coles, Woolworths and ALDI in one run, with unit prices.
- [Google Trends Scraper](https://github.com/serenido/google-trends-scraper): interest over time, rising queries, regions and Trending Now.
- [Weibo Hot Search Scraper](https://github.com/serenido/weibo-hot-search): the live 微博热搜 list, changes since your last run, top posts per topic.
- [AliExpress Dropshipping Scraper](https://github.com/serenido/aliexpress-dropshipping): winning products with shipping to your country, landed cost and profit.
- [WeChat Official Account Scraper](https://github.com/serenido/wechat-official-account-scraper): 公众号 articles by keyword or link, with full text, account, author and date.
- [RedNote Trending Scraper](https://github.com/serenido/rednote-trending-scraper): 小红书 trending notes with full text, images, video, likes, saves and comments.

## Support

Found a bug or need a field? Open an issue here or on the [Issues tab on Apify](https://apify.com/serenido/football-xg-scraper/issues).

Use it only for public data and follow the website's terms and the laws that apply to you. This project is not affiliated with the websites it reads.
