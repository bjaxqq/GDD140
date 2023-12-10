/**
*
* This easy-to-use drawing tool comes with everything you need: different
* sizes for the pen, random or set colors for said pen, the ability to
* clear the canvas, and especially once your drawing is complete, you can
* save it to your computer to show everyone!
*
* Created by Brooks Jackson
* 9.22.23
* 
**/

// Default pen size
let penSize = 5;
// Initializing pen color for either user/random inputs
let penColor = [0, 0, 0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  // Displaying instructions from displayInstructions() function
  displayInstructions();
}

function draw() {
  // If-statement for every time mouse press is detected
  if (mouseIsPressed) {
    // Get pen color from keyPressed() function
    stroke(penColor);
    // Get pen size from keyPressed() function
    strokeWeight(penSize);
    // Displaying a line to draw with
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

/**
* Function for the different possible user inputs (key presses)
**/

function keyPressed() {
  if (key === "c") {
    // Background resets
    background(255);
    // Preventing the text from getting the color of the line
    noStroke();
    // Re-printing the instructions from displayInstructions() function
    displayInstructions();
  } else if (key === "s") {
    // Exports the canvas as a png file
    saveCanvas("myDrawing", "png");
  } else if (key === "1") {
    // Pen size set to 5
    penSize = 5;
  } else if (key === "2") {
    // Pen size set to 10
    penSize = 10;
  } else if (key === "3") {
    // Pen size set to 20
    penSize = 20;
  } else if (key === "g") {
    // Asks user for red value
    var r = prompt("Enter the red value (0-255):");
    // Asks user for green value
    var g = prompt("Enter the green value (0-255):");
    // Asks user for blue value
    var b = prompt("Enter the blue value (0-255):");
    penColor = [r, g, b];
  } else if (key === "r") {
    // Sets a random pen color
    penColor = [random(255), random(255), random(255)];
  }
}

/**
 * Function for displaying the instructions
 **/

function displayInstructions() {
  textSize(16);
  fill(0);
  text("Press c to clear the canvas.", 10, 20);
  text("Press s to save the drawing as a png.", 10, 40);
  text("Press 1, 2, or 3 to change the pen size.", 10, 60);
  text("Press g to change the pen color (RGB values).", 10, 80);
  text("Press r to change the pen color (random).", 10, 100);
}
