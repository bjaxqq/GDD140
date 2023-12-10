function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(35, 79, 30);

  // Head
  fill(242, 225, 184);
  ellipse(200, 200, 200, 250);

  // Eyes
  fill(0);
  ellipse(160, 170, 30, 40);
  ellipse(240, 170, 30, 40);

  // Pupils
  fill(255);
  ellipse(160, 170, 10, 20);
  ellipse(240, 170, 10, 20);

  // Mouth
  noFill();
  stroke(0);
  arc(200, 250, 100, 50, 0, PI);

  // Hair
  fill(139, 69, 19); // brown hair
  rotate(100);
  rect(-10, 140, 150, 50); // bottom rectangle
  rect(70, 160, 150, 50); // bottom rectangle
  rect(150, 180, 150, 50); // bottom rectangle
}
