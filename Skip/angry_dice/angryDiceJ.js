// The functional skeleton of this "angryDice" javascript is as follows:
//      1.  create HTML with general layout for roll field, buttons
//             and display Divs for each playing area
//      2.  create "onclick" buttons
//      3.  create "roll" function that displays both the numbers of the 2 die
 //             and the correct die images that match them
//      4.  create constructors for the Player
//      5.  create a Stage One function environment
//      6.  create a Stage Two function environment
//             create a "start-over" function
//      7.  create a Stage Three function environment
//      8.  create a Hold function
//              install a parameter that prevents holding a six

// when the roll button is pressed, 2 dice will turn up
window.onload = function() {
    document.getElementById("roll").onclick = makeRoll;
};

var dice = {
    sides: 6,
    roll: function makeRoll() {
        var randomNumber = (Math.floor(Math.random() * this.sides) + 1);
        return randomNumber;



// // MAY USE THIS FUNCTION LATER
//         for (i=0; i<choice; i++) {
//             // ranNum produces the index to choose from our dice list
//             var ranNum = Math.floor((Math.random() * 5));
//             var fileName = dice[ranNum]
////////////////////////////////////////////////


//  this list holds the names of the images of die faces
var dieList = ["1.png", "2.png", "angry.png", "4.png", "5.png", "6.png"];

//  this list holds in place any
var holdBox = []

/* in STAGE 1:
if one and two display, move on to STAGE 2.
else, if one OR two display, hold one of them aside and roll until the other one
    shows up; then move on to STAGE 2*/


  /* in STAGE 2:
if four and three(AngryDie) show up, move on to STAGE 3.
else, if four and NOT three(AngryDie) show up, hold back the four and
    keep rolling one die until three(AngryDie) shows up and move to STAGE 3.
else, if NOT four and three(AngryDie) shows up, you can hold on to
    three(AngryDie), and keep rolling until a four shows up and move on to
    STAGE 3.  But if another three(AngryDie) shows up, you will have a total of
    2 - three's(AngryDice), and consequently must start back at STAGE 1.

   in STAGE 3:
if five and six show up in one roll; YOU WIN!!
else, if five OR six show up, hold onto the one of them and keep rolling until
    the other shows up; and then YOU WIN!!




*/
