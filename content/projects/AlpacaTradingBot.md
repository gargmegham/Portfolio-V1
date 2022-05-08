---
date: '2021-06-01'
title: 'Alpaca Trading Bot'
github: 'https://github.com/gargmegham/AlpacaBot'
external: ''
tech:
  - Python
  - Alpaca API
  - Gmail API
  - Unit Tests
  - GCP Cloud function
  - GCP Bucket
  - GCP Scheduler
showInProjects: true
---

- A python based low frequency trading bot that uses ALPACA API.
- The bot sends email alerts using Gmail API when certain conditions are met, if the type track type is alert. Else this places buy/sell orders on alpaca platform for stocks mentioned in a JSON file. Made several unit tests to check performance.
- Currently in use by Libisoft Technologies Pvt Ltd USA. Deployed on GCP using cloud scheduler and bucket on cloud storage.
