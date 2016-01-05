var jumbotronImage = document.getElementById('jumbotron');
setInterval(generateImg, 10000);


function generateImg(){
  var number = "pdxcg"+'_';
  var jpg = ".jpg"
  for(var i=1; i<71; i++){
    var num = Math.random();
      num = Math.floor(num*60);
      num = num+0
      if(num < 10){
        num = "0" + num.toString();
      }
      var newNum = num.toString();
  var imgFile = number+newNum+jpg;
  console.log(imgFile);
  var urlThing = "images/"+imgFile;
  console.log(urlThing);
  jumbotronImage.style.backgroundImage = "url("+urlThing+")";
  }
};
