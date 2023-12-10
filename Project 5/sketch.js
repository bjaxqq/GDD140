function setup() {
  createCanvas(700, 700);
  noStroke();
}

function draw() {
  background(0);
  let numX = 5;
  let numY = 5;
  let spacingX = width / numX;
  let spacingY = height / numY;

  for (let i = 0; i < numX; i++) {
    for (let j = 0; j < numY; j++) {
      let x = i * spacingX + spacingX / 2;
      let y = j * spacingY + spacingY / 2;
      let size = map(sin(frameCount * 0.1 + i * 0.5 + j * 0.5), -1, 1, 10, 30);

      let r = map(sin(frameCount * 0.01 + i * 0.5), -1, 1, 100, 255);
      let g = map(sin(frameCount * 0.01 + j * 0.5), -1, 1, 100, 255);
      let b = 200;

      fill(r, g, b);
      ellipse(x, y, size, size);
    }
  }
}