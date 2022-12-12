// let xPos, yPos, pxPos, pyPos;
let numSymmetry = 8;
let chakraCenterHeight = 30;

// let chakra1 = 0;

function chakra() {
  let chakraRotateSpeed = frameCount / 2;

  // 1. Crown Chakra - Spirituality

  push();
  translate(canvasW / 2, (canvasH / 8) * 1);
  rotate(chakraRotateSpeed);
  star(0, 0, 15, 30, 6);
  noFill();
  circle(0, 0, chakraCenterHeight * 2);

  if (mouseY > (height / 8) * 1 - chakraCenterHeight &&
    mouseY < (height / 8) * 2 - chakraCenterHeight ) {
    push()
    pop()
    createArt1();
    
  }
  pop();

  // 2. Third Eye Chakra - Awareness

  push();
  translate(width / 2, (height / 8) * 2);

  push();
  rotate(chakraRotateSpeed);
  star(0, 0, 15, 30, 6);
  noFill();
  circle(0, 0, chakraCenterHeight * 2);
  pop();

  chakra2 = 0;
  if (
    mouseY > (height / 8) * 2 - chakraCenterHeight &&
    mouseY < (height / 8) * 3 - chakraCenterHeight
  ) {
    chakra2 = 1;
    createArt2();
  }

  pop();

  // 3. Throat Chakra - Communication

  push();
  translate(width / 2, (height / 8) * 3);

  push();
  rotate(chakraRotateSpeed);
  star(0, 0, 15, 30, 6);
  noFill();
  circle(0, 0, chakraCenterHeight * 2);
  pop();

  chakra3 = 0;
  if (
    mouseY > (height / 8) * 3 - chakraCenterHeight &&
    mouseY < (height / 8) * 4 - chakraCenterHeight
  ) {
    chakra3 = 1;
    createArt3();
  }

  pop();

  // 4. Heart Chakra - Love & Healing

  push();
  translate(width / 2, (height / 8) * 4);

  push();
  rotate(chakraRotateSpeed);
  star(0, 0, 15, 30, 6);
  noFill();
  circle(0, 0, chakraCenterHeight * 2);
  pop();
  chakra4 = 0;
  if (
    mouseY > (height / 8) * 4 - chakraCenterHeight &&
    mouseY < (height / 8) * 5 - chakraCenterHeight
  ) {
    chakra4 = 1;
    createArt4();
  }
  pop();

  // 5. Solar Plexus Chakra - Wisdom & Power

  push();
  translate(width / 2, (height / 8) * 5);

  push();
  rotate(chakraRotateSpeed);
  star(0, 0, 15, 30, 6);
  noFill();
  circle(0, 0, chakraCenterHeight * 2);
  pop();
  chakra5 = 0;
  if (
    mouseY > (height / 8) * 5 - chakraCenterHeight &&
    mouseY < (height / 8) * 6 - chakraCenterHeight
  ) {
    chakra5 = 1;
    createArt5();
  }
  pop();

  // 6. Sacral Chakra - Creativity

  push();
  translate(width / 2, (height / 8) * 6);

  push();
  rotate(chakraRotateSpeed);
  star(0, 0, 15, 30, 6);
  noFill();
  circle(0, 0, chakraCenterHeight * 2);
  pop();

  chakra6 = 0;
  if (
    mouseY > (height / 8) * 6 - chakraCenterHeight &&
    mouseY < (height / 8) * 7 - chakraCenterHeight
  ) {
    chakra6 = 1;
    createArt6();
  }

  pop();

  // 7. Root Chakra - Basic Trust
  push();
  translate(width / 2, (height / 8) * 7);

  push();
  rotate(chakraRotateSpeed);
  star(0, 0, 15, chakraCenterHeight, 6);
  noFill();
  circle(0, 0, chakraCenterHeight * 2);
  pop();

  chakra7 = 0;
  if (mouseY > (height / 8) * 7 - chakraCenterHeight && mouseClicked()) {
    chakra7 = 1;
    createArt7();
  }

  pop();
}

function mouseClicked() {
  return true;
}

function createArt1() {
  for (let i = 0; i < numSymmetry; i++) {
    push();
      rotate((360 * i) / numSymmetry);
      var transpoint = i * (0.3 * frameCount);
      translate(transpoint, 0);
      stroke("white");
      fill("rgb(79,15,79)");
    
      polygon(0, 0, 30, 7)
      // triangle(0, 0, 75, 40, 40, 50);
      // push();
      //   scale(1, -1);
      //   triangle(0, 0, 75, 40, 40, 50);
      // pop();
      // push();
      //   scale(-1, 1);
      //   triangle(0, 0, 75, 40, 40, 50);
      // pop();
      // push();
      //   scale(-1, -1);
      //   triangle(0, 0, 75, 40, 40, 50);
      // pop();
    pop();
  }
}

function createArt2() {
  var ang1 = 360 * noise(0.01 * frameCount + 10);
  var ang2 = 360 * noise(0.01 * frameCount + 20);
  var ang3 = 360 * noise(0.01 * frameCount + 30);
  var rx = 40 * noise(0.01 * frameCount + 40);
  var transpoint = 100 * noise(0.01 * frameCount + 50);
  var size1 = 100 * noise(0.01 * frameCount + 60);
  var size2 = 25 * noise(0.01 * frameCount + 60);

  for (var i = 0; i < numSymmetry; i++) {
    push();
    // strokeWeight(2)
    // noFill();
    rotate(ang1 + (360 * i) / numSymmetry);
    translate(transpoint, 0);
    ellipse(0, 0, size1 / 5, size1 / 5);
    for (var j = 0; j < numSymmetry; j++) {
      push();
      rotate(ang2 + (360 * j) / numSymmetry);
      translate(rx, 0);
      rotate(ang3);
      stroke("navy");
      fill("rgb(47,47,179)");
      ellipse(rx, 0, size2, size2);
      pop();
    }
    // translate()
    pop();
  }
}

function createArt3() {
  for (let i = 0; i < numSymmetry; i++) {
    push();
    rotate((360 * i) / numSymmetry);
    var transpoint = 50*noise(0.3 * frameCount);
    translate(transpoint, 0);
    stroke("rgb(67,171,171)");
    fill("cyan");
    push();
    for (let m = 0; m < 4; m++) {
      rotate(m * 30);
      triangle(0, 0, 10, 40, 40, 10);
    }
    pop();
    push();
    scale(1, -1);
    // ellipse(0, 0, 20, 80);
    pop();

    pop();
  }
}

function createArt4() {
  for (var i = 0; i < 60; i++) {
    push();

    stroke("white");
    strokeWeight(0.05);
    fill("lightgreen");
    strokeWeight(0.5);
    // print(PI)
    rotate(i * 10);
    scale(i / (chakraCenterHeight / 3));
    triangle(0, 0, -4, chakraCenterHeight / 2, 4, chakraCenterHeight / 2);
    pop();
  }
}

function createArt5() {
  for (let i = 0; i < numSymmetry; i++) {
    push();
    rotate((360 * i) / numSymmetry);
    var transpoint = 100 * noise(0.03 * frameCount);
    translate(transpoint, 0);
    stroke("white");
    fill("yellow");
    push();
    for (let m = 0; m < 8; m++) {
      rotate(m * 30);
      // ellipse(0, 0, 10, 40);
      
      polygon(0 , 0, 12, 6)
    }
    pop();
    push();
    scale(1, -1);
    // ellipse(0, 0, 20, 80);
    pop();

    pop();
  }
}


function createArt6() {
  for (var i = 0; i < numSymmetry; i++) {
    push();
    rotate((360 * i) / numSymmetry);
    var transpoint = 100 * noise(0.02 * frameCount);
    translate(transpoint, 0);
    stroke("white");
    fill("darkorange");
    ellipse(0, 0, 20, 20);
    for (var j = 0; j < numSymmetry; j++) {
      push();
      rotate((360 * j) / numSymmetry);
      var rx = 40 * noise(0.01 * frameCount + 10);
      // ellipse(rx, 0, 8, 8);
      polygon(rx, 0, 8, 6);
      pop();
    }
    // translate()
    pop();
  }
}

function createArt7() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let xPos = mouseX - width / 2;
    let yPos = mouseY - height / 2;
    let pxPos = pmouseX - width / 2;
    let pyPos = pmouseY - height / 2;

    for (var i = 0; i < numSymmetry; i++) {
      push();
      rotate((360 * i) / numSymmetry);
      var transpoint = 100 * noise(0.02 * frameCount);
      translate(transpoint, 0);
      stroke("white");
      fill("red");
      ellipse(0, 0, 20, 20);
      for (var j = 0; j < numSymmetry; j++) {
        push();
        rotate((360 * j) / numSymmetry);
        var rx = 40 * noise(0.01 * frameCount + 10);
        ellipse(rx, 0, 8, 8);
        pop();
      }
      // translate()
      pop();
    }

    if (mouseIsPressed) {
      circle(xPos, yPos, 100);
      for (let i = 0; i < numSymmetry; i++) {
        rotate(360 / numSymmetry);
        noFill();
        // let sw = sizeSlider.value();
        // strokeWeight(sw);
        circle(xPos, yPos, max(min(pxPos, width / 5), 10));
        line(xPos, yPos, pxPos + 125, pyPos);
        // arc(xPos+50, yPos, pxPos, pxPos, 0, 180, OPEN)
        // print(xPos, yPos, pxPos+50, pyPos);
        // line
        push();
        scale(1, -1);
        circle(xPos, yPos, max(min(pxPos, width / 5), 10));
        // line(xPos, yPos, pxPos+125, pyPos);
        // arc(xPos, yPos, pxPos, pxPos, 0, 180, OPEN)
        pop();
      }
      // ellipse(mouseX, mouseY, 50, 50);
    }
  }
}


function polygon(x, y, radius, npoints) {
  let angle = 360 / npoints;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// Star 
function star(x, y, radius1, radius2, npoints) {
  let starAngle = 360 / npoints;
  let halfstarAngle = starAngle / 2.0;
  beginShape();
  for (let a = 0; a < 360; a += starAngle) {
    strokeWeight(2);
    stroke("white");
    noFill();
    // fill(int(random(0,55)), int(random(200,255)), int(random(50,205)))
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfstarAngle) * radius1;
    sy = y + sin(a + halfstarAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
