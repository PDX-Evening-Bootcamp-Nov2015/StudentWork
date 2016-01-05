//scroll through images so that we are using numbers 01-60 and starting over, but passing any number that doesn't exist.
//event listener that calls nextImage function after the window is loaded
window.onload = nextImage;
/*nextImage function  iterates through integers to create links for the div with id jumbotron
 the links are inserted in background-image of the css */
function nextImage() {
  // a for loop that iterates through integers
  for (var i = 1; i < 61; i++) {
    //setTimeout calls  nextImage function every 4 seconds. This goes with the 4000 * i at the bottom.
    setTimeout(function() {
      // this changes the css with class jumbotron and changes this image assigned to it.
      var changeIt = document.getElementById('jumbotron');
      //here we put a 0 in front of a single digit integer to match the 01 -09 images
      if (i < 10) {
        changeIt.style.backgroundImage = "url(images/pdxcg_" + "0" + i + ".jpg)";
        //here we skip the missing image. A little simple and not useful if other images disappear.
        //could be fixed
      }
      if (i === 42) {
        changeIt.style.backgroundImage = "url(images/pdxcg_43.jpg)";
      }
      //here we just insert double digit integers
      if (i > 10 && i < 60) {
        changeIt.style.backgroundImage = "url(images/pdxcg_" + i + ".jpg)";
      }
      //here we start over.
      if (i === 60) {
        i = 1;
      }
      //this is the last half of the timer. every 1000 = one second
    }, 4000 * i);
  }
}
