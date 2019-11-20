---
title: "How to Model and Animate a Robot: Key Frame a Blender Animation"
date: "2016-09-15"
author: "Jared Nielsen"
image: "dototot_blender_model_animate_robot_265-1.jpg"
category: "tutorial"
---

In this chapter, you will learn how to key frame a Blender animation by adding an audio file to your project and syncing your robot’s movements to the sound.

you’re just joining us, you will want to start with [Part 1, Beginner Blender Tutorial: How to Model & Animate a Robot.](/beginner-blender-tutorial-how-to-model-and-animate-a-robot/)

![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_197-1-1.jpg)  
![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_198-1.jpg)

In the Properties panel under Render, set the Frame Rate to 29.97.

![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_199-1.jpg)

In the Timeline panel, select and switch to the Video Sequence Editor.

![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_201-2.jpg)

From the Video Sequence Editor menu, click Add and select Sound. This will prompt you to open a sound file. Select [hello_world.wav](./hello_world.wav).

![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_204-1.jpg)

Position the cursor at the end of the sound clip.

![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_205-1.jpg)

Then switch back from the Video Sequence Editor to the Timeline.

![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_207-1.jpg)

Change the length of the animation to match the position of the cursor (66).

![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_208-1.jpg)

**Shift + LEFT** to move the cursor to the beginning of the Timeline. In the Timeline, click the Playback menu and check Audio Scrubbing and AV Sync.

Press **ALT + A** to play. Hello World!

## Key Frame a Blender Animation

![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_210-1.jpg)

**RMB** to select the robot mesh. In the Properties panel, select Object Data.

![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_211-1.jpg)

Press **RIGHT** until you hear the first bite of audio (11). Then move back one frame (10). Under Shape Keys, select Mouth. Hover your mouse over the Value slider and press **I** to insert a key frame.  
![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_213-1.jpg)

**RIGHT** to find end of first syllable (‘hell’, 17), and hover your mouse in the Value field and press **I**, then skip back to find the ‘peak’ of ‘hell’ (13).

![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_214-1.jpg)

Set Value slider to 1, and press **I** to insert a key frame.  
![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_215-1.jpg)

Press **UP** to jump to the last key frame, then **RIGHT** to find end of ‘hello’ (39). Press **I** to insert a key frame.

![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_216-1.jpg)

**LEFT** to find ‘peak’ of ‘o’ (30), set Value to 1 and press **I** to insert a key frame.

Press **UP** to jump to the last key frame and **RIGHT** to the end of ‘World’ (52). Press **I** to insert a key frame.

Press **LEFT** to find the ‘peak’ of ‘World!’ (45), set the Value to 1 and insert a key frame with **I**.

**SHIFT + LEFT** to jump to the beginning of the Timeline. Then press **ALT + A** to play. Hello World!

Press **ALT + A** to pause.

![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_217-1.jpg)

Switch to Quad View with **CTRL + ALT + Q**.

If you’re not already at the beginning of the Timeline, press **SHIFT + LEFT** to get there.  
**![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_220-1.jpg)**

Our robot is a bit stiff with its arms out. To start our animation, let’s put the arms in a more relaxed position. **RMB** HandIK.L, then press **G** to Grab and move it around. Use the different views as needed to position it as above. The press **I** and select Location.

![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_221-1.jpg)

Alternatively, you can hover the mouse of the Location in the Transform panel, and press **I**.

![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_222-1.jpg)

**RMB** HandIK.R and press **G** to Grab it and move its position. Press **I** and select Location.  
![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_224-1.jpg)

Move the Timeline to 30\. Press **G** to Grab and move the arm up. Press **I** and select Location.

![How to Model and Animate a Robot: Key Frame a Blender Animation](./dototot_blender_model_animate_robot_227-1.jpg)

**RMB** HandIK.L Press **I** and select Location, then move to frame 50 in the Timeline. Press **G** to Grab and move the arm up. Then press **I** and select Location.

Press **SHIFT + LEFT** to jump to the beginning of the Timeline and **ALT + A** to play.

Hello World!
