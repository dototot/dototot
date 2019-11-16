---
title: Write a Twitter Bot with Python and Tweepy To Tweet a Message to a List of Users
date: "2014-05-23"
author: "Jared Nielsen"
image: 08_Black-billed_Cuckoo.jpg
category: "tutorial"
---

Sometimes you want to reach out to people who aren’t following you on Twitter. You _could_ do this by sending one tweet at a time. Or you could automate the process and do it in bulk. In this tutorial, you will write a Twitter Bot using the excellent Tweepy library to send a message to a list of users.

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

Enter your keys and tokens from Twitter. Then create a file, nudge.py, and add the following:

```python
#!/usr/bin/env python
import tweepy, sys, time
from random import randint
from keys import keys

CONSUMER_KEY = keys['consumer_key']
CONSUMER_SECRET = keys['consumer_secret']
ACCESS_TOKEN = keys['access_token']
ACCESS_TOKEN_SECRET = keys['access_token_secret']

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)

handles = sys.argv[1]
f = open(handles, "r")
h = f.readlines()
f.close()

for i in h:
    i = i.rstrip()
    m = i + " " + sys.argv[2]
    s = api.update_status(m)
    nap = randint(1, 60)
    time.sleep(nap)
```

Next, create a file, handles.txt, and add the list of Twitter user names you want to message:

```python
@dotototdotcom
@helloworldshow
@jarednielsen
```

Run this script from the command line by passing three arguments to the Python interpreter. The first argument is the file itself, nudge.py. The second argument is our list of user names, handles.txt. And our third argument is the message we want to send to everyone on the list.

```bash
python nudge.py handles.txt "Nudge nudge..."
```

Go see for yourself. Then try it again with a different message.

Let’s walk through it. First is our imports: `tweepy` , of course, but we need `sys` for the arguments we are passing, `time` for the nap we want our for loop to take in-between iterations, and `randint` to generate the length of said nap. Finally, we import our keys from our keys.py module:

```python
#!/usr/bin/env python
import tweepy, sys, time
from random import randint
from keys import keys
```

The next few lines are straightforward, we create CONSTANTS with our keys and connect to the Twitter API.

```python
CONSUMER_KEY = keys['consumer_key']
CONSUMER_SECRET = keys['consumer_secret']
ACCESS_TOKEN = keys['access_token']
ACCESS_TOKEN_SECRET = keys['access_token_secret']

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)
```

Next we read our handles.txt file:

```python
handles = sys.argv[1]
f = open(handles, "r")
h = f.readlines()
f.close()
```

As you will recall, our file, handles.txt, was the second argument in our Python interpreter command. We reference it here with `sys.srgv[1]` (1 because Python begins its count at 0, and our first argument was nudge.py), and then assign it to the variable `handles` . We next create a new variable, `f` , that we use to open `handles` . The `“r”` parameter tells the open function that we want to read the file. In the following line, we read the lines in `f` and store them in a new variable, `h` . Finally, we close our file.

Now the fun part.

```python
for i in h:
    i = i.rstrip()
    m = i + " " + sys.argv[2]
    s = api.update_status(m)
    nap = randint(1, 60)
    time.sleep(nap)
```

Using a for loop, we iterate over all of the user names stored in `h` . We want to strip off unnecessary newline characters and white space from each user name string. We do that using the `rstrip()` method. Then we reassign the variable back to itself. Next we concatenate our message by adding our user name string to a blank space, `” “` , and adding that to our message, which is `sys.argv[2]` . Next, we send our message to Twitter with `api.update_status(m)` . And lastly, we rest. We generate a random integer between 1 and 60 and pass that to `time.sleep()` to pause the program for that many seconds. We do this so our robot will appear less robotic to anyone watching.

Now you’re ready to sing your praises to the world with your new Twitter Bot.
