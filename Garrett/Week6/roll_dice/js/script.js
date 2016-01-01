/* Garrett's Dice Game Table
 * Commited to master 12/30/2015
 */

document.getElementById("rolldice").addEventListener("click", rollDice);

var dicelist = [];

// Grabs the value in the text box and pass it on.
function rollDice () {
    //start a fresh table
    clearTable();
    
    //get the number of dice to roll and validate input.
    var dicecount = document.getElementById('num').value;
    if (isNaN(dicecount) || dicecount < 0) {
        alert("invalid entry, need a number");
        return;
    }
    console.log("Gonna Roll " + dicecount + " dice...");
    allDice(dicecount);

    //show the dice
    showTable();
};

// for every dice, roll it, and get the side, and add it to an array.
function allDice (numDice) {
    for (var i=0; i<numDice; i += 1) {
        var num = randomNum();
        dicelist.push(num);
    };

    console.log(dicelist);

};

// Generate a random number between 1 and 6 and return it.
function randomNum (){

    var rand = Math.random();
    rand = Math.floor(rand * 6);
    rand = rand + 1;
    console.log("Random number found! " + rand);
    return rand;
};

//Show the table!
function showTable () {
    // show the table
    document.getElementById('theTable').style.display = "flex";
    var theTable = document.getElementById('theTable');
   
    // for every item, create an image tag 
    for (var i=0; i<dicelist.length; i +=1) {
        var diceimg = document.createElement('img');
        dicenum = 'images/' + dicelist[i] + '.png'; 
        diceimg.setAttribute('src', dicenum);
        theTable.appendChild(diceimg);
    };
};

//Reset the table
function clearTable () {
    //clear the dice array
    dicelist = [];

    //clear the imgs from the page.
    document.getElementById('theTable').innerHTML = "";
};
