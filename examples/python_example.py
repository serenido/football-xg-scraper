import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

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
