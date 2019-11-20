---
title: "How to Compile a Stop Motion Animation Image Sequence with avconv"
date: "2014-05-26"
author: "Jay Nielsen"
image: animating2.jpg
category: "tutorial"
---

Now that you’ve [captured all of your stop motion animation frames with Entangle](/create-stop-motion-animations-linux-entangle-avconv/ "Create Stop Motion Animations on Linux with Entangle and avconv"), it’s time to compile your images into a video. You should have a folder located at ~Pictures/capture that is chock full of images labeled “capturexxxxxx.jpg”. This is perfectly formatted for feeding an image sequence into avconv, but remember we made mistakes and deleted files along the way, so there are gaps in our image sequence. We’ll need to install a bulk rename utility like pyRenamer to correct them.

```bash
sudo apt-get install pyrenamer
```

In pyRenamer, navigate to the folder containing your captured images. Select all of the images by clicking on any one file name and pressing control + a. Change the “renamed file name pattern” to “frame{num6}.jpg” (without the quotes), preview your changes, then commit them with the “Rename” button.

![pyrename](./stopmo7.jpg)

With our image files renamed, we are nearly ready to compile them into a video. First we need to decide how to crop our video. Unless you set your camera to shoot in a standard video frame size, you’ll need to adjust the crop manually. These next few steps require some command line magic, so it may look scary, but it’s pretty straightforward. The easiest way I’ve found to determine the crop parameters is with [Gimp](https://www.gimp.org/), so open any one of your frames in Gimp. With the crop tool selected, check the “Fixed” option and set it to “Aspect ratio”. For the sake of demonstration, I’m assuming we are going to output a 1080p video, so in the field just below the “Fixed” checkbox, enter “16:9”.

![gimp crop settings](./stopmo8.jpg)

Drag out a selection on the image for the crop you intend to use for your video, but don’t execute the crop.

![gimp crop](./stopmo9.jpg)

Back in the tool options panel is a bunch of useful information that we’ll need for our avconv parameters.

![gimp crop parameters](./stopmo10.jpg)

Put Gimp aside and navigate to your capture folder via the command line.

```bash
cd ~Pictures/capture
```

The time for compiling our animation is now! I don’t want you to freak out, but our avconv command looks like this:

```bash
avconv -f image2 -r 12 -i frame%06d.jpg -vf crop=4663:2623:289:448,scale=1920:1080,vflip,hflip -r:v 29.976 -c:v libx264 -qp 0 -preset veryslow -an "animation.mkv"
```

Generally when converting input with avconv, you would only need to specify the path to the file with the **-i** parameter. With image sequences, we need to supply a little more information.

**-f** Indicates that the input is an image sequence.

**-r** is the input framerate. So if you were shooting for 24 frames per second, you would put 24 here. You may want to try compiling several times at different input frame rates to find the one that suits your animation best.

**-i** is the naming scheme for your image sequence. “frame%06d.jpg” tells avconv that your files all begin with the word “frame” followed by a sequential number that is six digits long and contains leading zeros, and ends with “.jpg”.

The **-vf** parameter is a comma separated list of video filters. This is where the real magic happens. First we need to crop the image using the data we gathered with Gimp’s crop tool. The format of the crop filter is “crop=output width:output height:x:y. The output width and height are the “size” parameters from Gimp’s crop tool, and the x and y are the “position” parameters. So based on the crop settings I chose in Gimp, my avconv crop filter would be crop=4663:2623:289:448.

Surely you noticed that the output width and height are rather large. Normally I would set the video size with the **-s:v** parameter, but it doesn’t play nice with the crop filter, so we’ll need to use a scale filter to properly size the output. This one is pretty straightforward, it’s formated as “scale=output width:output height”. Since we are outputting our video to 1080p, the scale filter would be “scale=1920:1080”.

If you used the upside down method, you’ll also need to tack on the “vflip” and “hflip” parameters. These flip your output video vertically and horizontally, essentially rotating it 180 degrees.

The remaining parameters are for your video codec. You could set these to anything you want, but I chose to export a lossless, x264 encoded mkv file at 29.976 frames per second.

Now for the best part… watching our animations! How did yours turn out?
