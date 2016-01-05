//windows onload function
//loads functions upon opening webpage
window.onload = function() {
  addImages(imageList);
//setInterval rotates the picture every two seconds
  setInterval(getRandomImage, 10000);
};
//takes the random item and inserts it into the css class image destination
function getRandomImage() {
  var jumbo = document.getElementById("jumbotron");
  var randomItem = randomList[Math.floor(Math.random()*randomList.length)];
  jumbo.style.backgroundImage = "url(../javapic/images/" + randomItem +")";
}
//empty array for holding images
var imageList = []
//puts all image files into an array
function addImages(imageList) {
  for (i = 10; i < 61; i++){
imageList.push("pdxcg_"+i+".jpg");
  }
  imageList.splice(0, 1);
  for (x = 1; x < 10; x++) {
    imageList.push("pdxcg_0"+x+".jpg");
  }
  return imageList;
}

//variable needed to plug into the randomitem function test2
var randomList = addImages(imageList);
