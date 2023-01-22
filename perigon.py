import pandas as pd
import requests
from datetime import date as Date

PERIGON_API_KEY = 'YOUR_API_KEY'

def getNews(date: Date, no_of_pages: int = 0):
    """
    Retrives news from Perigon API
    """
    
    page_number = 0

    while True:
        response = requests.get(
        "api.goperigon.com/v1/all",
        {
            "api_key": PERIGON_API_KEY,
            "date": f"{date.year}-{date.month}-{date.day}",
            "page": page_number,
            "size": 100,
            
        }
        )

        page_number += 1
        
        if (response.status_code != 200 or page_number == no_of_pages):
            raise StopIteration

        yield response.json()["data"]


for news in getNews(Date(2021, 1, 1), 1):
    print(news)