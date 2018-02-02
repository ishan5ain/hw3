//circle-grid
//TO BE RUN ON p5js.zamfi.org
//TO BE RUN ON p5js.zamfi.org
//TO BE RUN ON p5js.zamfi.org

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);
  noStroke();

  var xCount = 0;
  var yCount = 0;
  var xCircle = 0;
  var yCircle = 0;

  while (yCount < height / 20) {
    while (xCount < width / 20) {
      ellipse(xCircle + 20, yCircle + 20, 20, 20);
      xCount += 1;
      xCircle += 30;
    }
    xCount = 0;
    yCount += 1;
    yCircle += 30;
    xCircle = 0;
  }

}
