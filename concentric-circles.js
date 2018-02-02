//concentric circles
//TO BE RUN ON p5js.zamfi.net

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill();

  var dCircle = 0;
  while (dCircle < width - 10) {
    ellipse(width / 2, height / 2, dCircle + 10, dCircle + 10);
    dCircle += 12;
  }

}
