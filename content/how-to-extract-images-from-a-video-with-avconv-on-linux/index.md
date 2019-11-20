---
title: How To Extract Images from a Video with avconv on Linux
date: "2015-05-17"
author: "Jared Nielsen"
image: 20150517_howto_avconv_extract_video_gremlin.png
category: "tutorial"
---

Suppose you’ve got an awesome video that nobody is watching and you want to create animated GIFs from excerpts of it so that people are forced to see your genius in action. But how do you extract images from a video? You’re in luck! Using the super-powerful avconv on Linux, you can quickly and easily break a video down frame by frame. If you follow our tutorial [How To Create Animated GIFs from a PNG Sequence with ImageMagick and the Command Line](/how-to-create-animated-gifs-from-a-png-sequence-with-imagemagick-and-the-command-line/), you can quickly and easily convert your PNG image sequence to an animated GIF.

<div class="video">
<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="arve-iframe fitvidsignore" frameborder="0" name="" sandbox="allow-scripts allow-same-origin allow-presentation allow-popups" scrolling="no" src="https://www.youtube-nocookie.com/embed/CPNueiAMBvc?iv_load_policy=3&amp;modestbranding=1&amp;rel=0&amp;autohide=1&amp;playsinline=1&amp;autoplay=0" width="480" height="270"></iframe>
</div>

I’m going to use this video as our example. It’s episode 4, “ls or List Directory Contents”, of our series, [Superusers: The Legendary GNU/Linux Show](https://www.youtube.com/playlist?list=PL5BlhFw3OgbpUYL4zP4zM8Na5Q2TwQA_X). At 2:03 there’s a close-up of a jittery gremlin and some acorns that I think will make a great GIF.

If you don’t already have it, install avconv:

```bash
sudo apt-get install libav-tools
```

From the command line, navigate to the directory containing your video. The run the following command:

```bash
avconv -i my_awesome_video.mp4 -r 30 -f image2 %04d.png
```

Let’s break this down, no pun intended.

First, we pass avconv our input file, ‘my_awesome_video.mp4’. Then, using the -r, or rate, switch, we specify that we want to extract 30 frames per second. Why? Because the standard frame-rate for video is 29.97 frames per second. But 30 is close enough. The -f option specifies that we want our output to be an image. And lastly: %04d.png applies a numerical sequence to the frames using four digits starting with 0001\. Thus, our output will be a sequence of images titled ‘0002.png’, ‘0003.png’, ‘0004.png’, and so on.

If you’re working with a very long video and you only want to extract a short clip, use the seek option, -ss, and the duration option, -t, to specify the start point and the length of the clip, using this format: hh:mm:ss, where hh is hours, mm is minutes, and ss is seconds.

For example, to extract the 4 seconds I want to convert to a GIF I run the following command:

```bash
avconv -i my_awesome_video.mp4 -r 30 -ss 00:02:02 -t 00:00:03 -f image2 %04d.png
```

This returns a much more manageable image sequence and takes much less time to complete. Lastly, if you want to scale your image sequence up or down, you can use the -s option and pass it the WxH parameters. I’ll let you figure that one out. If you need help, [Read The Fantastic Manual](https://youtu.be/DQbODhkyA4g?t=22s)!

```bash
man avoncv
```

Follow the directions in our tutorial [How To Create Animated GIFs from a PNG Sequence with ImageMagick and the Command Line](/how-to-create-animated-gifs-from-a-png-sequence-with-imagemagick-and-the-command-line/) to compile your extracted video frames into a miniature masterpiece, like this:

![Gremlin GIF](./gremlin.gif)
