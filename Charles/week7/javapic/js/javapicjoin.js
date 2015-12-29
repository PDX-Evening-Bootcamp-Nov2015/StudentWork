//windows onload function
//loads functions upon opening webpage
window.onload = function() {
  document.getElementById("submit").onclick = checkform;
};

function checkform(){
  var x = document.getElementById("signup").noValidate =true;
  var xname = document.forms["signup"]["name"].value;
  var xusername = document.forms["signup"]["username"].value;
  var xemail = document.forms["signup"]["email"].value;
  if (xname === null || xname ===""){
    alert("Please fill out your name");
    event.preventDefault();
  }else if (xusername === null || xusername ===""){
    alert("Please fill out your username");
    event.preventDefault();
  }else if (xemail === null || xemail ===""){
    alert("Please fill out your e-mail address");
    event.preventDefault();
  }else if (testemail(xemail) === false){
    alert("Please ensure that your e-maill address is in the following format, example@example.com");
    event.preventDefault();
  } else {
event.preventDefault();
redirect();
  }
}


function testemail(xemail){
  var regemail = /\S+@\S+\.\S+/;
  return regemail.test(xemail);
}

function redirect(){
    var link = "/Users/pythonnnnnn/bootcamp/Studentwork/Charles/week7/javapic/gallery.html";
    window.location.pathname = link;
}
