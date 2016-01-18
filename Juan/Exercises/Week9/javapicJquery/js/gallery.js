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

/* function to generate image path */
function imgPath(imgNum){
  imgNum = String(imgNum);
  // check if image number needs zero padding
  if (imgNum.length < 2) {
    imgNum = '0' + imgNum;
  }
  // add properly padded number to path and return
  return 'images/pdxcg_' + imgNum + '.jpg';
}

/* function to generate new li containing image */
function genImg(imgNum){
  // add alt image
}

/* function to populate gallery */
function popGallery(numImgs) {

}

/* function to parse username from url */
function getUserName() {
  // check the url and store it in a variable so we can search it
  var url = $(location)attr.('href'),
      urlComponents,
      username;
  // split the url into searchable components
  urlComponents = url.split('?')
  // search the match data for the passed username and return it
  for (var i = 0; i < urlComponents.length; i++){
      // split the string again to compare value pairs
      compComponents = urlComponents[i].split('=');
      if (compComponents[0] === 'username') {
        return compComponents[1];
      }
  }

}

/* function to insert the username into the page */
function popUName(uName) {

}

/* function to select clicked image and display in lightbox */
function imgClick(event) {

}

/* function to close lightbox on a click elsewhere */
function closeLightbox(event) {

}

window.onload = function(){

};
