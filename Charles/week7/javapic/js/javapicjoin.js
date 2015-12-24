//windows onload function
//loads functions upon opening webpage
window.onload = function() {
  document.getElementById("submit").onclick = checkform;
  /* FROM_EVAN
  * This is similar to what you have above, but with an eventListener.
  * document.getElementById("submit").addEventListener("click", checkform, false);
  */
};
  /* FROM_EVAN
  * note: this parameter to checkform doesn't have to be called 'event', it
  *   can be anything. Apparently Firefox wants the event object to be passed
  *   into the callback function (e.g. checkform), but not to the eventListener.
  *
  *   Also, I noticed that the alerts look very different in Chrome and Firefox,
  *   so you probably shouldn't use them. A big reason to implement your own
  *   validation is so things more consistent across browsers. Instead of alerts
  *   try inserting an element containing an error message next to a field that
  *   has an error.
  */
function checkform(event){
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

/* FROM_EVAN
* window.location.pathname breaks on anyone else's computer that isn't yours :(
* window.location.href will let you use a relative path instead
*/
function redirect(){
    // var link = "/Users/pythonnnnnn/bootcamp/Studentwork/Charles/week7/javapic/gallery.html";
    // window.location.pathname = link;
    window.location.href = "gallery.html";
}
