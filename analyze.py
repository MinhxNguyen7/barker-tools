import json
import pandas as pd

if __name__ == '__main__':
    df = None
    with open('tweets.json', encoding='utf-8') as f:
        tweets: list[dict] = []
        for line in f:
            try:
                d = json.loads(line)
                tweets.append(d)
            except:
                pass

        df = pd.DataFrame(tweets)

    df.head()
