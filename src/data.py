import requests
r = requests.get("https://api.currentsapi.services/v1/latest-news",
    headers={
        "Authorization": "BwKu5-Scqy0voSoRFF0jeElptp_dFpcMMUGbzK2yfnIbrOKR"
    })
print(r.json())