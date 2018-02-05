//diamond-lines
//TO BE RUN ON p5js.zamfi.org
//TO BE RUN ON p5js.zamfi.org
//TO BE RUN ON p5js.zamfi.org

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  var lCount = 0;
  var startX1 = width / 2;
  var startX2 = width / 2;

  while (lCount < height / 2) {
    line(startX1 - lCount, lCount + 10, startX2 + lCount, lCount + 10);
    lCount += 10;
  }

  while (lCount <= height / 2 && lCount > 0) {
    line(startX1 - lCount + 20, height - lCount + 10, startX2 + lCount - 20, height - lCount + 10);
    lCount -= 10;
  }

}
