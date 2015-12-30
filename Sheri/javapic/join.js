//form variable gets the form elementin the HTML with id "signup"
var form = document.getElementById("signup");

//this disables the default form validation
form.disableValidation = true;
//event listener that stops the submit button from doing what it normally does so that we cacn validate
document.getElementById("submit").addEventListener("click", function() {
  event.preventDefault();

//Three variables hold the value of each form field once they're filled out
  var name = form.elements.name.value;
  var username = form.elements.username.value;
  var email = form.elements.email.value;

//this only works if there is *not data* in the name field.
  if (notEmpty(name) === false) {
    //this is the form element; the parent of the input element
    var nameElement = form.elements.name;
    // div for my error message
    var nameError = document.createElement("div");
    //this changes the html in my new div to contain an error message
    nameError.innerHTML = 'Please enter your name.';
    //this puts the new div after the field (parent node) and before the next one (the next sibling).
    nameElement.parentNode.insertBefore(nameError, nameElement.nextSibling);
  }

//This follows the same logic as above
  if (notEmpty(username) === false) {
    var usernameElement = form.elements.username;
    var usernameError = document.createElement("div");
    usernameError.innerHTML = 'Please enter your username.';
    usernameElement.parentNode.insertBefore(usernameError, usernameElement.nextSibling);

  }
//so does this
  if (checkEmail(email) === false) {
    var emailElement = form.elements.email;
    var emailError = document.createElement("div");
    emailError.innerHTML = 'Must have valid email address.';
    emailElement.parentNode.insertBefore(emailError, emailElement.nextSibling);

  }
  //this saves the name data, but only if the form is filled out right.
  if (notEmpty(name) && notEmpty(username) && checkEmail(email)) {
    sessionStorage.setItem('name', name);
    //and takes user to gallery page
    document.location.href = 'gallery.html';
  }
});

//this is a regex function to make sure the email is done correctly. i dot the regex from Stack Overflow.
function checkEmail(email) {
  var regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  //test is a method that tests for a match in a string
  return regexEmail.test(email);
}
//this tests for an empty string (no value enetered) in field form. We need to call it in the if statements above.
function notEmpty(string) {
  if (string == ''){
    return false
  } else {
    return true
  }
}
