//this is used to swap the user's name with the word "javapic in the gallery"
function insertName() {
  //sessionStorage stores data until the page session closes
  var name = sessionStorage.getItem('name');
  //had to add this when I noticed that javapic was switched with the word "null" when no name was stored
  if (name != null) {
    //once again using innerHTML
    document.body.innerHTML = document.body.innerHTML.replace(/javapic/, name);
  }
}
insertName();



//doing stuff to the section. we'll use these later for event handlers
var imageSection = document.getElementById('gallery');
//we need to make a ul to put the li image elements in
var ul = document.createElement("ul");
imageSection.appendChild(ul);



//I chose to do this in a way similar to how I did my jumbotron.
for (var picNum = 1; picNum < 61; picNum++) {
  if (picNum < 10) {
    //except that we have to insert the whole li tag
    var image = "<li><img id='0" + picNum + "' src='images/pdxcg_" + "0" + picNum + ".jpg' /></li>";
    //and scroll through the images
    ul.innerHTML += image;

    //skip the missing image.
  } else if (picNum === 42) {
    picNum = 43;


  } else if (picNum > 9) {
    var image = "<li><img id='" + picNum + "'  src='images/pdxcg_" + picNum + ".jpg' /></li>";
    ul.innerHTML += image;

  }
}


//doing stuff to the image_show (large image) div. Will use this later with an event listener
var imgDiv = document.getElementById('image_show')


/*changes the class of image_show (lightbox div)
 from display_none to display_img and inserts the html from the target div into the
display_img div. This will be called later in the addEventListener method */
function clickHandler(theEvent) {
//outerHTML repalces the whole html including the tags
  var theImage = theEvent.target.outerHTML;
  //changing the class of image_show from display_none to display_img
  imgDiv.className = "display_img";
  //changing the html in the image_show by inserting the html from the thumbnail
  imgDiv.innerHTML = theImage;
}

//make the lightbox go away when clicked by changing it's class name back to display_none
function reSet(theEvent){
  if (theEvent.target.className == 'display_img') {
    imgDiv.className = 'display_none';
  }
}

// addEventListener(type, listener) is a method
imageSection.addEventListener("click", clickHandler);
imgDiv.addEventListener("click", reSet);
