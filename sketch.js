

let img; // creates image variable
let myFont;
let bgMusic;
let imgSize; // element size

let coordx = 0 // starting x coordinate
let coordy = 0 // starting y coordinate
let angle = 0;

// let sumChakra = 0;

let canvasW, canvasH;



function preload() {  
  img = loadImage('monk3.jpg'); // preloads picture!
  bgMusic = loadSound('MusicMeditate.mp3');
  // myFont = loadFont('BeautifulPeople.ttf');
}

// function handleFile(file){
//   print("Image")
//   // print(file);
//   if (file.type === 'image') {
//     inputImg = loadImage(file.data, '');
//     img = inputImg;
//     // img.hide();
//   } else {
//     img = loadImage('monk1.jpg');
//   }
  
// }

function setup() {
  createCanvas((min(windowWidth,windowHeight))-40, (min(windowWidth,windowHeight))-40, WEBGL); // creates canvas
  angleMode(DEGREES);
  
  canvasW = (min(windowWidth,windowHeight))-40;
  canvasH = (min(windowWidth,windowHeight))-40;
  bgMusic.play();
  // inp = createFileInput(handleFile);
  // inp.position(min(windowWidth,windowHeight)-80, 20);
  
  img.loadPixels(); // loads image
  img.resize(canvasW, canvasH); // resizes image to window size
  img.updatePixels(); // updates imag
  // translate(-(min(windowWidth,windowHeight))/2, -(min(windowWidth,windowHeight))/2)
  print("Image height and width: ",img.height, img.width);
  
  //Creates buttons to rotate each pixel of the image along different axes
  buttonXRotate = createButton('Rotate along X axis');
  buttonXRotate.position(canvasW, 60);
  buttonXRotate.mousePressed(buttonX);

  buttonYRotate = createButton('Rotate along Y axis');
  buttonYRotate.position(canvasW, 110);
  buttonYRotate.mousePressed(buttonY);

  buttonZRotate = createButton('Rotate along Z axis');
  buttonZRotate.position(canvasW, 160);
  buttonZRotate.mousePressed(buttonZ);
  //end of create buttons for rotation
  
  //Create button for restarting    
  // restartButton = createButton("Restart");
  // restartButton.position(canvasW+30, canvasH - 100);
  // restartButton.style("background-color", "yellow");
  // restartButton.mousePressed(restartCanvas);
  //end of button for restarting
  
  //Create button for saving file    
  saveButton = createButton("Save Pic");
  saveButton.position(canvasW+30, canvasH - 50);
  saveButton.style("background-color", "cyan");
  saveButton.mousePressed(savePic);
  //end of button for saving file
  
}

function draw() {
  clear();
  background(0);

  //Calling code to rotate pixels
  rotateEachPixel();
  //end of rotate pixel
  
  // Call code for generating chakras
  chakra();
  
  // let chakra1Text = createGraphics(400, mouseY)
  // chakra1Text.background(255);
  // chakra1Text.textSize(64)
  // chakra1Text.textAlign(CENTER)
  // chakra1Text.text("Crown Chakra", 400, mouseY)
  
  
  // // print(sumChakra)
  // if(timer){
  //   moksha();
  // }
  
  //Test Code for rotation by shifting origin
  // for(let i = 0; i<5; i++){
  //     for(let j = 0; j<3; j++){
  //       push();
  //         translate(i*100,j*100);
  //         rotateZ(angle);
  //         fill(j*100)
  //         // strokeWeight(i*1+1);
  //         rectMode(CENTER);
  //         rect(0,0+50,80,100); 
  //         angle += 0.05;
  //         translate(-i*100,-j*100);
  //       pop();
  //     }
  //   }
  //end of test code  
}