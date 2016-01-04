var currentFile = 1;
setInterval(changeBG, 10000);

//change background
function changeBG (){

  //increment background filecounter
  currentFile = currentFile + 1;
  var fileNum;
  //prepend "0" if file number under nine
  if (currentFile <= 9 ){
    fileNum = "0" + currentFile;
  } else if (currentFile > 60) {
    currentFile = 1;
    fileNum = "0" + currentFile;
  } else {
    fileNum = currentFile;
  }
  var fileName = "images/pdxcg_" + fileNum + ".jpg";
  $("#jumbotron").attr("src", fileName);
};
