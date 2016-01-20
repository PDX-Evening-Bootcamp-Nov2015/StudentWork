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

test();


function test(){
var galleryHolder = document.getElementById("gallery");
var images = addImages();
$("#gallery").addClass("gallery");
for (z = 0; z < images.length; z++){
var listContainer = document.createElement("li");
var newGalleryImage = document.createElement("img");
// $('img').attr('id', z);
// $("img").addClass("gallery");
$("img").add("<img src=images/" + images[z] + "/>");
galleryHolder.appendChild(listContainer);
listContainer.appendChild(newGalleryImage);
 }
}

  });
