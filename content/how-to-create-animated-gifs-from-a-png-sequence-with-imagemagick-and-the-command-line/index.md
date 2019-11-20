---
title: How To Create Animated GIFs from a PNG Sequence with ImageMagick and the Command Line
date: "2015-03-29"
author: "Jared Nielsen"
image: 0023.png
category: "tutorial"
---

<div class="video">
<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="arve-iframe fitvidsignore" frameborder="0" name="" scrolling="no" src="https://www.youtube.com/embed/3Nmg28d4TMo" width="480" height="270"></iframe>
</div>

This tutorial demonstrates how to create animated GIFs from a PNG sequence using ImageMagick and the command line on Linux. What you are seeing is a seizure inducing animation that we created for our series, [Superusers: The Legendary GNU/Linux Show](https://www.thehelloworldprogram.com/linux/), which I strongly encourage you to watch if you are interested in Linux, free open-source software, and the surreal.

![#!](./shebang2.gif)

If you haven’t already, install ImageMagick:

```bash
sudo apt-get install imagemagick
```

With ImageMagick installed, navigate to the directory containing your image sequence. In my case, my directory is ‘shebang’, on my Desktop.

```bash
cd Desktop/shebang
```

ImageMagick is very easy to use and easy to understand. We will be using ImageMagick’s convert program. We can see how convert works on its man page:

```bash
man convert
```

On the convert man page, you will see a line explaining its use:

```bash
convert [input-option] input-file [output-option] output-file
```

We’re going to pass the convert program an input option, an input file and specify any output options and the file name.

At the prompt enter the following command:

```bash
convert -delay 2 -loop 0 *.png -scale 480x270 shebang.gif
```

Let’s walk through this, step by step. Our first input option is `-delay`. This sets the length of the pause between ‘frames’ in our animation. Here, we set it to 2\. Next we use the `-loop` switch to determine how often we want the animation to repeat. In our case, we want to it run continuously, so we set this option to 0\. If you only want it to run once, set it to 1\. Twice, 2, and so on. Our input-file is a sequence, so we use the ‘wild card’, \*, to tell the convert program to use all files ending with .png. We’re using the PNG sequence I exported from Blender at 1920 x 1080, which is what we want for video, but way too big for a GIF. Here we set our output-option to scale down with `-scale` at 480×270\. Lastly, we enter the name and file format of our output, which in this case is a .gif, shebang.

\#!
