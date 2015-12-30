//windows onload function
//loads functions upon opening webpage
window.onload = function() {
  document.getElementById("submit").addEventListener("click", checkform, false);
};

function checkform(event){
  var x = document.getElementById("signup").noValidate = true;
  var xname = document.forms["signup"]["name"].value;
  var xusername = document.forms["signup"]["username"].value;
  var xemail = document.forms["signup"]["email"].value;
  sessionStorage.setItem('username', xusername);
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
    // var link = "gallery.html";
    window.location.href = "gallery.html";
}

function sessionstore (xname) {
  sessionStorage.setItem('username', xname);
}
