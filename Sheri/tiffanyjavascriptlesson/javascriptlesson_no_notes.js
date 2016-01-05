
//?? a global event handler.
window.onload = function() {
    document.getElementById('add_button').onclick = addInventoryItem;
    document.getElementById('add').onclick = //write function addStock
    document.getElementById('remove').onclick = //write function removeStock
  } //normally youdon't use () because it will call the function instead of asssigning it

var inventory = [];

//this is a constructor function for an inventory item
function makeInventoryItem(name, price, in_stock) {
  this.name = name;
  this.price =price;
  this.in_stock = in_stock;
}

// add inventory to the list
function addInventoryItem() {
  var name = document.getElementById('name').value;
  var price = document.getElementById("price").value;
  var in_stock = document.getElementById("in_stock").checked;
  var newer_item = new makeInventoryItem(name, price, in_stock);
  inventory.push(newer_item);
  //console.log(inventory);
  //this clears out the field soyou don't have to
  document.getElementById('name').value ="";
  document.getElementById("price").value = "";
  document.getElementById("in_stock").checked = false;
  updateList();
}
//re-renders html list with the current state of the inventory array
function updateList() {
  //emmpties the HTML inventory list
document.getElementById('inventory').innerHTML = '';
  //loops throught the inventory array and adds each item to the html list
  for (var i = 0; i < inventory.length; i++){
    addRow(inventory[i], i);
  }
};

// adds the new item to the HTML page by adding a new row to the html
function addRow(newer_item, index){
  var table = document.getElementById("inventory");
  var row = table.insertRow(-1);
  row.id = index;
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
};

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
    if(document.getElementById(i).checked == false){
        inventory[i].in_stock = false;
    }
  }
  updateList();
};

//we want it to read: (check box) material Price In Stock

//add event listener for clicking on remove row
//remove last row from list
//deleteRow() deletes last row
