  //Ishan's patch for the Class Quilt
  function ishPatch(x, y) {
    fill(220); //filling boundary sqr
    //noStroke();
    rect(x, y, 100, 100); //printing boundary sqr
    noFill();
    stroke(0);

    var sqr = 0;
    //sqr = ishift;
    var cX = x + 25;
    var cY = y + 25;
    var rW = 50;
    var rH = 50;

    while (sqr < 100) { //loop for circles and dimishing sqrs

      rect(x + sqr, y + sqr, rW, rH); //printing first sqr

      if (sqr < 80) {
        ellipse(cX, cY, 5, 5); //printing first circle
        cX = cX + 10; //updating position for next circle
        cY = cY + 10;
      }

      sqr = sqr + 10; //updating counter for while loop
      rW = rW - 5; //reducing width for next rect
      rH = rH - 5; //reducing height for next rect
    }

    rect(x + 90, y + 5, 5, 2);
    rect(x + 90, y + 10, 5, 20);

    rect(x + 5, y + 90, 2, 5);
    rect(x + 10, y + 90, 20, 5);

  }
