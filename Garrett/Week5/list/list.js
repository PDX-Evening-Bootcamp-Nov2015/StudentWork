var hello_onload = function() {
    alert("I'm called when the page loads");
};

var hello = function (event){
    event.preventDefault();

    var text = document.getElementById("new_list_text").value;
    
    console.log("you entered: " + text);

    var new_li = document.createElement("li");
    
    new_li.textContent = text;
    new_li.setAttribute('class', 'default');
   
    var new_li_id = next_list_item_id();
    new_li.setAttribute("id", new_li_id);
    var new_li_self_destruct = document.createElement("button");
    new_li_self_destruct.textContent = "Remove Me";
    new_li_self_destruct.setAttribute('onclick', 'remove_li("' + new_li_id + '")');
    new_li.appendChild(new_li_self_destruct);


    var ul = document.getElementById("todo_list");
    
    ul.appendChild(new_li);

};

var remove_li = function (li_id) {
    var victim = document.getElementById(li_id);
    victim.parentNode.removeChild(victim);
};

var next_list_item_id = (function () {
    var counter = 0;
    return function () {
        counter += 1;
        return "li_autonumber_" + counter;
    }
}());

var goodbye = function (event) {
    event.preventDefault();

    var ul = document.getElementById("todo_list");
    var first_todo = ul.children[0];
    ul.removeChild(first_todo);
};

( function () {
}
 ());
