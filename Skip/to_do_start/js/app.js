var addButton = document.getElementById("add-button");
var inputField = document.getElementById("new-task");
var incompleteItems = document.getElementById("incomplete-tasks");

var addItem = function() {
    console.log("Add...");
    console.log(inputField.value);
    //get text
    //create li
    var listItem = document.createElement("li");
    var label = document.createElement("label");
    //create label
    label.innerText = inputField.value;
    //insert text into label
    listItem.appendChild(label);
    //append label to li
    incompleteItems.appendChild(listItem);
    //append li to ul
    inputField.value = "";

}

addButton.addEventListener('click', addItem);
