

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

// function to generate new li containing image
  // generate new li
  // generate new img
  // check if image index needs padding
  // insert proper src attribute
  // return completed element

// function to populate gallery
  // retreive the gallery element
  // loop once for each image
    // call generate for the appropriate image number
    // append generated element to gallery

// function to parse username from url
  // check the url and store it in a variable so we can search it
    // regex for matching strings after ? in url : /[?&]+([^?&]+)/g
  // search the url for the passed username and return it
    // cache all the matching strings
    // match function returns array, loop through that array to find
    // the username
    // break the loop when we find the username so our variable is one thing

// function to insert the username into the page
  // select the tagline text property and cache it so we can modify it
  // modify the cached text property to include the username

// function to select clicked image and display in lightbox

window.onload = function(){
  var userName, // parse the url for the username so we can put in on the page
      numImgs = 60; // define total number images once for flexibility
};
