function rotateEachPixel(){
  translate(-(canvasW)/2, -(canvasH)/2);
  // let imgSize = floor(map(mouseX, 0, width, 10, 10)); // maps mouseX value to element size
  let imgSize = 10;
  
  let pixelSize = min(img.height,img.width);

  for (var coordy = 0; coordy < pixelSize; coordy += imgSize) { // creates pixel index    
    for (var coordx = 0; coordx < pixelSize; coordx += imgSize) {
      var index = (coordx + coordy * img.width) * 4;
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];
      
      // print(coordx, coordy, index)
      //This only displays the pixels
        // fill(r,g,b);
        // rect(coordx, coordy, imgSize, imgSize);
      //end of displays the pixels 

      //This is intended to rotate each pixel
      noStroke() ;
      push()
        translate(coordx, coordy);
        if(buttonXRotateStatus){
          rotateX(angle)
        }
        if(buttonYRotateStatus){
          rotateY(angle)
        }
        if(buttonZRotateStatus){
          rotateZ(angle)
        }
        // rotateZ(angle)
        fill(r,g,b);
        rectMode(CENTER);
        // rect(coordx,coordy, imgSize, imgSize);
        rect(0,0, imgSize, imgSize);
        angle+=0.0005;
        // translate(-coordx, -coordy);
      pop();
      //end of rotate each pixel

    }  
  }
}