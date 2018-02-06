//easing
//TO BE RUN ON p5js.zamfi.net
//TO BE RUN ON p5js.zamfi.net
//TO BE RUN ON p5js.zamfi.net

var rate = 0.1;
var x = 0;
var y = 0;
var xtarget,
  ytarget;

function setup() {
  createCanvas(400, 400);
  xtarget = mouseX;
  ytarget = mouseY;
}

function draw() {
  background(225);
  noStroke();
  fill(180);

  x = xtarget * rate + x * (1 - rate); // rate is 0.1, or 10% -- (1-rate) is 0.9, or 90%
  y = ytarget * rate + y * (1 - rate);

  ellipse(x, y, 20, 20);

}

function mouseMoved() {
  xtarget = mouseX;
  ytarget = mouseY;
}
