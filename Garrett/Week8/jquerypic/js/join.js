window.onload = function(){
    //disable default form validation
    document.getElementById("signup").noValidate = true;

    //add an event listener
    document.getElementById("signup").addEventListener('submit', function(e){
        //if the account build is successful, then forward to the gallery.
    	var validForm = buildAccount(e);
	if (validForm) {
            console.log("Form Submitted successfully!");
            window.location = "gallery.html";
        } else {     	
	    e.preventDefault();
        }
    }, false);
};

//build an account
function buildAccount (e){
    //get all the form elements
    var joinForm = document.getElementById("signup");

    //start valid form counter
    var validForms = 0;

    //validate each element
    for (i=0;i<joinForm.elements.length;i+=1){
        validForms += validate(joinForm.elements[i]);
	e.preventDefault();
    };

    //subtract 1 from validForms due to submit button
    validForms -= 1;


    //if all forms are valid, then return true
    if (validForms === 3){
    	console.log("All Forms Valid");
        return true;
    } else {
    	console.log(validForms, "Invalid Forms");
        return false;
    };
};

//validate form fields
function validate (strA){
    var fieldType = strA.getAttribute('name');
    var fieldValue = document.getElementsByName(fieldType)[0].value;
   
    //set initial error state
    var error = false;

    //validate each fieldtype and error otherwise.
    switch (fieldType){
        case 'email':
            var validEmail = /\S+@\S+\.\S+/;
	    if (!validEmail.test(fieldValue)){
                error = true;
 	    } 
            break;
        case 'username':
            var validUsername = fieldValue;
	    if (validUsername.length <= 140 && validUsername.length != 0) {
            } else {
		error = true;
	    }
            break;
        case 'name':
            var validName = fieldValue;
	    if (validName.length <= 140 && validName.length != 0) {
    	    	document.cookie = "name=" + fieldValue + ";" ; 
            } else {
                error = true;
	    }
            break;
        default:
            break;
    };
    //alert user with the valid field type.
    if (error) { 
        alert("Your " + fieldType + " is invalid.");
	return 0;
    } else {
        return 1;
    };

}
