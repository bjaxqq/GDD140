# Project 11

## Instructions

Use what we learned so far about using sprites and sprite animations. Do the following (some items are optional as indicated):

- Add a title screen with a prompt such as "Press spacebar to Start."
- Begin with a "Player" sprite that you can control using the AD or Arrow keys and the space bar or other keys.
- Add a sprite for the ground.
- Add obstacles or platforms that the player can jump on, or push or are immovable. (Optional which ones you use and how you implement it).
- The player may push the obstacles out of the way or use them as a step to get to the goal.
(- OPTIONAL). You can add your choice of additional sprites for the walls, pickups etc. For example, add coins as pickups where the player has to jump to reach the coins.
- (OPTIONAL). Consider adding enemies and varying the size, speed and frequency of each "enemy"
- The player must move to reach a goal. Have something happen when the player reaches the goal (a sound plays, a Win Screen etc)
- Load and add two or more named animation sequences of images to your player sprite. You can use the Mario sprite sheets.
- Switch animations according to which keys are pressed.
- (OPTIONAL). Consider using different keys to control the playback of your sprites.
- Consider using physics to create interesting game mechanics or obstacles
- Use Groups where it makes sense e.g. for obstacles, platforms, walls, enemies or coins.
- (OPTIONAL). Consider either allowing the player's movement to wrap around or add a camera to move with the player.
- Either build by hand the sprites needed for the ground and platforms or algorithmically figure out how to instantiate them 'just in time' as the camera scrolls with the player.
- Add sound effects
- (OPTIONAL). Add background music.
- Design a "win" state and a "lose" state.
- If the player reaches the goal remove allsprites and display text "You Win!" or "Success!" or whatever text makes sense for your game.
- If the player loses display text such as "You lose".
- Prompt the player to restart and use keyboard input to restart the game such as "Press spacebar to restart.".
- Try to make it somewhat challenging but not impossible.
- (OPTIONAL). Consider tracking health or lives.
- (OPTIONAL). Consider adding a timer (optional extra credit+1 point).
- (OPTIONAL). Keep and display a score for the pickup points or for the time or both.
- (OPTIONAL) Edit and prepare your own sprite sheets for a walk or run and idle sequence (extra credit + 1 point)
- In the beginning of your code, include a few comments about how to play your game -or- you can display instructions on how to play on the startup screen.

## Solution

For the final project, I took some of the sprites we used in class (Mario) and added my own (coins) to make a platform-jumping game for Mario. You start on the ground and platforms appear all around the canvas, and as Mario you have to jump on them to collect coins and win the game.

## Link

[https://editor.p5js.org/GDD140SEC3_bjackson/full/ywWYZH73r](https://editor.p5js.org/GDD140SEC3_bjackson/full/ywWYZH73r)
