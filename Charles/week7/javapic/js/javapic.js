//windows onload function
//loads functions upon opening webpage
window.onload = function() {
  addimages(imagelist);
//setInterval rotates the picture every two seconds
  setInterval(test2, 2000);
};
//takes the random item and inserts it into the css class image destination
function test2() {
  var el = document.getElementById("jumbotron");
  var randomItem = test[Math.floor(Math.random()*test.length)];
  el.style.backgroundImage = "url(../javapic/images/" + randomItem +")";
}
//empty array for holding images
var imagelist = []
//puts all image files into an array
function addimages(imagelist) {
  for (i = 10; i < 61; i++){
imagelist.push("pdxcg_"+i+".jpg");
  }
  imagelist.splice(0, 1);
  for (x = 1; x < 10; x++) {
    imagelist.push("pdxcg_0"+x+".jpg");
  }
  return imagelist;
}

var test = addimages(imagelist);
