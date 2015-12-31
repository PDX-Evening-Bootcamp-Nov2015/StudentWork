/*
- _gallery.html_
- update the slogan to add a ", user_name", with the user's name
- loop through the image folder and display each image in the folder
- add the functionality so that if a user clicks on an image, the lightbox appears with that image loaded in
- when the lightbox is up, is the user clicks anywhere not on the image, the lightbox closes
*/

window.onload = function(e){
    var imageshowHTML = document.getElementById("image_show");
        imageshowHTML.addEventListener("click", closeLightbox);
    var user = "Garrett";
    var name = document.getElementsByClassName("tagline")[0].innerHTML = "develop something, " + user;
    createImage();
};

function createImage () {
    //loop through the number of files to create images with event listeners.
    var fileNum;
    for (var i=1; i<60; i += 1){
        if (i <= 9 ){
            fileNum = "0" + i;
        } else {
            fileNum = i;
        }
        var fileName = "images/pdxcg_" + fileNum + ".jpg";

        var galleryHTML = document.getElementById("gallery");
        var liContainer = document.createElement("li");
        var newImage = document.createElement("img");
        newImage.setAttribute('src', fileName);
        newImage.setAttribute('class', 'gallery');
        newImage.addEventListener("click", lightbox);
        galleryHTML.appendChild(liContainer);
        liContainer.appendChild(newImage);
    }
};

//open the lightbox
function lightbox () {
    //get the lightbox prepped
    var showImg = event.target;
    var showImgSrc = showImg.getAttribute('src');
    var imgBig = document.getElementById("image_show");
    
    //set the class on the lightbox for all to see
    imgBig.firstChild.setAttribute('src', showImgSrc);
    imgBig.setAttribute('class', 'display_img'); 

    //I don't know why this doesn't work.
    //imgBig.firstChild = showImg;

};

//close the lightbox
function closeLightbox () {
    //get the clicked element
    var showImg = event.target;
   
    // if you click on the DIV, (not but not the image)
    // otherwise change the class to hide it..
    if (showImg.getAttribute("id") === "image_show"){
        var imgBig = document.getElementById("image_show");
        imgBig.setAttribute('class', 'display_none'); 
    };
};
