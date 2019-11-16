---
title: "ImageMagick Tutorial: How To Batch Crop Images on the Command Line"
date: "2013-10-28"
author: "Jared Nielsen"
image: 20131028_imageMagickCropTutorial-1-1.jpg
category: "tutorial"
---

Let’s say you’re writing a series of tutorials on Blender and you’re using the PrintScreen key to take screen shots. PrintScreen is great, but it grabs everything. You probably don’t want your application dock appearing in every image. And you probably don’t want to edit dozens of images manually. You’re in luck! ImageMagick has an easy to use crop function that you can quickly and easily execute from the command line.

If you don’t already have it installed, get ImageMagick the easy way:

```bash
sudo apt-get install imagemagick
```

Place all of the images you want to crop in a directory and navigate to that directory via command line. In the example I’m using here, I want to trim the bottom 25 pixels from a series of .png’s. I run the following command to do so:

```bash
mogrify -format png -gravity south -chop 0x25 *.png
```

The `-format png` option states that I want my output file in the .png format. The `-gravity south` option states that I want the crop to start at the bottom of my image. The `-chop 0x25` states that I want to cut 25 pixels from the height. The `*.png` states that I want these actions to be applied to every .png file in the current directory. Below is my original file:

![Screenshot from 2013-10-28 13:43:49](https://dototot.com/app/uploads/2013/10/Screenshot-from-2013-10-28-134349-1.jpg)

And the freshly trimmed image:

![20131028_imageMagickCropTutorial-1](https://dototot.com/app/uploads/2013/10/20131028_imageMagickCropTutorial-1-1.jpg)
