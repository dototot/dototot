---
title: "ImageMagick Tutorial: How To Batch Resize Images on the Command Line"
date: "2013-10-30"
author: "Jared Nielsen"
image: 20131028_imageMagickCropTutorial-1-1.jpg
category: "tutorial"
---

Let’s say you’re writing a series of Blender tutorials and you’re using PrintScreen to grab screen shots. Unfortunately, this gives you a Pictures directory filled with massive images not optimized for uploading to, and displaying on, a web page. The last thing you want to do is resize them manually. You’re in luck! With the ImageMagick `-resize` option, you can quickly and easily batch scale those images to a manageable size.

Place all the images you want to scale in a directory and navigate to that location via command line. Then enter:

`mogrify -resize 960x528 *.png`

This command resizes all of the .png files in your directory to a size of 960 pixels by 528 pixels. Perhaps the height isn’t as important as the width. You can simply enter:

`mogrify -resize 960 *.png`

This will scale all of your images to a width of 960 pixels, the height will be scaled accordingly, preserving the aspect ratio. Perhaps you have a height and width you are aiming for, but want to preserve the aspect ratio. You can enter:

`mogrify -resize 960x528! *.png`

When and where possible this will scale your images to 960 by 528 pixels, but will preserve the aspect ratio of those images that won’t scale to these dimensions exactly.
