---
title: "Beginner Blender Tutorial: How to Model & Animate a Robot"
date: "2016-09-06"
author: "Jared Nielsen"
image: "untitled02-2-1.jpg"
category: "tutorial"
---

The best way to learn Blender is by getting your hands dirty and working on a project. In this Beginner Blender tutorial series, you will model and animate a robot, create a simple scene and render a final video. You’ll be creating a simplified version of Invalid ID, the CG robot starring in the final episode of The Hello World Program.

<div class="video">
<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="arve-iframe fitvidsignore" name="" scrolling="no" src="https://www.youtube.com/embed/OKVQdPuwdYg" width="480" height="270" frameborder="0"></iframe>
</div>

And this is the robot, scene and animation you will be creating in this series:

<div class="video">
<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" class="arve-iframe fitvidsignore" name="" scrolling="no" src="https://www.youtube.com/embed/WfsHlpsa9Jg" width="480" height="270" frameborder="0"></iframe>
</div>

Let’s begin!

## Beginner Blender Tutorial: How to Model & Animate a Robot

To use Blender, you will need a keyboard with a numeric pad and a 3-button mouse with a scrolling wheel. If you haven’t already, download [Blender](https://www.blender.org/). This tutorial was created using version 2.77, but you should be okay with the latest release. After you start Blender, you will see the default setup below. The interface can be a bit intimidating at first, but don’t worry, it will all make sense in the end. The main panel is the 3D View. At the bottom is the Timeline. On the right are the Outliner and Properties.

When possible, I’ll be teaching you keyboard shortcuts, rather than selecting actions via menus. To get good and fast at Blender, you will want to know all the shortcuts, so why not start now? In this tutorial, keyboard and mouse actions will be displayed in **BOLD.** Shortcuts that read **NUM1, NUM2, NUM3,** etc. refer to the keys on the numeric pad. **LMB** and **RMB** refer to the Left Mouse Button and the Right Mouse Button. In a nutshell, the **LMB** is used to click buttons and the **RMB** is used to select objects. This will make sense later.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_001-3.jpg)

With your cursor in the 3D view panel, press **N** to open the Transform tab. This provides you information on, and allows you to enter values for, the position, rotation and scale of objects in your scene. We’ll be using it a lot later.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_002-1.jpg)

Now press **NUM1** to switch to front view and **NUM5** to switch to orthographic perspective.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_003-1.jpg)

See how the Cube is highlighted in orange? That means it’s the object currently selected.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_004-1.jpg)

Press **X** to delete the Cube. A popup menu will ask you to confirm. Click with the **LMB** or press **ENTER.**  
![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_005-1.jpg)

Now that that’s out of the way, let’s build our robot. Press **SHIFT+A** to access the Add menu. Under Mesh, select Cylinder.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_006-1.jpg)

Zoom in with scroll wheel and press **Tab** to enter Edit Mode. In Edit Mode, you can see the points and lines that compose the Cylinder highlighted in orange. These points and lines are called _vertices_ and _edges_ and 3D objects composed of vertices and edges are called _meshes_.  
![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_007-1.jpg)

With your mouse hovering over the Cylinder, press **CTRL+R** to access the Loop Cut and Slide tool. You will see a violet line appear around the center of the Cylinder.  
![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_008-1.jpg)

Press **2** to create two loops, and hit **ENTER** twice, once to confirm two loops and twice to confirm placement.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_009-1.jpg)

**CTRL + TAB** opens the Mesh Select Mode menu. Select Edge.  
![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_010-1.jpg)

**ALT + SHIFT + RMB** to select the lower loop.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_011-1.jpg)

Press **S** to Scale and type **1.1**, then press **ENTER.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_013-1.jpg)

Select an edge on the upper loop and press **ALT + SHIFT + RMB** to select all of the edges in the loop.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_014-1.jpg)

With the edge loop selected, press **G** to Grab it, **Z** to move it only on the Z-axis and type in **.5\.** Press **ENTER**.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_015-1.jpg)

**CTRL + TAB** and select Face.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_016-3.jpg)

**ALT + SHIFT + RMB** to select the upper loop of faces.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_017-1.jpg)

Press **S** to Scale and enter .9, then press **ENTER** to confirm.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_018-1.jpg)

Press **NUM7** to switch to top view and **RMB** to select the circular face.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_019-3.jpg)

Press **E** for Extrude, then **ENTER.** This creates a new face on top of the old face.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_020-1.jpg)

Press **S** to Scale and enter .5, then press **ENTER** to confirm.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_021-2.jpg)

Press **NUM1** to switch to front view.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_022-2.jpg)

Then **E** to extrude a new face, **ENTER** to confirm and **G** to Grab, **Z** to constrain it the move to the Z-axis and enter .2\. Then press **ENTER.**  
![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_023-1.jpg)

Switch back to top view with **NUM7\.** Press **K** to access the Knife tool.  
![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_024-2.jpg)

Slice the circle in half by hovering the cursor over the ‘top’ vertex. Click **LMB** to start the cut, then move the cursor to the ‘bottom’ vertex. Click **LMB** to place another point, then press **ENTER** to finalize the cut.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_026-1.jpg)

**NUM1** to front view, then press **NUM2** six times to rotate to the bottom of the mesh.

Select the bottom face.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_027-2.jpg)

Using the Knife tool again, with **K**, slice the circle in half, pressing **ENTER** to finalize the cut.  
![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_029-2.jpg)

That’s the body. Now let’s add a head. Press **NUM1** to return to front view, then press **Z** for wireframe view.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_030-2.jpg)

Add a Cube with **SHIFT + A**.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_032-1.jpg)

Scale it down .8 with **S.** Press **ENTER** to confirm.  
![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_033-1.jpg)

Press **G** to Grace, **Z** to constrain the move to the Z-axis, and 2, to move it two Blender units. Press **ENTER** to confirm.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_035-1.jpg)

Scale the Cube on the Z-axis by pressing **S**, then **Z** and .6, followed by **ENTER.** Press **Z** to return to solid view. Then select the front face of Cube.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_038-2.jpg)

Press **E** to Extrude a new face and scale it down with **S** and enter .8, followed by **ENTER.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_040-3.jpg)

Press **NUM3** to switch to side view and press **E** again to Extrude a new face. Then **G** to Grab it, **Y** to constrain it to the Y-axis and enter .1 to move, followed by **ENTER** to confirm.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_041-1.jpg)

Add a Cylinder with **SHIFT + A**.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_042-1.jpg)

Press **R** to Rotate and **X** to do so on the X-axis and enter 90 to rotate it 90 degrees. Press **ENTER** to confirm.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_043-1.jpg)

Press **S** to Scale and enter .25, then press **ENTER**.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_044-2.jpg)

Press **G** to Grab and, **Z** to constrain to the Z-axis and enter 2, then press **ENTER.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_045-1.jpg)

Press **G** to Grab, **Y** to constrain to the Y-axis, enter -.7, then press **ENTER**.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_047-1.jpg)

Press **NUM1** to switch to front view, then **G**, **X**, .325 and press **ENTER**.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_048-1.jpg)

Press **Z** to switch back to solid view and select the front face of the Cylinder.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_049-1.jpg)

Zoom in if you need, using the scroll wheel. Then Press **E** to Extrude and **ENTER**. Scale the new face down with **S** and enter .75, press **ENTER** to confirm.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_050-1.jpg)

Press **Z** to switch back to wireframe view and **NUM3** to switch to side view.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_051-1.jpg)

Press **E** to extrude a new face, then **G** to Grab it, **Y** to move it on the Y-axis, and enter .02, then press **ENTER.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_052-2.jpg)

Switch back to front view with **NUM1,** and back to solid view with **Z.** Create a loop cut vertically around the head with **CTRL + R**. Click **LMB** or press **ENTER** to confirm.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_054-1.jpg)

That’s the head. Now let’s connect it to the body. **Z** back to wireframe, then add a new Cylinder with **SHIFT + A**.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_057-1.jpg)

Scale the Cylinder down on the X & Y axes by pressing **S** and **SHIFT + Z** to exclude the Z-axis. Enter .15, then press **ENTER**.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_058-1.jpg)

Move the Cylinder up by grabbing it with **G**, pressing **Z** and enter 1\. Then press **ENTER**. Next create a series of loop cuts with **CTRL + R.** Be sure that you mouse is hovered over the neck and that the purple line is horizontal, then enter 32 and hit **ENTER** twice.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_059-1.jpg)

**Z** back to solid view. While holding **ALT + SHIFT**, select a vertical edge with the **RMB.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_060-1.jpg)

Under the Select menu in the 3D View panel, select Checker Deselect.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_061-1.jpg)

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_062-1.jpg)

While holding **ALT + SHIFT** select any horizontal edge with the **RMB.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_063-1.jpg)

Under the Select menu again, select Edge Ring.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_065-1.jpg)

**CTRL + TAB** and select Face.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_067-1.jpg)

Extrude all the faces with **E** and press **ENTER**. Press **S** to scale the selected faces and press **SHIFT + Z** to do so only on the X and Y axes, then enter 1.1 followed by **ENTER.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_068-1.jpg)

With the cursor hovering over the neck, press **L** to select the entire Cylinder.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_069-1.jpg)

And **SHIFT + H** to hide everything else.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_070-1.jpg)

Hold the scroll wheel down on your mouse, and move it about in the 3D View to change your perspective. Select the top and bottom faces of the neck (hold **SHIFT** to do so together).

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_071-2.jpg)

And press **X** to Delete and choose Faces.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_072-1.jpg)

Press **NUM1** to return to front view and **ALT + H** to unhide the hidden faces.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_073-2.jpg)

Now for the arms. Select a face on the neck, and press **L** to select the entire neck again.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_074-2.jpg)

Toggle to wireframe view with **Z** and duplicate the neck with **SHIFT + D**. Press **ENTER** or **LMB** to confirm.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_075-1.jpg)

Rotate the new Cylinder on the Y-axis with **R**, **Y** and type in 90, then press **ENTER.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_076-1.jpg)

Press **S** to Scale the new Cylinder and **SHIFT + X** to exclude the X-axis, then type in .75\. Press **ENTER** to confirm.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_077-1.jpg)

Grab the arm, **G,** and move it on the X-axis, **X,** 1.75\. Press **ENTER**.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_078-1.jpg)

Move the arm down with **G**, **Z**, and enter -.35\. Press **ENTER**. Press **SHIFT + S** to access the Cursor menu and choose **Cursor to selected.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_079-2.jpg)

Add another Cylinder with **SHIFT + A.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_080-1.jpg)

Rotate it 90 degress on the Y axis. **R**, **Y,** 90 and press **ENTER.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_081-1.jpg)

Then scale it down, **S**, .15, **ENTER.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_082-1.jpg)

Move it to the end of the arm with **G, X, 1, ENTER.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_083-2.jpg)

Press **A** to deselect the Cylinder.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_084-1.jpg)

Now we’re going to cut the mesh in half. Press **B** to access the Box tool. Click and hold the **LMB** to draw a box around the left half of the robot.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_085-2.jpg)

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_086-2.jpg)

Press **X** and Delete Faces.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_087-2.jpg)

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_088-1.jpg)

Our goal is to have a smooth edge down the middle of the mesh. You might need to clean up leftover faces. Use **B** for the Box tool to select them and **X** to delete.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_089-2.jpg)

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_091-1.png)

**Tab** to Object mode. In the Properties panel, select the **Modifier** tab.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_092-2.jpg)

Click the Add Modifier button and select Mirror from the menu. The click Apply.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_093-1.jpg)

**Tab** to edit mode.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_094-1.jpg)

Press **SHIFT + S** and select Cursor to Center.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_095-2.jpg)

Now let’s add a mouth. **Z** to wireframe mode. Then add a Cube, **SHIFT + A**.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_096-2.jpg)

Press **S** to scale the Cube, and enter .6, followed by **ENTER.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_097-2.jpg)

Press **S** to Scale again, this time on the Z-axis, by pressing **Z**, and enter .1, then press **ENTER.** Move the cube up with **G**, **Z**, 1.5 and press **ENTER.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_105-2.jpg)

Press **NUM3** to switch to side view, then press **S**, **Y**, .5 and **ENTER** to scale the Cube .5 on the Y-axis.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_106-2.jpg)

Press **G** to Grab, **Y** to constrain the movement, and enter -.25 followed by **ENTER.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_107-2.jpg)

Press **SHIFT + H** to hide everything else.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_108-3.jpg)

Press **Z** to switch to solid view and **NUM7** to switch to top view. Select the top face. Press **E** to extrude a new face, then **ENTER.** Scale the new face down with **S**, .9, and press **ENTER.**

And scale it again with **S**, **Y**, .9 and press **ENTER**.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_111-1.jpg)

Switch to side view with **NUM3\.** And back to wireframe with **Z.** Extrude a new face with **E** and press **ENTER.** Grab the new face and move it down on the Z-axis -.07: **G**, **Z**, -.07.

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_113-2.jpg)

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_114-2.jpg)

Press **ALT + H** to reveal the hidden faces and press **A** to deselect everything. Press **NUM1** to switch to front view. Now, using **L**, select the head, eyes and mouth, but not the neck. Press **NUM3** to switch back to sideview. Move the head forward slightly by grabbing with **G**, constraining to **Y**, and entering -.25\. Then press **ENTER.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_115-1.jpg)

**Tab** to Object mode and rename the mesh from Cylinder to Robot. Press **Z.**

![Beginner Blender Tutorial: How to Model and Animate a Robot](./dototot_blender_model_animate_robot_117-2.jpg)

Hello World! Be sure to save your work, with **CTRL + S**. In [Part 2: Blender Materials and Shape Keys](https://dototot.com/how-to-model-and-animate-a-robot-blender-materials-shape-keys/), we will add color and simple motion to our robot. See you there!
