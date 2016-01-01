window.onload = function (){
  userstore = sessionStorage.getItem('username');
  tag = document.getElementsByClassName('tagline')[0];
  tag.innerHTML = "" + userstore + " develop something beautiful"
  document.getElementById("gallery").innerHTML = "<img src='images/" + imagemaster[change] + "'/>";
var galleryholder = document.getElementById("gallery");

  setInterval(function(){
    galleryLoop();
  }, 50000);

  galleryholder.addEventListener("click", function(){
  galleryholder.setAttribute('class', 'display_img');
});

// document.addEventListener("click", function(){
//   if (event.id != galleryholder){
//     galleryholder.setAttribute('class', 'gallery');
//   }
// })
}


function addimages() {
  var imagelist = []
  for (i = 10; i < 61; i++){
imagelist.push("pdxcg_"+i+".jpg");
  }
  imagelist.splice(0, 1);
  for (x = 1; x < 10; x++) {
    imagelist.push("pdxcg_0"+x+".jpg");
  }
  return imagelist;
}

var imagemaster = addimages();
var change = 0;
function galleryLoop () {
  console.log("test");
  if (change < imagemaster.length){
    change = change +1;}
  else {
    change = 0;}
    document.getElementById("gallery").innerHTML = "<img src='images/" + imagemaster[change] + "'/>";
  }
