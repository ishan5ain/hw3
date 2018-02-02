//taller-lines
//TO BE RUN ON p5js.zamfi.org
//TO BE RUN ON p5js.zamfi.org
//TO BE RUN ON p5js.zamfi.org

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var lCount = 0;
  while (lCount < width) {
    line(lCount, 0, lCount, lCount * 2);
    lCount += 5;
  }

}
