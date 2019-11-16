---
title: "Create Stop Motion Animations on Linux with Entangle and avconv"
date: "2013-08-15"
author: "Jay Nielsen"
image: lwksconvert.jpg
category: "tutorial"
---

Lightworks hates all those fancy video codecs you so love to encode with. It is very picky about what it will deal with. Fortunately for us, avconv will let us convert to a Lightworks preferred format! So if you’re having difficulty getting Lightworks to transcode your videos, try converting them with this avconv command.

```bash
avconv -i input.mkv -c:v mpeg2video -pix_fmt yuv422p -g:v 1 -q:v 1 -qmin:v 1 -c:a mp2 -r:a 48000 -b:a 384k output.mp4
```

All you need to change here is the input and output file names. Below is a brief breakdown of all of the parameters we set.

**-i** Specifies your input file

**-c:v** Specifies your video codec

**-pix_fmt** Specifies your video [color space](https://en.wikipedia.org/wiki/Color_space).

**-g:v** Enables [intra frame](https://en.wikipedia.org/wiki/Intra-frame) compression.

**-q:v** Sets the output quality of the video on a scale of 1-31 where 1 is the best quality.

**-qmin:v** sets the minimum video quantizer scale (1-31).

**-c:a** selects the audio codec.

**-r:a** sets the audio sample rate.

**-b:a** sets the audio bit rate.

We can also batch convert a whole folder of videos with a few additions to this command.

```bash
for i in *.mkv; do avconv -i "$i" -c:v mpeg2video -pix_fmt yuv422p -g:v 1 -q:v 1 -qmin:v 1 -c:a mp2 -r:a 48000 -b:a 384k $(basename "$i" ".mkv").mp4 ; done
```

All we’ve done here is put the avconv command inside of a for loop that includes any files in the current directory with the extension .mkv. The last bit, **$(basename “$i” “.mkv”).mp4**, will change the output extension to .mp4 but otherwise keep the same file name. You can change it to look for any other extension like mov, avi, etc. Just make sure you change the reference to the extension at the beginning and end of the script.

If you are totally averse to using the command line, you can alternatively install a Windows program called [EyeFrame Converter](https://eyeframeconverter.wordpress.com/) under Wine. This is a small application built specifically for converting videos for import into Lightworks. This is also how I figured out what settings to use in avconv.
