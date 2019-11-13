---
title: A Brief Primer on Video Formats
date: "2016-09-07"
author: "Jared Nielsen"
image: "dototot_blender_model_animate_robot_146-1.jpg"
category: "tutorial"
---

Your robot is looking good, but that default gray is a bit drab. In this chapter you will learn how to apply Blender materials and shape keys to brighten up your robot. If you’re just joining us, you will want to start with Part 1, [Beginner Blender Tutorial: Modeling and Animating a Robot](https://dototot.com/beginner-blender-tutorial-how-to-model-and-animate-a-robot/).

## Blender Materials

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_118-1.jpg)

Blender has two built-in renderers, the original internal renderer and Cycles. Rendering is the process by which Blender converts the 3D scene to a 2D image or video. At the top of the 3D viewport, toggle from Blender Render to Cycles Render.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_120-1-3.jpg)

Now let’s add a Material. In Blender, materials create the illusion that an object is made of a specific substance, like wood or concrete, or is simply a way to apply a color. Select the Materials tab from the Properties panel, then click the New button.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_121-1.jpg)

Click in the Color field to open a color picker menu.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_122-1.jpg)

Change the color to a pretty blue. Or pink. Or violet. Or orange. It’s up to you! Then, open the Settings dropdown and drag the blue Color field into the Viewport Color field. Your robot will now appear blue in the 3D viewport.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_124-1.jpg)

**TAB** to edit, the press **L** to select the eyes, neck, arms and hands

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_125-1.jpg)

In the Materials panel, click the **+** sign to add a new material to your robot. The click the New button.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_126-1.jpg)

Select a dark grey from the color picker in the Color field. Click Assign to assign the new material to the selected faces. Lastly, drag the new color from the Color field to the Viewport Color field under Settings.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_127-1.jpg)

Zoom in if you need, and select the eye circles. In the Materials panel, click the **+** again, and click New. Keep the default white and click Assign. Again, drag the Color to Viewport Color.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_129-1.jpg)

Hold **ALT + SHIFT** and click **RMB** to select the neck collar and base. Click **+** in the Materials panel and then click New. Select a light grey and Assign. Drag the new Color to Viewport Color.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_130-1.jpg)

**TAB** to object mode. Looking good!

## Shape Keys

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_131-1.jpg)

We’re now going to add shape keys to animate the movements of the mouth and neck. Shape keys are use the vertices of an object to deform its shape. Select the Object Data tab from the Properties panel.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_132-1.jpg)

Under Shape Keys, press **+**. This creates a new Shape Key called Basis. We’re going to leave that alone and create another shape key by pressing **+** again.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_133-1.jpg)

This creates a new shape key, titled Key 1.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_134-1.jpg)

Rename Key 1 to Mouth.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_135-1.jpg)

**TAB** to Edit mode and press **Z**. **CTRL + TAB** and select Edge. Holding the scroll wheel, move your mouse around until you have a ¾ perspective of the mesh. Then use **RMB** to select the top, rear edge of mouth.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_137-1.jpg)

Press **NUM3** to switch to side view. Then press **SHIFT + S** and select ‘Cursor to selected’, to move the cursor to the highlighted edge.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_138-1.jpg)

At the bottom of the 3D View panel is a Pivot Point menu. Select 3D Cursor.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_139-1.jpg)

Press **L** to select the entire mouth.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_140-1.jpg)

Then rotate the mouth on the 3D cursor by pressing **R** for Rotate and **X** to constrain it to the X-axis and enter 20, then press **ENTER** to confirm.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_141-1.jpg)

**TAB** to Object mode and press **Z** to switch to solid mode. Try out the new shape key by sliding the Value bar under Shape Keys.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_143-1.jpg)

Select Basis, then click **+** to add a new shape key. Rename it to ‘Head’.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_144-1.jpg)

**TAB** to Edit mode and press **L** to select the head, neck, mouth and eyes.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_145-1.jpg)

Press **G** to grab the selection and **Z** to constrain it to the Z-axis, then enter .2, and press **ENTER** to confirm.

![How to Model and Animate a Robotl: Materials and Shape Keys](https://dototot.com/app/uploads/2016/09/dototot_blender_model_animate_robot_146-1.jpg)

**TAB** back to Object mode and slide the Value up and down to see the head move up and down. Cool, right? In the next chapter we will rig an armature to move the arms.
