---
title: Write a Twitter Bot with Python tweepy to Unfollow Non-Followers from the Command Line
date: "2014-09-22"
author: "Jared Nielsen"
image: 08_Black-billed_Cuckoo1.jpg
category: "tutorial"
---

What do you call those people who don’t follow you back on Twitter? Celebrities? News outlets? Using the Python tweepy library, we will write a bot to easily unfollow non-followers from the command line.

First, log in to [https://dev.twitter.com](https://dev.twitter.com "https://dev.twitter.com") and create a new application.

The create a file, `keys.py`, and fill it in with the appropriate information:

```python
keys = dict(
    screen_name = 'xxxxxxxxx'
    consumer_key =          'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    consumer_secret =       'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    access_token =          'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    access_token_secret =   'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
)
```

Now create a file, `unfollow.py` , and add the following(pun intended):

```python
#! /usr/bin/python
import tweepy
from keys import keys

SCREEN_NAME = keys['screen_name']
CONSUMER_KEY = keys['consumer_key']
CONSUMER_SECRET = keys['consumer_secret']
ACCESS_TOKEN = keys['access_token']
ACCESS_TOKEN_SECRET = keys['access_token_secret']

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)

followers = api.followers_ids(SCREEN_NAME)
friends = api.friends_ids(SCREEN_NAME)

for f in friends:
    if f not in followers:
        print "Unfollow {0}?".format(api.get_user(f).screen_name)
        if raw_input("Y/N?") == 'y' or 'Y':
            api.destroy_friendship(f)
```

To run it from the command line:

```python
python unfollow.py
```

You will be prompted to unfollow the non-followers you are currently following. Goodbye, parasites!

Let’s step through it.

The first few blocks should be familiar to you by now: we import tweepy, our keys, and connect to the Twitter API. In the next two blocks perform a similar role, we create lists, and populate them with followers and friends.

```python
followers = api.followers_ids(SCREEN_NAME)
friends = api.friends_ids(SCREEN_NAME)
```

Next, we iterate over `friends` and use an if statement to check whether or not each element of friends is in `followers`. Before we destroy the friendship, we ask for verification.

```python
for f in friends:
    if f not in followers:
        print "Unfollow {0}?".format(api.get_user(f).screen_name)
        if raw_input("Y/N?") == 'y' or 'Y':
            api.destroy_friendship(f)
```

It’s a simple matter of setting this up to run automatically with a cron job. That’s against Twitter’s Best Practices, so I’ll leave you to figure it out for yourself.
