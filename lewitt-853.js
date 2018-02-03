//walldrawing853
//http://massmoca.org/event/walldrawing853/

function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();
  background("#346193");
  fill("#FA2F0A");
  rect(0, height * 0.6, width, height * 0.4);
  bezier(0, height * 0.6, mouseX, mouseY, mouseX, mouseY, width, height * 0.6);
}
