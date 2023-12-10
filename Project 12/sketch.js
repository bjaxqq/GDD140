let marioIdle;
let marioRun;
let mario;
let ground;
let platforms;
let coins;
let goalReached = false;

function preload() {
  marioIdle = loadAnimation("assets/MarioIdle.png", {
    frames: 10
  });
  marioRun = loadAnimation("assets/MarioRun.png", {
    frames: 8
  });
}

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER);
  
  mario = createSprite(50, height - 100, 20, 40);
  mario.addAnimation("idle", marioIdle);
  mario.addAnimation("run", marioRun);
  mario.rotationLock = true;

  ground = createSprite(width / 2, height - 10, width, 20);
  ground.immovable = true;

  platforms = new Group();
  coins = new Group();
  
  // Creating platforms
  for (let i = 0; i < 5; i++) {
    let platform = createSprite(random(width), random(height - 150), random(80, 150), 10);
    platform.immovable = true;
    platforms.add(platform);
  }

  // Creating coins
  for (let i = 0; i < 10; i++) {
    let coin = createSprite(random(width), random(100, height - 100));
    coin.addAnimation("spin", "assets/Coin1.png", "assets/Coin2.png", "assets/Coin3.png", "assets/Coin4.png", "assets/Coin5.png", "assets/Coin6.png");
    coins.add(coin);
  }
  
  // Goal sprite
  let goal = createSprite(width - 50, height - 100, 20, 40);
  goal.shapeColor = color(255, 0, 0);

  // Adding sprites to groups
  platforms.add(ground);
  platforms.add(goal);
}

function draw() {
  background(220);

  if (!goalReached) {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)) {
      mario.changeAnimation("run");
      if (keyIsDown(LEFT_ARROW)) {
        mario.mirrorX(-1);
        mario.velocity.x = -4;
      } else if (keyIsDown(RIGHT_ARROW)) {
        mario.mirrorX(1);
        mario.velocity.x = 4;
      }
    } else {
      mario.changeAnimation("idle");
      mario.velocity.x = 0;
    }

    if (keyIsDown(UP_ARROW) && mario.collide(ground)) {
      mario.velocity.y = -8;
    }

    mario.collide(platforms);

    // Check if the player has reached the goal
    if (mario.overlap(platforms)) {
      goalReached = true;
      textSize(32);
      fill(0);
      text("You Win!", width / 2, height / 2);
      text("Press R to Restart", width / 2, height / 2 + 40);
    }
  } else {
    if (keyWentDown('R')) {
      resetGame();
    }
  }
}

function resetGame() {
  mario.position.x = 50;
  mario.position.y = height - 100;
  goalReached = false;
}
