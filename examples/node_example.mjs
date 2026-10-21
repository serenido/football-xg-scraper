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
