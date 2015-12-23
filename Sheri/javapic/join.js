/*you will need a prevent default to stop form from submitting after giving an error
make sure you use alt tag to describe
we may need to create a cookie to grab the mame and use it over in the gallery
action = 'galery.html' takes you to gallery page when you hit submit
form has elements that you can grab
name attribute*/

//forms collection stuff
var form = document.getElementById("signup")
form.noValidate = true
//I think I'll need these:
form.elements.name;//f.e.// this needs to be saved to be used in the gallery
form.elements.username;
form.elements.email; //go through each one and make sure it's valid
//have it check name, email, username one at a time for better user experience
//make a function
//use event.target if your using it with an event handler


//need to add action = galery.html to submit.
//notes from Evan:
// targeting submit button:
// if you want to to an eventlistener in onclick:
// .....onclick = checkform;
// addEventListener('click', function(event))
//    checkform(event);
