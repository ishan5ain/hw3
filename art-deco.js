//art-deco
//TO BE RUN ON p5js.zamfi.org
//TO BE RUN ON p5js.zamfi.org
//TO BE RUN ON p5js.zamfi.org

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  noFill();
  artDeco(10, height/2 - 35);
}

function artDeco(x, y) {

  for (var j = 5; j > 0; j--) {

    for (var i = 4; i > 0; i--) {
      rect(x, y, 70, 70);
      rect(x + 10, y + 10, 50, 50);
      rect(x + 20, y + 20, 30, 30);
      rect(x + 30, y + 30, 10, 10);
    }
    x += 80;

  }

}
