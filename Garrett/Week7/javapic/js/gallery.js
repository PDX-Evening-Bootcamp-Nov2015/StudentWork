/*
- _gallery.html_
  - update the slogan to add a ", user_name", with the user's name
    - loop through the image folder and display each image in the folder
      - add the functionality so that if a user clicks on an image, the lightbox appears with that image loaded in
        - when the lightbox is up, is the user clicks anywhere not on the image, the lightbox closes
*/

window.onload = function(e){
    var galleryHTML = document.getElementById("gallery");
        galleryHTML.addEventListener("click", lightbox);
    var user = "Garrett";
    var name = document.getElementsByClassName("tagline")[0].innerHTML = "develop something, " + user;
    createImage();
};

function createImage () {
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
        //newImage.setAttribute('class', 'display_img');
        newImage.addEventListener("click", lightbox);
        galleryHTML.appendChild(liContainer);
        liContainer.appendChild(newImage);
    }
};

function lightbox () {
    var showImg = event.target;
    showImg.setAttribute('class', 'display_img');
    console.log(showImg);
};

