/**
*
* Inspired by Apple's Activity Rings on the Apple Watch,
* this clock has rotating arcs that match up with the
* hours, minutes, and seconds. The time is also displayed
* in the middle to make it easy to tell the time.
*
**/

function setup() {
  createCanvas(400, 400);
  // Setting angle mode to degrees
  angleMode(DEGREES);
  // Centering text
  textAlign(CENTER, CENTER);
}

// Draw function
function draw() {
  // Setting background color
  background(46, 52, 64);

  // Setting time values
  let h = hour();
  let m = minute();
  let s = second();

  // Making hours degrees
  let hAngle = map(h % 12, 0, 12, 0, 360);
  // Setting hours color
  drawArc(width / 2, height / 2, 150, hAngle, color(94, 129, 172));

  // Making minutes degrees
  let mAngle = map(m, 0, 60, 0, 360);
  // Setting minutes color
  drawArc(width / 2, height / 2, 120, mAngle, color(136, 192, 208));

  // Making seconds degrees
  let sAngle = map(s, 0, 60, 0, 360);
  // Setting seconds color
  drawArc(width / 2, height / 2, 90, sAngle, color(143, 188, 187));
  
  // Save the current stroke weight
  let originalStrokeWeight = strokeWeight();
  
  // Displaying time in middle
  let timeText = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2);
  textSize(30);
  fill(216, 222, 233);
  
  // Setting smaller text stroke
  strokeWeight(2);
  text(timeText, width / 2, height / 2);
  
  // Reset stroke weight
  strokeWeight(8);
}


// Rotating arcs function
function drawArc(x, y, radius, angle, col) {
  // Starts at the top of the screen
  let startAngle = -90;
  // Ends at the end of the rotation
  let endAngle = startAngle + angle;

  // Setting stroke color
  stroke(col);
  // Setting stroke weight
  strokeWeight(8);
  noFill();

  // Drawing arc
  arc(x, y, radius * 2, radius * 2, startAngle, endAngle);
}
