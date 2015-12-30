var addButton = document.getElementById("add-button");
var inputField = document.getElementById("new-task");
var incompleteItems = document.getElementById("incomplete-tasks");


var addItem = function(){
    console.log("add...");
    console.log(inputField.value);
    var listItem = document.createElement("li");
    var label = document.createElement("label");
    label.innerText = inputField.value;
    listItem.appendChild(label);
    incompleteItems.appendChild(listItem);
    inputField.value = ""

};

addButton.addEventListener('click', addItem);
