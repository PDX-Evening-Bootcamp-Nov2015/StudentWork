var addButton = document.getElementById('add-button'),
    inputField = document.getElementById('new-task'),
    toDoList = document.getElementById('incomplete-tasks');

var addItem = function () {
  var content = inputField.value,
      newLi = document.createElement('li'),
      label = document.createElement('label');
  if (!content) {
    return
  }
  label.innerText = content;
  newLi.appendChild(label);
  toDoList.appendChild(newLi);
  inputField.value = "";
};

addButton.addEventListener('click', addItem);
