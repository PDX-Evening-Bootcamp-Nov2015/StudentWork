/*
- _gallery.html_
  - update the slogan to add a ", user_name", with the user's name
    - loop through the image folder and display each image in the folder
      - add the functionality so that if a user clicks on an image, the lightbox appears with that image loaded in
        - when the lightbox is up, is the user clicks anywhere not on the image, the lightbox closes
*/

window.onload = function(e){
    var user = "Garrett";
    var name = document.getElementsByClassName("tagline")[0].innerHTML = "develop something, " + user;
};

function uctext (){
    var galleryHTML = document.getElementById("gallery");
    console.log(galleryHTML.childNodes);
    //console.log(galleryHTML.innerHTML);
};

uctext();
