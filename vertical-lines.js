//vertical lines
//TO BE RUN ON p5js.zamfi.org

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var lCount = 0;
  while (lCount < width - 10) {
    line(lCount + 10, 10, lCount + 10, height - 10);
    lCount += 10;
  }
}
