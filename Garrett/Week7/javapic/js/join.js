window.onload = function(e){
    document.getElementById("signup").addEventListener("submit", function(event){
        buildAccount(event)
    });
};

function buildAccount (event){
    var joinForm = document.getElementById("signup");
    //var name = joinForm.elements.name.value;
    //var username = joinForm.elements.username.value;
    //var email = joinForm.elements.email.value;

    for (i=0;i<joinForm.elements.length;i+=1){
        //console.log(joinForm.elements[i]);
        validate(joinForm.elements[i]);
    }

    document.cookie = "username=garretts;"; 

    console.log(document.cookie);
};

function validate (strA){
    var strB = 'email';

    switch (strB){
        case 'email':
            console.log("e ", strA);
            break;
        case 'username':
            console.log(strA);
           break; 
        case 'name':
            console.log(strA);
            break;
    };
}

/*
var validateType = {
    name: function(el){
    },
    username: function(el){
    },
    email: function(el){
    },
}


(function(){
    document.forms.register.noValidate = true;
    $('form').on('submit'), function(e) {
    var elements = this.elements;
        var valid = {};
        var isValid;
        var isFormValid;
        for (var i = 0, l = (elements.length - 1); i < l; i += 1) {
            isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
            if (!isValid) {
                showErrorMessage(elements[i]);
            } else {
                removeErrorMessage(elements[i]);
            }
            valid[elements[i].id] = isValid;
        }

        if (!validateName()) {
            showErrorMessage(document.getElementById('name'));
            valid.name = false;
        } else {
            removeErrorMessage(document.getElementById('name'));
        }
    
        if (!validateUsername()) {
            showErrorMessage(document.getElementById('username'));
            valid.username = false;
        } else {
            removeErrorMessage(document.getElementById('username'));
        }
    
        if (!validateEmail()) {
            showErrorMessage(document.getElementById('email'));
            valid.email = false;
        } else {
            removeErrorMessage(document.getElementById('email'));
        }
    
        for (var field in valid) {
            if (!valid[field]){
                isFormValid = false;
                break;
            } 
            isFormValid = true;
        }
        if(!isFormValid){
            e.preventDefault();
        }
});

function validateTypes(el){
    if (!el.value) return true;

    var type = $(el).data('type') || el.getAttribute('type');
    if (typeof validateType[type] === 'function') {
        return validateType[type](el);
    } else {
        return true;
    }
}

function showErrorMessage(el){
    var $el = $(el);
    var $errorContainer = $el.siblings('.error');
    if (!$errorContainer.length) {
        $errorContainer = $('<span class="error"></span>').insertAfter($el);
    }
    $errorContainer.text($(el).data('errorMessage'));
}

function setErrorMessage(el, messages){
    $(el).date('errorMessage', message);
}

function isEmpty(el){
    return !el.value || el.value === el.placeholder;
}

function isRequired(el) {
    return ((typeof el.required === 'boolean') && el.required) || (typeof el.required === 'string');
}

function validateRequired(el) {
    if (isRequired(el)){
        var valid = !isEmpty(el);
            if (!valid){
                setErrorMessage(el, 'Field is required');
            } 
        return valid;
    }
    return true;
}

function validateName() {
    var name = document.getElementById('name');
    var valid = name.value.length <= 140;
    if (!valid){
        setErrorMessage(name, 'Your name should not exceed 140 chars');
    } 
    return valid;
}

function validateUsername() {
    var username = document.getElementById('username');
    var valid = username.value.length <= 140;
    if (!valid){
        setErrorMessage(username, 'Your name should not exceed 140 chars');
    } 
    return valid;
}

function validateEmail() {
    var email = document.getElementById('email');
    var valid = email.value.length <= 140;
    if (!valid){
        setErrorMessage(email, 'Your name should not exceed 140 chars');
    } 
    return valid;
}
}());
*/
