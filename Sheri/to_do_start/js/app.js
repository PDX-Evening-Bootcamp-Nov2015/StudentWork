var addButton = document.getElementById('add-button');
var inputField = document.getElementById('new-task');
var incompleteItems = document.getElementById('incomplete-tasks')

var addItem = function() {
  console.log("Add...");
  console.log(inputField.value);
  //ceate a li
  var listItem = document.createElement("li");
  var label = document.createElement("label");
  label.innerText = inputField.value;
  listItem.appendChild(label);
  incompleteItems.appendChild(listItem);
  inputField.value = "";


}

addButton.addEventListener("click", addItem);
