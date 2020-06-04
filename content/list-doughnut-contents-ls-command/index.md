---
title: List Doughnut Contents with the ls Command
date: 2014-09-25
author: Jay Nielsen
image: 3744843647_abfa834657_b.jpg
category: "tutorial"
---

Trouble is afoot in “the_doughnuts” directory. It seems our friend Homer Price has built himself a newfangled, automatic, doughnut-making machine, and he can’t get it to shut off! On top of that, Ada Lovelace lost her diamond bracelet in the batter, and Homer is certain that it’s encased in one of his circular snack cakes. This looks like a job for ls, or list doughnut contents… I mean list directory contents.

Lets cd to “the_doughnuts” directory, and assess the situation. Using “ls” without specifying a path will list the contents of the current working directory.

```bash
ls
```

![ls](./Terminal_001-1.jpg)

How convenient, Homer has categorized all of his doughnuts into separate directories. We could list the contents of each directory individually, or we could use a wildcard to list the contents of all of the subdirectories.

```bash
ls */
```

![ls subdirectories](./Terminal_0021-1.jpg)

What a delicious display of doughnuts! My gut tells me that the bracelet is most likely hidden inside one of those filled doughnuts. Lets recursively list all of the contents of the filled directory.

```bash
ls -R filled
```

![ls recursively](./Terminal_0031-1.jpg)

That certainly looks tasty, but we’re no closer to finding the bracelet. This calls for a snack break, but Homer’s lousy shop doesn’t even carry my favorite kind of doughnuts. I find it hard to believe that he would sell cake doughnut holes but not cake doughnuts. Say, I wonder if somebody else had their eye on the cake doughnuts. Maybe they hid them! Lets list the contents of “the_dougnuts” directory again, but this time we’ll use the “-a” option to show any hidden files.

```bash
ls -a
```

![list all directory contents](./Terminal_0041-1.jpg)

Aha! Just as I suspected. Lets take a look inside the secret “.cake” directory.

```bash
ls -R .cake
```

![recursively list directory contents](./Terminal_0051-1.jpg)

Would you look at that, there’s a bracelet inside of the traditional cake doughnut! We have to be sure that it belongs to Ms. Lovelace, so lets use the “-l” option to format the shell output in a long list.

```bash
ls -l .cake/traditional
```

![ls long list](./Terminal_006-1.jpg)

Using the “-l” option shows us the file’s permissions, ownership, size, and date last modified in addition to the name. Sure enough, that bracelet belongs to Ada. My goodness, that thing is big. I’m not good with computing file sizes, so lets add the “-h” option to display the file size in a human-readable format.

```bash
ls -lh .cake/traditional
```

![ls long list human readable](./Terminal_0071-1.jpg)

Whoa, one point three gigabytes! We may have solved the mystery of the missing jewelry, but I’ll never understand how that bracelet fit inside of one doughnut.

<small>Featured image credit: Jonathan McIntosh</small>
