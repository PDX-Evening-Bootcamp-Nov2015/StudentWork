// setInterval(generateImg, 3000);
window.onload = generateImg;
var el = document.getElementById('gallery');
el.addEventListener('click', function(){
  lightbox(event.target);
}, false);

// var imageShow = document.getElementById("image_show");
// imageShow.display_none = "";

function generateImg(){
  var number = "pdxcg"+'_';
  var jpg = ".jpg"

  for(var i=1; i<71; i++){
    var num = Math.random();
      num = Math.floor(num*60);
      num = num+0
      if (num === 0) {
        num = num + 1;
      }
      if(num < 10){
        num = "0" + num.toString();
      }
        if(num === 42){
          num = num + 1;
        }
      var newNum = num.toString();
  var imgFile = number+newNum+jpg;
  var urlThing = "images/"+imgFile;
  var images =  document.createElement('img');
  var list = document.createElement("li");
    images.src = urlThing;
    list.appendChild(images);
  var imageShow = document.getElementsByClassName("gallery")[0];
  // imageShow.display_none = "";
  imageShow.appendChild(list);
  }
};

function lightbox(imag){
  // imag.classList.add('display_img');
var imageShw = document.getElementById("image_show")
imageShw.className = 'display_img';
var childImage = imageShw.getElementsByTagName('img')[0];
// var childNode = imageShw.firstChild;
childImage.src = imag.src;
document.addEventListener('click', closeLightBox, 'false');
};

function closeLightBox(event){
  var imgShow = document.getElementById("image_show");
  var litImage = event.target;
  console.log(litImage);
  if (litImage.getAttribute('id') === 'image_show'){
    imgShow.setAttribute('class', "display_none");
  }
};
