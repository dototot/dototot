---
title: touch, rm, ls, and cp Files in the Bash Shell Petting Zoo
date: 2015-12-10
author: Jay Nielsen
image: thumbnail.jpg
category: "tutorial"
---

For this Linux/Unix bash shell tutorial, we have an extra special field trip planned in the “Petting Zoo” directory. Seatbelts everyone!

```bash
cd "Petting Zoo"
```

Lets take a look around. Use the “ls” command to list the directory contents.

```bash
ls
```

![zoo 01](./zoo-01.jpg)

Llamas, turkeys, and bison, oh my! I’d like to know a bit more about these files. The “-l” option shows us the file’s permissions, group owner, file size, and date last modified. Radical!

```bash
ls -l
```

![zoo 02](./zoo-02.jpg)

Oh no! That poor llama hasn’t been modified in years! How sad, it must be lonely. Lets “touch” it.

```bash
touch llama
```

Touching a file updates the access and modification time of the file, so if we list the petting zoo directory contents again…

```bash
ls -l
```

![zoo 03](./zoo-03.jpg)

We see the llama has been “touched” recently. Doesn’t that just make you feel all warm inside?

Lets touch everything!

```bash
touch *
```

Ouch! That hedgehog was unpleasant, but you know what would be amazing? A unicorn.

```bash
touch unicorn
```

It may not look like anything happened, but you have to believe!

```bash
ls
```

![zoo 04](./zoo-04.jpg)

Check it out! The touch command created a new file when we requested a file that didn’t exist. Magical!

This unicorn seems lonely and empty, I think she needs a friend. Lets make one with the cp command.

```bash
cp unicorn unicorn_copy
```

They should get along nicely, seeing as they are identical twins.

```bash
ls -l
```

![zoo 05](./zoo-05.jpg)

Not all files live out in the open, we can use the “-a” option with “ls” to show any hidden files.

```bash
ls -a
```

![zoo 06](./zoo-06.jpg)

Oh em gee! It’s a “.chupacabra”. Wait, what _is_ a chupacabra? The “file” command will shed some light on this.

```bash
file .chupacabra
```

![zoo 07](./zoo-07.jpg)

It’s worse than I could possibly have imagined. The .chupacabra is a Windows executable, and it’s upsetting the free and open-range files! It’s time for some good old-fashioned human intervention.

```bash
rm .chupacabra
```

The .chupacabra is gone.

```bash
ls -a
```

![zoo 08](./zoo-08.jpg)

But what’s this hidden “.den”?

```bash
file .den
```

![zoo 09](./zoo-09.jpg)

It’s a directory! Lets see what’s inside.

```bash
ls -a .den
```

![zoo 10](./zoo-10.jpg)

Holy blood-sucking cryptids! More “.chupacabras”. We need to recursively remove that “.den” directory, stat!

```bash
rm -r .den
ls -a
```

![zoo 11](./zoo-11.jpg)

Peace has been restored to the “Petting Zoo” directory. Lets head home.

```bash
cd
```

![zoo 12](./zoo-12.jpg)

Lets review what we learned on our field trip:

- ls lists the contents of a directory.
- touch updates the date accessed and date modified times of a file.
- If touch is given a non-existent file, it will create one for you.
- the file command describes the file type.
- cp copies a file.
- rm removes a file.
- rm -r removes a directory and all of the files and directories inside of it.

Class dismissed!

<small>Featured image credit: [Sam Howzit](https://www.flickr.com/photos/aloha75/14875423793)</small>
