/**
 * Project 10
 * By Brooks Jackson
 * Traverse each level by avoiding obstacles and picking up collectables!
 * Controls:
 * Space = Start
 * W or Up Arrow = UP
 * A or Left Arrow = LEFT
 * S or Down Arrow = DOWN
 * D or Right Arrow = RIGHT
 */

// Flags
let gameState = "start";
let levelCompleted = false;

// Leveling and Scoring
let levelCount = 1;
let levelScore = 0;
let totalScore = 0;
let lives = 3;

// Sprites
let player;
let obstacles = [];
let collectables = [];

// Timer
let time = 0;

/**
 * The setup function is called once at the beginning to set up the canvas.
 */
function setup() {
  createCanvas(500, 400);
  gameState = "start";
}

/**
 * The draw function is called continuously to update the game's visuals.
 */
function draw() {
  // Different screens based on what is happening in the game
  if (gameState == "start") {
    startScreen();
  } else if (gameState == "play") {
    if (levelCompleted) {
      // Reset for the next level
      levelScore = 0;
      levelCompleted = false;
      player = null;
      obstacles = [];
      collectables = [];
    }
    playScreen();
  } else if (gameState == "levelComplete") {
    levelCompleteScreen();
  } else if (gameState == "gameOver") {
    gameOverScreen();
  } else if (gameState === "nextLevel") {
    nextLevelScreen();
  }
}

/**
 * Function to display the start screen.
 */
function startScreen() {
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Press Start", width / 2, height / 2);

  // Check if the spacebar is pressed to start the game
  if (keyIsPressed && key === ' ') {
    gameState = "play";
    player = null;
    levelCompleted = true;
  }
}

/**
 * Function to display the gameplay screen.
 */
function playScreen() {
  background(0);

  // Display the player's score and remaining lives
  textSize(16);
  textAlign(RIGHT, BOTTOM);
  fill(255);
  text('Score: ' + levelScore, width - 10, height - 10);
  textSize(16);
  textAlign(LEFT, BOTTOM);
  fill(255);
  text('Lives: ' + lives, 10, height - 10);

  // Initialize the player character if it doesn't exist
  if (!player) {
    player = new Sprite(100, 200);
    player.width = 25;
    player.height = 25;
    player.color = 'white';
  }

  // Generate obstacles if none exist
  if (obstacles.length === 0) {
    for (let i = 0; i < levelCount; i++) {
      let newObstacle;
      do {
        newObstacle = new Sprite(random(width), random(height), 'static');
        newObstacle.width = 25;
        newObstacle.height = 25;
        newObstacle.color = 'red';
      } while (player.overlap(newObstacle) || obstacles.some(obstacle => newObstacle.overlap(obstacle)));
      obstacles.push(newObstacle);
    }
  }

  // Generate collectables if none exist
  if (collectables.length === 0) {
    for (let i = 0; i < levelCount; i++) {
      let newCollectable;
      do {
        newCollectable = new Sprite(random(width), random(height), 'static');
        newCollectable.width = 25;
        newCollectable.height = 25;
        newCollectable.color = 'yellow';
      } while (player.overlap(newCollectable) || collectables.some(collectable => newCollectable.overlap(collectable)));
      collectables.push(newCollectable);
    }
  }

  // Handle player movement based on key inputs
  if (kb.pressing('w') || kb.pressing('up')) {
    // Move up
    player.vel.y = -4;
  } else if (kb.pressing('s') || kb.pressing('down')) {
    // Move down
    player.vel.y = 4;
  } else {
    // Stop vertical movement
    player.vel.y = 0;
  }

  if (kb.pressing('a') || kb.pressing('left')) {
    // Move left
    player.vel.x = -4;
  } else if (kb.pressing('d') || kb.pressing('right')) {
    // Move right
    player.vel.x = 4;
  } else {
    // Stop horizontal movement
    player.vel.x = 0;
  }

  // Check for collisions between the player and obstacles
  for (let i = 0; i < obstacles.length; i++) {
    if (player.overlap(obstacles[i])) {
      player.remove();
      // Reset player position
      player = new Sprite(100, 200);
      player.width = 25;
      player.height = 25;
      player.color = 'white';
      // Decrease player lives
      lives--;
    }
  }

  // Check for collisions between the player and collectables
  for (let i = 0; i < collectables.length; i++) {
    if (player.overlap(collectables[i])) {
      // Increase scores and removing collectable
      collectables[i].remove();
      levelScore++;
      totalScore++;
      collectables.splice(i, 1);
      i--;
    }
  }

  // Check for game over condition
  if (lives == 0) {
    gameState = "gameOver";
  }

  // Check for level completion condition
  if (levelScore === levelCount && !levelCompleted) {
    levelCompleted = true;
    gameState = "levelComplete";
  }
}

/**
 * Function to display the level complete screen.
 */
function levelCompleteScreen() {
  // Initialize time
  if (time === 0) {
    time = millis();
  }

  // Reset player
  player.remove();

  // Remove all obstacles
  for (let obstacle of obstacles) {
    obstacle.remove();
  }
  obstacles = [];

  // Remove all collectables
  for (let collectable of collectables) {
    collectable.remove();
  }
  collectables = [];

  background(0);
  fill(0, 255, 0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Level Complete", width / 2, height / 2 - 20);
  // Display total score
  text("Score: " + totalScore, width / 2, height / 2 + 20);

  // Check if it's been one second since the next level screen
  if (millis() - time >= 1000) {
    // Increase the level
    levelCount++;
    // Start the next level
    gameState = "nextLevel";
    // Reset the time
    time = 0;
  }
}

/**
 * Function to display the game over screen.
 */
function gameOverScreen() {
  if (time === 0) {
    time = millis();
  }

  player.remove();

  for (let obstacle of obstacles) {
    obstacle.remove();
  }
  obstacles = [];

  for (let collectable of collectables) {
    collectable.remove();
  }
  collectables = [];

  background(0);
  fill(255, 0, 0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2 - 20);
  text("Score: " + totalScore, width / 2, height / 2 + 20);

  if (millis() - time >= 1000) {
    // Returning to the start screen and resetting the game
    gameState = "start";
    levelCount = 1;
    levelScore = 0;
    totalScore = 0;
    lives = 3;
    levelCompleted = false;
    player = null;
    time = 0;
  }
}

/**
 * Function to display the next level screen.
 */
function nextLevelScreen() {
  if (time === 0) {
    time = millis();
  }

  background(0);
  fill(0, 255, 0);
  textSize(32);
  textAlign(CENTER, CENTER);
  // Display level number
  text("Level " + levelCount, width / 2, height / 2 - 20);

  if (millis() - time >= 1000) {
    gameState = "play";
    time = 0;
  }
}
