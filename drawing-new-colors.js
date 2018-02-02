//drawing-new-colors

function setup() {
  createCanvas(400, 400);
  background(255, 255, 255);
}

var diameter = 10;

function draw() {
  if (mouseIsPressed) {
    noStroke();
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(255, 0, 0);
  } else if (key == 'G') {
    fill(0, 255, 0);
  } else if (key == 'B') {
    fill(0, 0, 255);
  } else if (key == 'P') {
    fill(182, 37, 255); //PURPLE
  } else if (key == 'M') {
    fill(255, 0, 255); //MAGENTA
  } else if (key == 'W') {
    fill(255, 255, 255); //WHITE
  }
}
