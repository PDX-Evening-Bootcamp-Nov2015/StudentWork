// create a variable call "dice" (= *.png)
// create eventListener (or onclick) for "roll" button
// create function that returns random types of dice related to
//      number in field
// create function that creates necessary rows to accommodate the
//      amount of dice to display

// math.random is built-in

 
window.onload = function() {
    document.getElementById("roll").onclick = makeRoll;
};

var dice = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
// var imageFolder = images/'' ;
// var imgsrc = imageFolder +'';

function makeRoll(roll) {
    // this.roll = roll;
var num = document.getElementById("dice");
// This is the number in the field representing how many dice
//  we want to roll
var choice = num.value;
// console.log(choice);
// a container for all the "dice" objects collecting from the
// for loop generated by the "choice" in the input roll field
var box = [];

for (i=0; i<choice; i++) {
    // ranNum produces the index to choose from our dice list
    var ranNum = Math.floor((Math.random() * 5));
    var fileName = dice[ranNum];
    box.push(fileName);


    // console.log(box);
    console.log(fileName);
}
    console.log(box);
updateList();
addRow(box, choice);
// for (var i=0; i < choice; i++) {
// }
// updateList();
// addCell(box);
 };

 function updateList() {
  document.getElementById("dice_spread").innerHTML = "";
 }

function addRow(box, numDice) {
    var table = document.getElementById("dice_spread");
    var row = table.insertRow();
    for(var i =0; i < numDice; i++) {
        if(i % 6 === 0) {
            var newRow = table.insertRow();
            var cell1 = row.insertCell();
            cell1.innerHTML = "<img  src=images/" + box[0]+">";
            box.splice(0, 1);
        }
        else {
            var cell1 = row.insertCell();
            cell1.innerHTML = "<img  src=images/" + box[0]+">";
            box.splice(0, 1);
        }
        // addCell(box);
    }
}
function addCell(box) {
// var row = document.getElementById("diceRow");
var cell1 = row.insertCell();
// var cell2 = row.insertCell();
// var cell3 = row.insertCell();
// var cell4 = row.insertCell();
// var cell5 = row.insertCell();
// var cell6 = row.insertCell();

console.log(cell1);
// cell2.innerHTML = "<img  src=images/" + box[1]+">";
// cell3.innerHTML = "<img  src=images/" + box[2]+">";
// cell4.innerHTML = "<img  src=images/" + box[3]+">";
// cell5.innerHTML = "<img  src=images/" + box[4]+">";
// cell6.innerHTML = "<img  src=images/" + box[5]+">";

};



//
// updateList()
// addrow(temp)
//     }
// };

// document.getElementById("submit").onclick = randomnumber;
// };
//
//
// //function that takes in number of dice requested upon submittal and spits out random numbers 1-6
// function randomnumber () {
// var dicenumber = document.getElementById("dicenumber").value;
// var dicelist = []
//
// for (var i=0; i < dicenumber; i++) {
// var rando = Math.random();
// rando = Math.floor(rando * 6);
// rando = rando + 1;
// dicelist.push(rando);
// }
// updateList()
// addrow(dicelist)
// };
//
// function updateList() {
// document.getElementById("Dice").innerHTML = "";
