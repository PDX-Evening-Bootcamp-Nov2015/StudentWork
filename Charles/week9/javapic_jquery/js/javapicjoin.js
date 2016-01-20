$(document).ready(function(){
  var test = {
      name: 0,
      username: 0,
      email:0
  };
$("#signup").disableValidation = true;
$("#submit").click(function (event) {
   event.preventDefault();
   var test = {
       name1: 0,
       username1: 0,
       email1:0
   };
   var name = $("[placeholder='name']").val();
   var username = $("[placeholder='username']").val();
   var email = $("[placeholder='youremail@place.com']").val();
       if ($.trim(name) === "") {
         $("#namemessage").remove();
         $("<div id='namemessage'>Please enter your name</div>").insertAfter("[placeholder='name']");
         $("#namemessage").css( "color", "red" );
         test.name1 = 0;
   }  else if ($.trim(name) != ""){
         $("#namemessage").remove();
         test.name1 = 1;
   }
      if ($.trim(username) === "") {
         $("#usernamemessage").remove();
         $("<div id='usernamemessage'>Please enter your username</div>").insertAfter("[placeholder='username']");
         $("#usernamemessage").css( "color", "red" );
         test.username1 = 0;
   }  else if ($.trim(username) != ""){
         $("#usernamemessage").remove();
         test.username1 = 1;
   }
      if ($.trim(email) === "" || testEmail(email) === false ) {
       $( "#emailmessage" ).remove();
       $("<div id='emailmessage'>Please enter your email</div>").insertAfter("[placeholder='youremail@place.com']");
       $("#emailmessage").css( "color", "red" );
       test.email1 = 0;
   }  else if (testEmail(email) === true){
         $("#emailmessage").remove();
         test.email1 = 1;
   }
      if (test.name1 === 1 && test.username1 === 1 && test.email1 === 1){
        sessionStorage.setItem('username', username);
        document.location.href = 'gallery.html';
}
  function testEmail(email){
    var regemail = /\S+@\S+\.\S+/;
    return regemail.test(email);
}
  });
});
