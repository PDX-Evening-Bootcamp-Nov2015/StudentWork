/* We're gonna need:
  -list that stores our inventory
    - for each item
    - material
    -price
    -is it in stock
  -a function that adds to the list
  - a function that removes from the list
  - a function that adds stock
  - a function that removes stock of an item
  */

  // first thing: make an array that will store a list of objects for every item in our store
  //add event listener add it here because we want a window onload event
  //this is an anon button find it in dom by using its name we don't need getelementby

//?? a global event handler.
window.onload = function() {
    document.getElementById('add_button').onclick = addInventoryItem;
    document.getElementById('add').onclick = addStock;
    document.getElementById('remove').onclick = removeStock; //write function removeStock
  }; //normally youdon't use () because it will call the function instead of asssigning it
//?? an empty list to use later
var inventory = [];

//define our object definition by making a constructor
//this is a constructor function for an inventory item
//?? this is a constructor function we use for making an inventory item
  //each item in the list is created. similar to a class in Python
function makeInventoryItem(name, price, in_stock) {
  this.name = name;
  this.price =price;
  this.in_stock = in_stock;
}

// add inventory to the list
function addInventoryItem() {
  //create new Inventory object
  //get text out of the inputs
  //assign each input field's value to a variable
  //pass those valuse to the object constructor
  //??this ties into the HTML for each of the three td's
  var name = document.getElementById('name').value;
  var price = document.getElementById("price").value;
  var in_stock = document.getElementById("in_stock").checked;
  var newer_item = new makeInventoryItem(name, price, in_stock);
  //add new object to the inventory array
  inventory.push(newer_item);
  //console.log(inventory);

document.getElementById('name').value ="";
document.getElementById("price").value = "";
document.getElementById("in_stock").checked = false;

  updateList();
  // we're not using addRow(newer_item); any more, we need to call our new updateList function
  //update inventory displayed on web page

}

//make new function called updateList that re-renders html list with the current state of the inventory array
function updateList() {
  //emmpties the HTML inventory list
document.getElementById('inventory').innerHTML = "";
  //loops throught the inventory array and adds each item to the html list
  for (var i = 0; i < inventory.length; i++){
    addRow(inventory[i], i);
  }
};

//make a function that adds the newe item to the HTML page by adding a new row to the html
function addRow(newer_item, index){
  var table = document.getElementById("inventory");
  var row = table.insertRow(-1);
  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  var cell3 = row.insertCell(3);

//innerhtml contains all the htmlthat inside that element; we're changint the html to checkbox. it's in a string because html is a string to JavaScript
  cell0.innerHTML = "<input type = 'checkbox' id ='" + index + "'>";
  cell1.innerHTML = newer_item.name;
  cell2.innerHTML = newer_item.price;
  //these change the class name to tie in with the css so that the yes or no on the web page are green or red
  if (newer_item.in_stock == true) {
    cell3.innerHTML = "Yes"; cell3.className = "true";//set class to true
  } else {
    cell3.innerHTML ="No"; cell3.className ="false";
  }
//use later? document.getElementsByID('className').innerHTML = <input type - 'checkbox'>;
  // if cell3 is checked class === true,
  // else class === false
  // if cell3 is true set text to yes
  // else set text to no
//if check box is checked, set class of cell to true, set text value to yes. if unchecked, set class to false and text to false
};

//determine which items are checked
//determing the index of those items
//update stock status of the checked items
//update displayed lists

function addStock(){
  for (var i = 0; i < inventory.length; i++){
    if(document.getElementById(i).checked){
      inventory[i].in_stock = true; //update displayed list
    }
  }
  updateList();
};

function removeStock(){
  for (var i = 0; i < inventory.length; i++){
    if(document.getElementById(i).checked){
        inventory[i].in_stock = false;
    }
  }
  updateList();
};
//by adding a forth column
//we want it to read: (check box) material Price In Stock



//add event listener for clicking on remove row
//remove last row from list
//deleteRow() deletes last row
