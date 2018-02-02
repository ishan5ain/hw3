//cone
//TO BE RUN ON p5js.zamfi.net

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var lCount = 0;
  while (lCount < width - 10) {
    line(width / 2, 10, lCount + 10, width - 10);
    lCount += 10;
  }

}
