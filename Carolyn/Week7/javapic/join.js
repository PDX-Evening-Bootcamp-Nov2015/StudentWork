window.onload = function(){
  document.getElementById('submit').addEventListener('click', formValidation, false);

};

function formValidation(){
  var form = document.getElementById('signup').noValidate = true;
  var name = document.forms['signup']['name'].value;
  var username = document.forms['signup']['username'].value;
  var email = document.forms['signup']['email'].value;
  var completedField = false;
  var emailValid = /.+@\S+\.\S+/;
  if (name === null){
    alert('Please provide as name');
    completedField = true;
  };
  if (username === null){
    alert('Please provide a username');
    completedField = true;
  };
  if (email === null){
    alert('Please provide an email');
    completedField = true;
  };
  if (emailValid.test(email) === false){
    alert('Please provide a valid email address');
    completedField = true;
  };
  if (completedField === false){
    console.log(completedField);
    window.location.href = "gallery.html"
  };
 event.preventDefault();
};
