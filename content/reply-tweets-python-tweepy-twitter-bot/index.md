---
title: How To Reply to Tweets with a Python Twitter Bot using Tweepy
date: "2014-05-22"
author: "Jared Nielsen"
image: 02_mockingbirds.jpg
category: "tutorial"
---

Why do people use Twitter? Attention. Give them what they want with this simple Python Twitter Bot. We’ll be using Python and the excellent Tweepy library to search for tweets by key word and post a reply. If this is new to you, please see our introductory tutorial, [How To Write A Twitter Bot with Python and tweepy](https://dototot.com/how-to-write-a-twitter-bot-with-python-and-tweepy/ "How To Write a Twitter Bot with Python and tweepy").

First, visit [https://dev.twitter.com](https://dev.twitter.com), and create a new application.

Now, in your development directory, create a file, keys.py, and add the following code:

```python
#!/usr/bin/env python
#keys.py
#visit https://dev.twitter.com to create an application and get your keys
keys = dict(
	consumer_key =          'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	consumer_secret =       'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	access_token =          'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
	access_token_secret =   'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
)
```

Replace the ‘x’ fields with your keys and tokens from your newly created Twitter application. Keep the quotation marks, though.

Lastly, create a file, hello.py, in the same directory as keys.py, and add the following code:

```python
#!/usr/bin/env python
import tweepy
#from our keys module (keys.py), import the keys dictionary
from keys import keys

CONSUMER_KEY = keys['consumer_key']
CONSUMER_SECRET = keys['consumer_secret']
ACCESS_TOKEN = keys['access_token']
ACCESS_TOKEN_SECRET = keys['access_token_secret']

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)

twts = api.search(q="Hello World!")

#list of specific strings we want to check for in Tweets
t = ['Hello world!',
    'Hello World!',
    'Hello World!!!',
    'Hello world!!!',
    'Hello, world!',
    'Hello, World!']

for s in twt:
    for i in t:
        if i == s.text:
            sn = s.user.screen_name
            m = "@%s Hello!" % (sn)
            s = api.update_status(m, s.id)
```

Let’s walk through this.

First, as you will recall from our previous tutorial, we import tweepy. Then, with this line we import our keys dictionary from our keys.py module:

```python
from keys import keys
```

We next set our constants for authorization and connect with the API.

```python
CONSUMER_KEY = keys['consumer_key']
CONSUMER_SECRET = keys['consumer_secret']
ACCESS_TOKEN = keys['access_token']
ACCESS_TOKEN_SECRET = keys['access_token_secret']

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)
```

Using the search method from the API, we run a query for the string “Hello World!”, and store it in the variable, twt:

```python
twt = api.search(q="Hello World!")
```

The great thing about Twitter is that you can write robots. The bad thing is that other people can write robots. There’s a particularly annoying variety that Tweets something along these lines:

> Hello! Please follow. It would mean the world to me.

Unfortunately, our search query collects these because it features the words “hello” and “world”. So let’s create a list of specific strings we want to reply to:

```python
t = ['Hello world!',
    'Hello World!',
    'Hello World!!!',
    'Hello world!!!',
    'Hello, world!',
    'Hello, World!']
```

Searching for specific strings has the added benefit of disregarding Tweets filled with profanity, which, if our goal is to be professional, we don’t want to reply to.

Now we run our nested for loops, iterating over our list of Tweets first, then over our list of strings, finally checking if our Tweet is equal to our string. If so, we reply:

```python
for s in twt:
    for i in t:
        if i == s.text:
            sn = s.user.screen_name
            m = "@%s Hello!" % (sn)
            s = api.update_status(m, s.id)
```

From our status object, s, we assign the user’s screen name, user.screen_name, to the variable sn. Next we create our message, m. We want the Tweet to begin with the users Twitter handle so it doesn’t appear in our timeline and annoy our followers. Lastly, we post our status update.

When the world says “Hello!”, you can now automatically respond.
