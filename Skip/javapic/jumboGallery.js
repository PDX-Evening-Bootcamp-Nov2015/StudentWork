/* This Program takes an Gallery of images and rotates through each on a
    webpage using the method setInterval
*/

// This function loads the function to index files to display
window.onload = function() {
    rotateImages(imageFiles);

// This method declares what function is used to rotate images
// over an equal time setting
    setInterval(sendImage,2000);
};
// This variable is for an empty list to send image files after they
//  are passed through the rotateImages function
var imageFiles = [];

// This variable defines a counter to use in the next function; it will count
// through the imageFiles indexes that are being displayed on the webpage
var count = 0;

// This function sends the image from the imageFile to the webpage
 function sendImage() {
 // This variable is set to hook to the correct div in the html
    var imageSpace = document.getElementById("jumbotron");
// This variable is one imageFile index
    var pix = imageFiles[count];

    // This describes the css style setting to place the images
    imageSpace.style.backgroundImage = pix;
    // This method is what counts through each index, one at a time, each time
    // the function sendImage is called when each Interval time lapses
    count+=1;

}


// This function loops through part of the original image folder and places
// an index on each image to describe when it gets displayed.
function rotateImages(imageFiles) {
// This half of the function is for the first 9 image objects
// described numberically beginning with a zero
      for (i=1; i<10; i++) {
        imageFiles.push("url(../javapic/images/pdxcg_0" + i + ".jpg)");
    }

    // This half of the function It is used for the last 51 image objects
    // described numberically NOT beginning with a zero
    for (i=10; i>61; i++){
        imageFiles.push("../images/pdxcg_" + i + ".jpg");
    }
}
