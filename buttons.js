let buttonXRotate, buttonYRotate, buttonZRotate;
let buttonXRotateStatus = 0;
let buttonYRotateStatus = 0;
let buttonZRotateStatus = 0;

function buttonX(){
  // print("ButtonX")
  buttonXRotateStatus = 1 - buttonXRotateStatus
  // print(buttonXRotateStatus)
  if(buttonXRotateStatus === 1){
    buttonXRotate.style("background-color", "lightgreen");
  }
  else{
    buttonXRotate.style("background-color", "lightgray");
  }
  print("buttonXRotateStatus : ", buttonXRotateStatus)
  return buttonXRotateStatus;
}

function buttonY(){
  // print("ButtonY")
  buttonYRotateStatus = 1 - buttonYRotateStatus
  // print(buttonYRotateStatus)
  if(buttonYRotateStatus === 1){
    buttonYRotate.style("background-color", "lightgreen");
  }
  else{
    buttonYRotate.style("background-color", "lightgray");
  }
  print("buttonYRotateStatus : ", buttonYRotateStatus)
  return buttonYRotateStatus;
}

function buttonZ(){
  // print("ButtonZ")
  buttonZRotateStatus = 1 - buttonZRotateStatus
  // print(buttonZRotateStatus)
  if(buttonZRotateStatus === 1){
    buttonZRotate.style("background-color", "lightgreen");
  }
  else{
    buttonZRotate.style("background-color", "lightgray");
  }
  print("buttonZRotateStatus : ", buttonZRotateStatus)
  return buttonZRotateStatus;
}

// function restartCanvas(){
//   redraw();
// }

function savePic() {
  save("myCanvas.jpg");
}
