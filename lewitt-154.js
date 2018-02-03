//walldrawing-154
//http://massmoca.org/event/walldrawing154/

var rate = 0.1;
var xe = 20;
var xetarget = 70;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();
  background("#E8E4DD");
  stroke("#FA2F0A");
  noFill();

  xe = xetarget * rate + xe * (1 - rate);
	rect(20, 20, width-40, height-40);

  if (xe <= width * 0.75) {
    line(20, (height / 2) + 1, xe, height / 2);
    line(20, (height / 2) - 1, xe, height / 2);
  } else {
    line(20, (height / 2) + 1, width * 0.75, height / 2);
    line(20, (height / 2) - 1, width * 0.75, height / 2);
  }

	stroke(150);
	rect(20, 20, width-40, height-40);
}

function mouseMoved() {
  var x = map(mouseX, 0, width, width * 0.25, width * 0.75);
  xetarget = x;
}
