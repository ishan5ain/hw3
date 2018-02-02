//drawing-new-colors
var lastKey = [];

function setup() {
  createCanvas(400, 400);
  background(220);
  lastKey[0] = 255;
  lastKey[1] = 255;
  lastKey[3] = 255;
}

var diameter = 10;

function draw() {
	noStroke();
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }

  ellipse(width-30, height-30, diameter);
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(255, 0, 0);
    lastKey[0] = 255;
    lastKey[1] = 0;
    lastKey[3] = 0;
  } else if (key == 'G') {
    fill(0, 255, 0);
    lastKey[0] = 0;
    lastKey[1] = 255;
    lastKey[3] = 0;
  } else if (key == 'B') {
    fill(0, 0, 255);
    lastKey[0] = 0;
    lastKey[1] = 0;
    lastKey[3] = 255;
  } else if (key == 'P') {
    fill(182, 37, 255); //PURPLE
    lastKey[0] = 182;
    lastKey[1] = 37;
    lastKey[3] = 255;
  } else if (key == 'M') {
    fill(255, 0, 255); //MAGENTA
    lastKey[0] = 255;
    lastKey[1] = 0;
    lastKey[3] = 255;
  } else if (key == 'W') {
    fill(255, 255, 255); //WHITE
    lastKey[0] = 255;
    lastKey[1] = 255;
    lastKey[3] = 255;
  } else if (key == '1') {
    fill(220);
		ellipse(width-31, height-31, 35);
    diameter = 10; //diameter preset 1
    fill(lastKey[0], lastKey[1], lastKey[3]);
  } else if (key == '2') {
    diameter = 20; //diameter preset 2
  } else if (key == '3') {
    diameter = 30; //diameter preset 3
  } else if (key == 'E') {
    fill(220); //ERASER
  }
}
