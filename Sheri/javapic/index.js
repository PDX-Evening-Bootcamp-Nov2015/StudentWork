/* Previously I used junk.js. I didn't like it because of the array. This was harder to make work,
because I was trying to use setTimer which didn't work when I when I tried to reset loop.
Worked in junk.js because I didn't get to where I tried to reset the loop.
Below is the event listener that calls nextImage function after the window is loaded*/
window.onload = nextImage;
function nextImage() {
  var picNum = 1;
  var changeIt = document.getElementById('jumbotron');
 //setInterval is a built-in timer function in JavaScript. Inside it I place the rules for the images.
  setInterval(function() {
    /*conditional (ternary) operator (?:)
    returns on of two expressions depinging on condition - a shortcut for an if/else
    below translates to if picNum equals 60, then picNum is reassigned to equal 1,
    then add 1 to picNum each time the anonymous function runs.
    same as:
    if (picNum === 60) {
    picNum = 1:
  } else {
  picNum += 1;
}
  */
    picNum = picNum === 60 ? 1 : picNum + 1;
    //the first line of this conditional fixes the problem of the leading zeros in the first 9 images.
    if (picNum < 10){
      //this makes a new image url for the css background-image
      changeIt.style.backgroundImage="url(images/pdxcg_" + "0" + picNum + ".jpg)";
      //this is a de-bugger. I'm leaving it in in case I need to debug later.
        console.log("url(images/pdxcg_" + "0" + picNum + ".jpg)");
        /*here we skip the missing image. A little simple and not useful if other images disappear.
        could be fixed later. Evan says changing it isn't in the scope of the assignment;
        we just need to make sure a missing image doesn't break the code the code ran fine
        before I added this, so it should still */
      } else if (picNum === 42){
        changeIt.style.backgroundImage="url(images/pdxcg_43.jpg)";
      }
      //here we just insert double digit integers
      else if (picNum > 9){
         changeIt.style.backgroundImage="url(images/pdxcg_" + picNum + ".jpg)";
         console.log("url(images/pdxcg_" + picNum + ".jpg)");
      }
      //and the last half of setInterval. 10000 = 10 seconds.
  }, 10000);

}
