---
title: Locate or Find Waldo with the Bash Shell
date: 2014-09-18
author: Jay Nielsen
image: penguins.jpg
category: "tutorial"
---

That wily Mr. Waldo is off on another one of his adventures. This time he’s taken refuge somewhere in the Linux file tree, and it’s up to us to figure out where he went. There are two excellent bash shell commands at our disposal: find and locate. I’d like to get this job done quick, so lets start with the locate command. Locate is a fast way to search for files, because it relies on a pre-written database containing every known file’s location. To locate a file, simply enter ‘locate’ at the prompt, followed by the string you are searching for.

```bash
locate waldo
```

![locate waldo](./Terminal_009.jpg)

By default, locate searches by wholename, which includes the file path. As you can see, this returned one too many results for us. We can limit the search to just the file basename with the ‘-b’ option.

```bash
locate -b waldo
```

![locate basename waldo](./Terminal_010.jpg)

Hm, something isn’t right. Maybe I’ve bungled the capitalization on Waldo’s name. Locate is case-sensitive after all. We can use the ‘-i’ option to make our search case-insensitive.

```bash
locate -bi waldo
```

![locate basename case-insensitive waldo](./Terminal_011.jpg)

Bingo! We found him. Lets move him home for safe keeping, shall we?

```bash
mv "Books/where's waldo/the great picture hunt/Waldo" ~/Waldo
```

![mv waldo](./Terminal_012.jpg)

That’s odd, I swear he was right there! Maybe he moved recently? The locate command does not check to make sure files returned from the database still exist. We need to add the ‘-e’ option to tell it to only return files that exist at the time locate is run.

```bash
locate -bie waldo
```

![locate waldo](./Terminal_013.jpg)

Curses, Martin Handford! We’re going to need a different strategy for finding Waldo. Hey, that’s it! We’ll use the find command. Find is much slower than locate because it runs the search in real-time, scanning through the file tree for our requested file. Find needs to be told where to look and what to look for. The decoy Waldo was in the Books folder, and I bet the real McCoy isn’t far off. Lets start by searching in that directory.

```bash
find ~/Books -name Waldo
```

![find waldo](./Terminal_014.jpg)

Now we’ve got him! But wait, there are two Waldo’s. There can be only one! I have a feeling one of them is a directory, not a file. We are only interested in Waldo the file, not Waldo the directory. With the ‘-type’ option, we can narrow our search to only include files.

```bash
find ~/Books -type f -name Waldo
```

![find waldo type of file](./Terminal_015.jpg)

At last, we have found the real Waldo! The cool thing about the find command is that we can use it to pipe the files we find into another command with the -exec option.

```bash
find ~/Books -type f -name Waldo -exec rm {} \;
```

![remove waldo](./Terminal_016.jpg)

Now nobody can find Waldo.

```bash
find ~/Books -type f -name Waldo
```

![no more waldo](./Terminal_017.jpg)

Lets review what we learned. We now know how to find files with two different bash command: locate and find. Locate searches a pre-written database, making it faster at the sacrifice of accuracy. Find is more accurate and flexible, but searches in real time, making it slower.

<small>Featured image credit: Liam Quinn</small>
