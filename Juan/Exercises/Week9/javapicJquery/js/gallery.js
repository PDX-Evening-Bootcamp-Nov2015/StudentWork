/*
Requirements
_gallery.html_
  - update the slogan to add a ", user_name", with the user's name
  - loop through the image folder and display each image in the folder
  - add the functionality so that if a user clicks on an image, the lightbox
  appears with that image loaded in
  - when the lightbox is up, is the user clicks anywhere not on the image, the
  lightbox closes
  */

// function to generate image path
function imgPath(imgNum){
  // check if image number needs zero padding
  if (imgNum < 10) {
    imgNum = '0' + imgNum;
  } else {
    imgNum = String(imgNum);
  }
  // add properly padded number to path and return
  return 'images/pdxcg_' + imgNum + '.jpg';
}

// function to generate new li containing image
function genImg(imgNum){
  // add alt image
}

// function to populate gallery
function popGallery(numImgs) {

}

// function to parse username from url
function getUserName() {
  // check the url and store it in a variable so we can search it
  var pageURL = window.location.href,
      uNameRegEx = /[?&]+([^?&]+)/g, // regex to match strings after ? in url
      passedData = pageURL.match(uNameRegEx); // cache all the matching strings
  // search the match data for the passed username and return it
  for (var i = 0; i < passedData.length; i++) {
    var currStr = passedData[i];
    // match function returns array, loop through that array to find username
    if (currStr.substr(0, 9) === '?username') {
      // break the loop when we find the username
      return currStr.substr(10)
    }
  }
}

// function to insert the username into the page
function popUName(uName) {

}

// function to select clicked image and display in lightbox
function imgClick(event) {

}

// function to close lightbox on a click elsewhere
function closeLightbox(event) {

}

window.onload = function(){
  
};
