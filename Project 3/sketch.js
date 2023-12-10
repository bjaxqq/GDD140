let skinColors, eyeColors, mouthColor, hairColor;

function setup() {
  createCanvas(400, 400);
  skinColors = [
    // Light skin color
    color(255, 220, 177),
    // Medium skin color
    color(255, 194, 152),
    // Dark skin color
    color(204, 143, 89),
  ];
  eyeColors = [
    // Green eye color
    color(0, 128, 0),
    // Brown eye color
    color(139, 69, 19),
    // Hazel eye color
    color(218, 165, 32),
    // Blue eye color
    color(0, 0, 255),
  ];
  randomizeFeatures();
  drawFace();
}

function randomizeFeatures() {
  // 1 of 3 skin colors to choose from
  skinColor = random(skinColors);
  // 1 of 4 eye colors to choose from
  eyeColor = random(eyeColors);
  // Random hair color
  hairColor = color(random(255), random(255), random(255));
  // Random shirt color
  shirtColor = color(random(255), random(255), random(255));
}

function drawFace() {
  // Sets background color
  background(random(255), random(255), random(255));

  // Creates shirt
  fill(shirtColor);
  strokeWeight(2);
  ellipse(width / 2, height / 2 + 235, 200, 250);

  // Creates face
  fill(skinColor);
  strokeWeight(2);
  ellipse(width / 2, height / 2, 200, 250);

  // Creates eyes
  fill(255, 255, 255);
  strokeWeight(2);
  ellipse(width / 2 - 50, height / 2 - 30, 40, 40);
  ellipse(width / 2 + 50, height / 2 - 30, 40, 40);

  // Creates pupils
  fill(eyeColor);
  strokeWeight(4);
  ellipse(width / 2 - 50, height / 2 - 30, 20, 30);
  ellipse(width / 2 + 50, height / 2 - 30, 20, 30);

  // Creates nose
  strokeWeight(2);
  drawNose(width / 2, height / 2 + 20);

  // Creates nose
  strokeWeight(2);
  arc(width / 2, height / 2 + 70, 100, 50, 0, PI);

  // Creates hair
  strokeWeight(0.25);
  drawHair(width / 2, height / 2 - 175, 100, 80);
  drawHair(width / 2 - 50, height / 2 - 150, 50, 70);
  drawHair(width / 2 + 50, height / 2 - 150, 50, 70);

  // Creates eyebrows
  fill(hairColor);
  strokeWeight(0.25);
  rect(width / 2 + 25, height / 2 - 55, 50, 10);
  rect(width / 2 - 75, height / 2 - 55, 50, 10);
}

function mouseClicked() {
  // Calls random colors when clicked
  randomizeFeatures();
  // Draws face when clicked
  drawFace();
}

function drawHair(x, y, w, h) {
  // Filling with random color
  fill(hairColor);
  // Loop to create wavy texture in hair
  for (let i = 0; i < w; i += 5) {
    let hairStrandY = y + random(-10, 10);
    rect(x - w / 2 + i, hairStrandY, 5, h);
  }
}

function drawNose(x, y) {
  // Filling with same color as skin
  fill(skinColor);
  // Creating simple nose shape
  triangle(x, y - 10, x - 10, y + 10, x + 10, y + 10);
}
