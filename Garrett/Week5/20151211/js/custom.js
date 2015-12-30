window.onload = function() {
    document.getElementById("add_item").onclick = addItem;
};

/* 
 * 
 * -list that stores inventory
 * - material, price, stock 
 * - function to add to the list
 * - function to delete from the list
 * - function to add stock of an item
 * - function that removes stock of item
 * - 
 * 
 */

var inventory = [];

function makeInventoryItem(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;

};    

var addItem = function() {
    var name = document.getElementById('itemName').value;
    var price = document.getElementById('itemPrice').value;
    var stock = document.getElementById('itemStock').value;

    var new_item = new makeInventoryItem(name, price, stock);
    inventory.push(new_item);

    addRow(new_item);
};

var addRow = function (item) {
    
    var tableRef = document.getElementById('inventory');
    var rowCount = tableRef.rows.length;
    var newRow = tableRef.insertRow(rowCount);
 
    var newCell = newRow.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "checkbox";
    //element1.id = inventory.length + 1;
    newCell.appendChild(element1);
    
    var newCell01 = newRow.insertCell(1);
    newCell01.innerHTML = item.name;
    
    var newCell02 = newRow.insertCell(2);
    newCell02.innerHTML = item.price;
    
    var newCell03 = newRow.insertCell(3);
    if (item.stock === "True") {
        newCell03.innerHTML = "Yes";
        newCell03.setAttribute("class","true");   
    } else {
        newCell03.innerHTML = "Out";
        newCell03.setAttribute("class","false");   
    }
};

var delStock = function() {
    var table = document.getElementById('inventory');
    var rowCount = table.rows.length;
                                  
    for(var i=0; i<rowCount; i++) {
        var row = table.rows[i];
        
        if() {
            table.deleteRow(i);
            rowCount--;
            i--;
        }
    }
};    



/*
//var newText  = document.createTextNode('')
//newCell.appendChild(newText);

var delStock = function() {
    document.getElementById('inventory').deleteRow();
};

var addStock = function() {

};
*/
