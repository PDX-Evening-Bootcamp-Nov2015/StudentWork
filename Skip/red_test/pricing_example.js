

/* We're gonna need:
- list that stores inventory
    - material, price, in_stock
- need function that adds to list
- need function that removes from list
- need function that adds stock of an item
- need function that removes stock of an item
*/

//
// var marker = {
//     color: "maroon",
//     type: "dry erase",
//     ink_level: .5,
//     write: function(text) {
//         console.log(text);
//     }
// };
window.onload = function() {
    document.getElementById("add_item").onclick = addInventoryItem;
    document.getElementById("add_stock").onclick = addStock;
    document.getElementById("remove_stock").onclick = removeStock;
};
// 1 -deteremine which items are checked
// 2 - determine the index of those items
// update stock status of the those items
// update the displayed list


// determine which items are checked
// determine the index of those items
// update stock status of the checked items
// update the displayed list

function addStock() {
//  for(var puppy=0; puppy<8; puppy++)
//  this "var" declares the interator
var rws = document.getElementById("inventory").rows.length;

for(var i=0; i<rws; i++) {
    var checkbox = document.getElementById(i);
    if (checkbox.checked === true) {
        inventory[i].in_stock = true;

  }
}
updatelist();

}

function removeStock() {
    var rws = document.getElementById("inventory").rows.length;

    for(var i=0; i<rws; i++) {
        var checkbox = document.getElementById(i).checked;
        if (checkbox.checked === false) {
            inventory[i].in_stock = false;


    }
}
updatelist();
 }

var inventory = [];

 // constructor function for an inventory item

function makeInventoryItem(name, price, in_stock) {
    this.name = name;
    this.price = price;
    this.in_stock = in_stock;
 }
// adds inventory to list
 function addInventoryItem() {
     var name  = document.getElementById("name").value;
     var price = document.getElementById("price").value;
     var in_stock = document.getElementById("in_stock").checked;

    //  pass those
     var new_item = new makeInventoryItem(name, price, in_stock);

inventory.push(new_item);

document.getElementById("name").value = "";
document.getElementById("price").value = "";
document.getElementById("in_stock").value = "";

updatelist();

}

function updatelist() {
    // Rerender the HTML lsit with the current state of the  inventroy array
    // Empties the HTML inventory list
    document.getElementById("inventory").innerHTML = "";

    // Loops through the inventory array and adds each item to the HTML list

    for (var i=0; i< inventory.length; i++) {
        addRow(inventory[i], i);
    }
}
// create a function to adds a new row with each new
// item creation on the webpage
function addRow(new_item, index){
    //create an extension of original table that was born in HTML to
    // capture and reflect created new Item entries


    var table = document.getElementById("inventory");
    // creates new row for the table
    var row = table.insertRow(0);
    // create first cell in the new row
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    // creates the 2nd cell in the new row
    var cell3 = row.insertCell(2);
    // creates the 3rd cell (with its own functionality)
    var cell4 = row.insertCell(3);
    cell1.innerHTML ="<input type='checkbox' id='" + index + "' />"
    cell2.innerHTML = new_item.name;
    cell3.innerHTML = "$" + new_item.price;
    // cell3.innerHTML = new_item.in_stock;

    if (new_item.in_stock === true) {
    cell4.innerHTML = "Yes";
    cell4.className = "true";
}    else {
        cell4.innerHTML = "No";
        cell4.className = "false";
    }
 }
//

    //  create new inventory item object
/* list = [wood,corgi,hamster]

   list.unshift(new_thing)
   list.shift

   list.push(new_thing) - IN
   list.pull OUT
   */

    /*add new object to the inventory array
        get the text out of the inputs
        assign each input field's value to a variable
        pass those values to the object constructor
        */

    // Update inventory displayed on web page



// var wood = new makeInventoryItem("wood", 15, true);


 // make inventory to list
