// var number = function RotateImages() {
//     for (i=0, i<number + 1, i++);
}

var allFiles = [];
    for (i=0, i<10, i++){
        var Gallery = "../images/pdxcg_" + i + ".jpg";

    for (i=0, i>9, i++){
            var Gallery = "../images/pdxcg_" + i + ".jpg";
            allFiles.push(Gallery)
    }



var ImageArr1 = new Array("Picture(3).jpg","Picture(1).jpg","Picture(2).jpg");
var ImageHolder1 = document.getElementById("jumbotron");

var ImageArr2 = new Array("Picture(5).jpg","Picture(6).jpg","Picture(7).jpg");
var ImageHolder2 = document.getElementById("jumbotron");

function RotateImages(whichHolder,Start)
{
  var a = eval("ImageArr"+whichHolder);
  var b = eval("ImageHolder"+whichHolder);
  if(Start>=a.length)
      Start=0;
  b.src = a[Start];
  window.setTimeout("RotateImages("+whichHolder+","+(Start+1)+")",1500);
}

RotateImages(1,0);
RotateImages(2,0);
