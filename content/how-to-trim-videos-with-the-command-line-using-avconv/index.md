---
title: "How to Trim Videos with the Command Line Using AVConv"
date: "2013-08-16"
author: "Jay Nielsen"
image: trimming.jpg
category: "tutorial"
---

Lets say you have a video that is too long and you want to cut out a piece from the middle without having to bother with importing the video into an editor, making some cuts, then exporting again. Not only is this annoying, you’ll be unnecessarily transcoding your video! There’s an easy way to trim videos from the command line using avconv. Simply use this command:

```bash
avconv -i [input file] -ss [start time] -t [duration] -codec copy [output file]
```

Let me give you an example of how we can use this. Suppose we have a video that has about 42 seconds of unwanted footage at the beginning.

![41seconds](./41seconds.jpg)

We’d need to set the **-ss** parameter to 00:00:42\. This parameter accepts a time code value formatted as hours:minutes:seconds. It tells avconv that we only want to keep the video after 42 seconds in. Easy, right?

But wait, I forgot to mention that we have about 12 seconds of footage that we don’t want at the end of the video. We can use the **-t** parameter to specify the duration of video to keep. This is a bit tricky because **-t** is not the out point, it is the total duration of the output clip. Meaning what once was 00:00:42 for my input file is now 00:00:00 for the output file. So if I want to trim 12 seconds off of the end, I have to do a teeny tiny bit of math. An easy way to figure this out is to subtract your **-ss** start time from the outpoint you want to use and enter that as the **-t** parameter. So lets say the outpoint we want to use in the source video is 00:04:08\. If we subtract 00:00:42 from 00:04:08 we get 00:03:26.

The final avconv command would look like this:

```bash
avconv -i input.mkv -ss 00:00:42 -t 00:03:26 -codec copy output.mkv
```

Now we have a trimmed video that is three minutes and twenty six seconds long. Just as we anticipated.

![alltrimmed](./alltrimmed.jpg)

Now I must confess something… This is how trimming a video with avconv would work _in theory_. In practice, I had to make a small change. For whatever reason, the audio was not copying over to my output video nicely, so I had to transcode it. If that happens to you, you can easily fix it by using this command:

```bash
avconv -i input.mkv -ss 00:00:42 -t 00:03:26 -c:v copy -c:a flac output.mkv
```

With this command we have told avconv to copy only the video codec from the source file and transcode the audio to flac. Flac is a lossless codec, so I don’t feel too bad about transcoding it.
