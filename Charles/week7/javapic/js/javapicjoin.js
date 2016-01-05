//windows onload function
//loads functions upon opening webpage
//adds event listener to the submit button
window.onload = function() {
  document.getElementById("submit").addEventListener("click", checkForm, false);
};

// attempted to refactor this but had issues modifying the characteristics of
//a child without changing the parent
//the following lines create 4 new elements under the form with prepopulated
//error messages for form verification. They are set to display none as default
    var signupID = document.getElementById("signup");
    var errorDisplay1 = document.createElement("p1");
    var errorDisplay2 = document.createElement("p2");
    var errorDisplay3 = document.createElement("p3");
    var errorDisplay4 = document.createElement("p4");
    signupID.appendChild(errorDisplay1);
    signupID.appendChild(errorDisplay2);
    signupID.appendChild(errorDisplay3);
    signupID.appendChild(errorDisplay4);
    errorDisplay1.setAttribute('class', 'error');
    errorDisplay2.setAttribute('class', 'error');
    errorDisplay3.setAttribute('class', 'error');
    errorDisplay4.setAttribute('class', 'error');
    errorDisplay1.style.display = 'none';
    errorDisplay2.style.display = 'none';
    errorDisplay3.style.display = 'none';
    errorDisplay4.style.display = 'none';
    errorDisplay1.id = 1;
    errorDisplay2.id = 2;
    errorDisplay3.id = 3;
    errorDisplay4.id = 4;
    errorDisplay1.innerHTML = "You must fill out your name<br>";
    errorDisplay2.innerHTML = "You must fill out your username<br>";
    errorDisplay3.innerHTML = "You must fill out your e-maill<br>";
    errorDisplay4.innerHTML = "Please ensure that your e-mail address is in the following format, example@example.com";

//function takes in the values of the form and ensures they meet the requirements
//if something fails verification the corresponding error message is set to
//display inline from the default of none
// once all forms have been validated, the form is submitted and the
//username is stored in session storage
function checkForm(event){
//the following four lines reset the values of the error messages to display none
//each time the checkForm function is called in order to prevent error messages
//from being displayed once the error has been fixed
  errorDisplay1.style.display = 'none';
  errorDisplay2.style.display = 'none';
  errorDisplay3.style.display = 'none';
  errorDisplay4.style.display = 'none';
  var xname = document.forms["signup"]["name"].value;
  var xusername = document.forms["signup"]["username"].value;
  var xemail = document.forms["signup"]["email"].value;
  document.getElementById("signup").noValidate = true;
  if (xname === null || xname ===""){
    event.preventDefault();
    errorDisplay1.style.display = 'inline';
  }else if (xusername === null || xusername ===""){
    event.preventDefault();
    errorDisplay2.style.display = 'inline';
  }else if (xemail === null || xemail ===""){
    errorDisplay3.style.display = 'inline';
    event.preventDefault();
  }else if (testEmail(xemail) === false){
    errorDisplay4.style.display = 'inline';
    event.preventDefault();
  } else {
event.preventDefault();
sessionStorage.setItem('username', xusername);
redirect();
  }
}

//regex that is called by the checkform function to check proper email format
function testEmail(xemail){
  var regemail = /\S+@\S+\.\S+/;
  return regemail.test(xemail);
}

//function called after checkform function is complete to redirect to gallery
function redirect(){
    window.location.href = "gallery.html";
}
