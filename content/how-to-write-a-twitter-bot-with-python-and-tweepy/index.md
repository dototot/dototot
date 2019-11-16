---
title: "How To Write a Twitter Bot with Python and tweepy"
date: "2013-11-27"
author: "Jared Nielsen"
image: guidoTwitterBot_final.png
category: "tutorial"
---

Twitter is _the_ social media site for robots. You probably have robot friends and followers and don’t even realize it! In this tutorial, you will write your own Twitter bot with Python and tweepy, and then set it loose in the world.

First we need to create a Twitter Application. Go to [https://dev.twitter.com/](https://dev.twitter.com/) and log in with your Twitter account.

![Creating a new Twitter Application ](./20131126_twitterBot01-1.jpg)

Under your account toggle, select ‘My applications’. On the following screen, select the option to create a new application and fill in the required information.

![Settings tab in Twitter Application](./20131126_twitterBot02-1.jpg)

Once your new application is created, select its Settings tab and towards the bottom of the page click the ‘Read and Write’ radio button. Return to the Details tab and click the big blue button at the bottom of the page to generate your access keys.

Next, we need to install tweepy. [tweepy](https://github.com/tweepy/tweepy "tweepy") is the library we will be using to access the Twitter API with Python. From the command line, run:

```bash
pip install tweepy
```

If you don’t have [pip](https://pypi.python.org/pypi/pip) installed, run:

```bash
sudo apt-get install python-pip
```

Now it’s time to make our robot. Open your favorite text editor or IDE and create a new file (don’t use a word processor; it will load your file with unnecessary junk). Save it as **helloworld.py**

Below is our complete code. Enter your Twitter application keys and tokens accordingly:

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import tweepy, time, sys

argfile = str(sys.argv[1])

#enter the corresponding information from your Twitter application:
CONSUMER_KEY = '1234abcd...'#keep the quotes, replace this with your consumer key
CONSUMER_SECRET = '1234abcd...'#keep the quotes, replace this with your consumer secret key
ACCESS_KEY = '1234abcd...'#keep the quotes, replace this with your access token
ACCESS_SECRET = '1234abcd...'#keep the quotes, replace this with your access token secret
auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
api = tweepy.API(auth)

filename=open(argfile,'r')
f=filename.readlines()
filename.close()

for line in f:
    api.update_status(line)
    time.sleep(900)#Tweet every 15 minutes
```

That’s our robot. But it’s hungry. Let’s feed it! Create a new text file in the same directory as helloworld.py. Save it as **helloworld.txt**. Enter a few memorable lines, such as:

> Hello World!  
> I’m a robot!  
> Robots are superior to humans in every conceivable way!

Be sure to use lots of exclamation points so your robot can be heard. Twitter is a noisy place. Also be sure there are no blank lines in-between your lines of text. Our robot is not an [existentialist.](https://en.wikipedia.org/wiki/Existentialism "Existentialism")

Now we’re ready to go! At the command line enter:

```bash
python helloworld.py helloworld.txt
```

Check your Twitter feed and you should see:

> Hello World!

Let’s break that down into byte sized pieces.

Our first line of Python,

```python
import tweepy, time, sys
```

includes the three packages we need for our program: tweepy, time & sys. We already know what _tweepy_ is for. _time_ will allow us to schedule intervals between our Tweets (so we don’t get in trouble with Twitter), and _sys_ will allow us to feed our robot a file for it to read and Tweet.

The next line is how we feed the file to our robot.

```python
argfile = str(sys.argv[1])
```

We’re assigning our text file to _argfile_. No, not arg as in the sound a pirate makes, but arg as in short for argument. When we run our program from the command line, we are passing the python interpreter two arguments, the first argument, _argv[0]_, is our .py file, **helloworld.py**; the second argument, _argv[1]_, is our text file, **helloworld.tx**t. What we are saying here is that _argfile_ contains the string, _helloworld.txt_.

The next big chunk of code is how we connect our robot to Twitter through our Application:

```python
CONSUMER_KEY = 'YOUR CONSUMER KEY'
CONSUMER_SECRET = 'YOUR CONSUMER SECRET KEY'
ACCESS_KEY = 'YOUR ACCESS KEY'
ACCESS_SECRET = 'YOUR ACCESS SECRET KEY'
auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
api = tweepy.API(auth)
```

Here we are creating a variable, _auth_, and via tweepy, we are authorizing our account with our consumer and access keys. We then create a variable, _api_, and via tweepy connect to the Twitter API with _auth_.

After that, we open and read the helloworld.txt file:

```python
filename=open(argfile,'r')
f=filename.readlines()
filename.close()
```

Here we’re using the _open()_ function to read _argfile_, which you will recall is holding the string _helloworld.txt_. We read the file with the parameter, _‘r’_, for read. Next we read the lines of our file and pass them to a variable called _f_, for file. Finally, we close the file. Closing something you’ve opened is a good habit. Like the refrigerator.

The last block of code is where the magic happens:

```python
for line in f:
    api.update_status(status=line)
    time.sleep(900)#Tweet every 15 minutes
```

Using a _for_ loop, we iterate through every line stored in _f_. For each _line_, we send out a Tweet using _api.update_status(line)_. Then we tell our robot to snooze with _time.sleep(900)_. The _for_ loop will continue until it reads and Tweets the last _line_ in _f_(or finds an error in your file), and will then exit.

That’s it! Keep in mind there are [best practices](https://support.twitter.com/articles/68916-following-rules-and-best-practices# "Twitter Best Practices") to be followed on Twitter. You will want to check before you modify this code or you risk getting your account suspended. And that’s no fun for you or your robot.

Special thanks to [robincamille](https://emerging.commons.gc.cuny.edu/2013/10/making-twitter-bot-python-tutorial/) for writing the post that inspired this tutorial.
