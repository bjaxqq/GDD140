let cacti = [];
let clouds = [];
let sun;

class Cactus {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = random(50, 150);
    this.width = random(20, 40);
  }

  display() {
    fill(0, 100, 0);
    beginShape();
    vertex(this.x, this.y - this.height);
    vertex(this.x + this.width / 3, this.y - this.height * 1.2);
    vertex(this.x + this.width / 1.5, this.y - this.height * 0.8);
    vertex(this.x + this.width / 2, this.y);
    vertex(this.x - this.width / 2, this.y);
    vertex(this.x - this.width / 1.5, this.y - this.height * 0.8);
    vertex(this.x - this.width / 3, this.y - this.height * 1.2);
    endShape(CLOSE);
  }

  move(speed) {
    this.x -= speed;
    if (this.x < -this.width) {
      this.x = width + random(50, 200);
      this.height = random(50, 150);
    }
  }
}

class Cloud {
  constructor() {
    this.x = random(width);
    this.y = random(height * 0.4);
    this.size = random(50, 150);
    this.speed = random(0.1, 0.5);
  }

  display() {
    noStroke();
    fill(255, 230);
    ellipse(this.x, this.y, this.size, this.size * 0.6);
    ellipse(this.x - this.size / 2, this.y, this.size * 0.8, this.size * 0.5);
    ellipse(this.x + this.size / 2, this.y, this.size * 0.7, this.size * 0.4);
  }

  move() {
    this.x += this.speed;
    if (this.x > width + this.size) {
      this.x = -this.size;
      this.y = random(height * 0.4);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sun = {
    x: width * 0.8,
    y: height * 0.2,
    size: 100
  };

  for (let i = 0; i < 10; i++) {
    cacti.push(new Cactus(random(width), height - 20));
  }
  for (let i = 0; i < 5; i++) {
    clouds.push(new Cloud());
  }
}

function draw() {
  background(200, 230, 255);

  fill(255, 255, 0);
  ellipse(sun.x, sun.y, sun.size);

  for (let cloud of clouds) {
    cloud.display();
    cloud.move();
  }

  for (let cactus of cacti) {
    cactus.display();
    cactus.move(2);
  }

  fill(230, 190, 130);
  rect(0, height - 20, width, 20);
}
