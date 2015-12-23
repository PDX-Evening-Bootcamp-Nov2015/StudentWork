/* Previously I used junk.js. I didn't like it because of the array. This was harder to make work.
Scroll through images so that we are using numbers 01-60 and starting over, but passing any number that doesn't exist.
event listener that calls nextImage function after the window is loaded*/
window.onload = nextImage;
/*nextImage function iterates through integers to create links for the div with id jumbotron
 the links are inserted in background-image of the css */
function runJumbo(i) {

  setTimeout(function() {

    // this changes the css with class jumbotron and changes this image assigned to it.
    var changeIt = document.getElementById('jumbotron');
    //here we put a 0 in front of a single digit integer to match the 01 -09 images
   if (i < 10){
    changeIt.style.backgroundImage="url(images/pdxcg_" + "0" + i + ".jpg)";
    console.log("url(images/pdxcg_" + "0" + i + ".jpg)");
    /*here we skip the missing image. A little simple and not useful if other images disappear.
    could be fixed later. Evan says changing it isn't in the scope of the assignment;
    we just need to make sure a missing image doesn't break the code.*/
  } else if (i === 42){
    changeIt.style.backgroundImage="url(images/pdxcg_43.jpg)";
  }
  //here we just insert double digit integers
  else if (i > 10){
     changeIt.style.backgroundImage="url(images/pdxcg_" + i + ".jpg)";
     console.log("url(images/pdxcg_" + i + ".jpg)");
  }
  //this is the last half of the timer. every 1000 = one second.  * i creates a queue so that the first is in 1 second, the second in two seconds...
}, 1000 * i);


}

function nextImage() {

  // a for loop that iterates through integers
      for (var i = 1; i < 61; i++) {
        // var x = 1;
        //setTimeout calls  nextImage function every 4 seconds. This goes with the 4000 * i at the bottom.
      runJumbo(i);
      //this has to go in a different function because we're changing i back to 1 to start over.
      // if (i === 60){
      //   i = 1;
      //}
  }
};
