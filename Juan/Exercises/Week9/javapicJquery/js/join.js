// this script will cover form validation, and will also disable default form
// validation to ensure cross broswer experience is the same
/*Requirements:
- _join.html_
  - add form validation that works in all major browsers (you'll need to
  deactivate browser validate to check this)
  - form validation should have all fields marked "required" required, and all
  email fields should require and check for proper email syntax.
  - any validation errors should be presented clearly to the user so that they
  may correct them
  - on completion of the form, navigate the user to the gallery, passing their
  name to the page
*/

// function to check if field is required
// !$('selector').attr('required') -- returns false if element has required prop

// function to check if field has a value
// !$('selector').val() - returns true if field is empty

// function to check if e-mail field has a correctly formatted e-mail
function isEmail(field) {
  var mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return mailRegEx.test(field.value);
}

// function to create and return error messages
function errMessage(err) {
  // object to store error messages
  var messages = {
    reqField: "This field is required.",
    notEmail: "Please enter a valid e-mail address."
  };
  // return appropriate error messages
  return messages[err];
}

// function to remove previous error styling
function unstyleErrors() {
  var $errMessages = $('.error'), // select created error messages
      $inputs = $('input'); // select all input fields
  $inputs.css('outline', 'none'); // remove nasty red borders
  $errMessages.remove(); // done with error messages
}

// function to add error styling


// function to call all validation functions and decide if form submit passes


// on pageload
$();
