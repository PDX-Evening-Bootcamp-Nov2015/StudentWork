
/*global constructor for dice. I learned that you don't need parameters
if know what the initial state is. But if you do, it's okay*/
function Die(){
  this.value = 0;
  this.hold = false;
  //this is a method inside the constructor that displays the die image.
  this.display = function(whichDie){
    var placeDice = document.getElementById(whichDie);
    placeDice.innerHTML = "<img src='" + this.value + ".png'/>"
  }
  //this is a roll method. It only works if the dis is not held.
  this.valueDice = function(){
    if (this.hold == false){
    this.value = Math.floor((Math.random()* 6)+1);
  }
  }
  /*this is the method that holds a die. It only allows one die to be held at a time
  it takes in otherdie as the other dies hold boolean. It also makes sure the value is not
  6 */
  this.holdThis = function(otherDie) {
    if (!otherDie) {
    if (this.hold === true){
      this.hold = false;
      console.log(this.hold);
    } else {
      if (this.value != 6){
      this.hold = true;
      console.log(this.hold);
    }
    }
  }
}
}
/*This function (outside constructor), calls the valueDice (my roll method) displays both dice,
and controls the stages of the game. Its a good function.*/
function rollButton(){
  die1.valueDice();
  die2.valueDice();
  die1.display("die1");
  die2.display("die2");
  runGame();

}

//this round variable is necessary so we can change it with the runGame function.
var round = 1

// runGame does all kinds of cool stuff.
function runGame(){
  //it resets the if you have two angry dice and changes the h2 to message below
  //It also resets the hold state of the dice. Pretty much everything else here is self explanitory.
  // relic of debugging :console.log(die1.value == 3 && die2.value ==3);
  if (die1.value == 3 && die2.value ==3){
    document.getElementById('round').innerHTML = "Angry Dice; Back to Round One!";
    round = 1;
    die1.hold = false;
    die2.hold = false;
  } else {
    if (round === 1 && die1.value + die2.value === 3){
      document.getElementById('round').innerHTML = "Round Two";
      round = 2;
      die1.hold = false;
      die2.hold = false;
    } else if (round === 2 && die1.value + die2.value === 7) {
      document.getElementById('round').innerHTML = "Round Three";
      round = 3;
      die1.hold = false;
      die2.hold = false;
    } else if (round === 3 && die1.value + die2.value === 11) {
      document.getElementById('round').innerHTML = "You Win!";
  }
}}
//global listener loads event listeners when window is loaded. Here we also instantiate our two dice.
window.onload = function() {
  //instansiate two die
    die1 = new Die();
    die2 = new Die();
  //event listeners
  //listener for roll button
    document.getElementById("roll").addEventListener("click", function() {
    rollButton();
  });
  //event listener to hold die1
    document.getElementById("die1").addEventListener("click", function() {
    die1.holdThis(die2.hold);
  });
  //event listener to hold die2
    document.getElementById('die2').addEventListener("click", function() {
    die2.holdThis(die1.hold);
  });
};
