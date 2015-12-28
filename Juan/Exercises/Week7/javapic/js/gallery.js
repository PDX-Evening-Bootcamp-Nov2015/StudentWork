

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

// function to check if image is in the images folder
function imgExists(imgNum, numImgs) {
  var missImgs = [42]; // list of images numbers missing from the images folder
  // check if image number is on the list of missing images
  if (!(missImgs.indexOf(imgNum) === -1) || imgNum > numImgs){
    // move on to the next image number if so
    return false;
  }
  return true;
}

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
  // generate new li
  var newLi = document.createElement('li'),
      newImg = document.createElement('img');// generate new img
  // insert proper src attribute
  newImg.src = imgPath(imgNum);
  // insert image into li
  newLi.appendChild(newImg);
  // return completed element
  return newLi;
}

// function to populate gallery
function popGallery(numImgs) {
  // retreive the gallery element
  var gallery = document.getElementById('gallery');
  // loop once for each image
  for (var i = 1; i <= numImgs; i++){
    // check if image number is valid
    if (!imgExists(i, numImgs)) {
      continue;
    }
    // call generate for the appropriate image number
    // append generated element to gallery
    gallery.appendChild(genImg(i));
  }
}

// function to parse username from url
function getUserName() {
  // check the url and store it in a variable so we can search it
  var pageURL = window.location.href,
      uNameRegEx = /[?&]+([^?&]+)/g, // regex to match strings after ? in url
      passedData = pageURL.match(uNameRegEx); // cache all the matching strings
  // search the url for the passed username and return it
    // match function returns array, loop through that array to find username
    // break the loop when we find the username so our variable is one thing
}

// function to insert the username into the page
  // select the tagline text property and cache it so we can modify it
  // modify the cached text property to include the username

// function to select clicked image and display in lightbox
  // cache the lightbox div
  // determine which image was clicked
  // check if the lightbox is already displayed
    // if so, close the lightbox
    // remove lightbox closing event listener
  // get the proper URL for that image
  // change the image div target url
  // remove class that hides lightbox div
  // add class that displays lightbox div
  // add event listener to close lightbox div

// function to close lightbox on a click elsewhere
  // cache the lightbox div
  // add class that hides lightbox div
  // remove class that displays lightbox div
  // remove event listener to close lightbox div

window.onload = function(){
  var userName, // parse the url for the username so we can put in on the page
      totalImgs = 60; // total number of images in the folder
};
