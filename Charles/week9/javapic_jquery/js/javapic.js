$(document).ready(function(){

function addImages() {
  var imageList = []
  for (i = 10; i < 61; i++){
imageList.push("pdxcg_"+i+".jpg");
}
  imageList.splice(0, 1);
  for (x = 1; x < 10; x++) {
  imageList.push("pdxcg_0"+x+".jpg");
}
  return imageList;
}

var images = addImages();

rotateJumbotron();

function rotateJumbotron (){
  imgNumber = 0;
  maxNumber = images.length;
  setInterval(function (){
    jumbotronCSS = $(".jumbotron").css('background-image', 'url("images/' + images[imgNumber] + '")');
    imgNumber = imgNumber + 1;
    if (imgNumber < maxNumber){
      jumbotronCSS;
    } else if (imgNumber === maxNumber) {
      imgNumber = 0;
      jumbotronCSS;
    }
  }, 10000)


  }

});