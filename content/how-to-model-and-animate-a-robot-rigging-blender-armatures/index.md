---
title: "How to Model and Animate a Robot: Rigging Blender Armatures"
date: "2016-09-08"
author: "Jared Nielsen"
image: "dototot_blender_model_animate_robot_196-1-1.jpg"
category: "tutorial"
---

Let’s bring our robot to life! We will do so with bones. Yes, bones. And bones are what make up armatures. In Blender, rigging is the process of connecting an armature to a mesh to make it move. In this tutorial, you will be rigging Blender armatures to animate your robot.

If you’re just joining us, you will want to start with [Part 1, Beginner Blender Tutorial: How to Model & Animate a Robot.](https://dototot.com/beginner-blender-tutorial-how-to-model-and-animate-a-robot/)

## Rigging Blender Armatures

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_147-1.jpg)

Before we create our first bone, make sure the 3D cursor is at the center of the 3D View. **SHIFT + S** and select Cursor to Center.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_149-1.jpg)

Now **Z** to wireframe and add a bone with **SHIFT + A** and select Armature, Single Bone.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_151-1.jpg)

**TAB**. Select the bone tab in Properties panel.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_152-1.jpg)

Rename ‘Bone’ to ‘Spine’.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_153-1.jpg)

**TAB** to Edit Mode. Use **RMB** to select the bottom of ‘Spine’.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_154-1.jpg)

Press **G** to Grab and **Z** to move it only on the Z-axis, then enter -1, and press **ENTER.**

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_155-2.jpg)

Now select the top, or head, of ‘Spine’.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_156-1.jpg)

Grab with **G**, constrain to **Z**, and move it down -.35\. Press **ENTER**.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_157-1.jpg)

With the top of ‘Spine’ still selected, press **E** to extrude a new bone, and **Z** to constrain it to the Z-axis, then enter 1.35 and press **ENTER.**

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_158-1.jpg)

Rename the new bone to ‘Neck’.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_159-1.jpg)

Select the top of ‘Spine’ again.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_160-1.jpg)

Press **E** to Extrude a new bone and **X** to constrain it to the X-axis. Enter .9 and press **ENTER**. Rename this bone ‘Shoulder.L’.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_161-1.jpg)

Select the head of ‘Shoulder.L’ and Extrude it 2 Blender units on the X-axis. **E**, **X**, 2, **ENTER.**

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_162-1.jpg)

Rename this bone to ‘Arm’.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_163-1.jpg)

Select ‘Arm’ bone and in the Tools panel click Subdivide three times.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_165-1.jpg)

This will divide ‘Arm’ into eight bones. Don’t worry about renaming them.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_166-1.jpg)

Select the last bone, and rename it ‘Hand.L’.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_167-1.jpg)

Zoom in with the scroll wheel if you need and select the head of ‘Hand.L’.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_169-1.jpg)

Extrude a new bone, **E**, **X**, .5, **ENTER**. Rename the new bone ‘HandIK.L’.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_170-1.jpg)

Select HandIK.L and in the Properties panel, under the Bone tab, under Relations, click the ‘x’ next to its name in the Parent field.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_173-1.jpg)

Grab HandIK.L with **G** and move it on the X-axis .25: **X**, .25, **ENTER**.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_175-1.jpg)

**TAB** to Object Mode and from the Object Interaction Toggle, select Pose Mode.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_177-1.jpg)

Select Hand.L, and in the Properties panel, select the Bone Constraints tab.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_178-1.jpg)

Click the big ‘Add Bone Constraint’ button and select ‘Add Tracking: Inverse Kinematics’.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_181-1.jpg)

In the IK panel, in the Target field, select ‘Armature’ and in the Bone field select ‘HandIK.L’. Set the Chain Length to 8 (because we made eight bones when we subdivide ‘Arm’ and we need the chain to connect back to the body).

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_183-1.jpg)

Select HandIK.L and grab it with **G** to move it around and see that it works properly. Press **ALT + G** to reset the pose.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_185-1.jpg)

In the Properties panel, select the Armature Object Data tab. Under Display, select B-Bone.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_187-1.jpg)

Press **A** until the entire Armature is selected, then press **CTRL + ALT +S** to scale the bones and enter .5, then press **ENTER**.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_189-1.jpg)

Select ‘HandIK.L’ and scale it up with **CTRL + ALT + S** and enter 4\. Then press **ENTER**.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_190-1.jpg)

**TAB** into Edit Mode. Press **SHIFT + S** and select Cursor to Center. Be sure the Pivot Point toggle is set to 3D cursor. Holding **SHIFT**, select Shoulder, Arms, Hand and IK bones. Don’t select Spine or Neck.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_191-1.jpg)

Press **SHIFT + D** to Duplicate, then press **ENTER**. Now we’re going to invite our duplicated arm by scaling it 100% backwards on the X-axis. Press **S**, **X**, enter -1 and press **ENTER**.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_192-1.jpg)

Under Armature, select Flip Names

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_193-1.jpg)

In Object Mode, select the Robot mesh.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_194-1.jpg)

Holding **SHIFT**, select any bone.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_195-1.jpg)

Press **CTRL + P** and select Armature Deform, With Automatic Weights.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_196-2.jpg)

Grab the HandIKs and move them around to see that everything works properly. Then press **ALT + G** to return them to their original position.

![How to Model and Animate a Robot: Rigging Blender Armatures](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_197-1.jpg)

In the next chapter, we will [pose and key frame a Blender animation our robot to audio an track](https://dototot.com/how-to-model-and-animate-a-robot-key-frame-a-blender-animation/). Sound good?
