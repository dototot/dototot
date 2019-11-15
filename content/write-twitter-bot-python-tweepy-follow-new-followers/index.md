---
title: Write a Twitter Bot with Python Tweepy to Follow New Followers
date: "2014-09-12"
author: "Jared Nielsen"
image: 20140908_twitterbot_follow1.jpg
category: "tutorial"
---

It’s hard being popular: everyone wants to follow you on Twitter but you don’t have time to follow them back. You could get an assistant or you could automate! In this tutorial, you will write a Twitter Bot with Python using the excellent Tweepy library to automatically follow new followers.

First, start a new application at [https://dev.twitter.com](https://dev.twitter.com)

After that, create a file, keys.py, and add the following:

```python
#visit https://dev.twitter.com to create an application and get your keys
keys = dict(
    consumer_key =          'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    consumer_secret =       'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    access_token =          'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    access_token_secret =   'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
)
```

Enter your keys and tokens from Twitter. Then create another file, follow.py, and add the following:

```python
#! /usr/bin/python
import tweepy
from keys import keys

CONSUMER_KEY = keys['consumer_key']
CONSUMER_SECRET = keys['consumer_secret']
ACCESS_TOKEN = keys['access_token']
ACCESS_TOKEN_SECRET = keys['access_token_secret']

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)

for follower in tweepy.Cursor(api.followers).items():
    follower.follow()
    print follower.screen_name
```

Run this script from the command line:

```python
python follow.py
```

Your shell should return a list of the user names you are following as you follow them.

As you will see, Tweepy does all of the heavy lifting in this script. We first import tweepy and our keys, then hook into the Twitter api. The for loop is the meat and potatoes of our bot. And it’s essentially 2 lines of code! [Cursor](https://docs.tweepy.org/en/latest/cursor_tutorial.html "Cursor Tutorial") is a tweepy object that handles pagination, which is how Twitter manages the endless stream of status updates. If you want to limit how many followers you iterate over, pass a value to the `.items()` function.

Next up? How to unfollow those  who don’t follow you back. Stay tuned!
