//walldrawing-1261
//http://massmoca.org/event/walldrawing1261/

var shift = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noFill();
  strokeWeight(12); //preset2: strokeWeight(1);

  var dCircle = 0;
  dCircle = shift;
  while (dCircle < width * 1.5) {
    ellipse(width / 2, height / 2, dCircle + 10, dCircle + 10);
    dCircle += 40; //preset2: dCircle +=12;
  }

  if (shift < 40) { //preset2: (shift < 10)
    shift += 1;
  } else {
    shift = 0;
  }

}
