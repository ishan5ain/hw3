//walldrawing-154
//http://massmoca.org/event/walldrawing154/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();
  background("#E8E4DD");
  stroke("#FA2F0A");
  noFill();

  var x = map(mouseX, 0, width, width * 0.25, width * 0.75);
  if (x <= width * 0.75) {
    line(0, (height / 2) + 1, x, height / 2);
    line(0, (height / 2) - 1, x, height / 2);
  } else {
    line(0, (height / 2) + 1, width * 0.75, height / 2);
    line(0, (height / 2) - 1, width * 0.75, height / 2);
  }

}
