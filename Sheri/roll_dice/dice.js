
//make an event listener for when someone enters something in the field and clicks enter
window.onload = function() {
    document.getElementById('roll').onclick = how_many;
};
//global list to store the dice in:
var the_dice = []
//display's the dice by creating new HTML in the div
var displayDice = function() {
  //get's the #diceHere div
  var element = document.getElementById("diceHere");
  //loops through the_dice array and populates each element to the div
  for (var i = 0; i < the_dice.length; i++){
    //creates an html image element that matches our pngs
    var put_dice = "<img src='"+ the_dice[i] + ".png'/>";
    //adds the new HTML to the div
    element.innerHTML += put_dice;
  }
}
//function that randomizes die value. I learned this format first and prefer it.
var die_value = function(){
    value = Math.floor((Math.random()* 6)+1);
    //adds the new value to the the_dice array
    the_dice.push(value);
  };
/*function that resets the_dice array, empties the div and
populates array, then calls displayDice to dispaly HTML */
var how_many = function(){
  //empties the array
   the_dice = [];
   //empties the div
   document.getElementById('diceHere').innerHTML='';
   //gets the new value
   var die_num = document.getElementById("form").value;
   //calls the function that gives value to each dice
   for (var i = 0; i < die_num; i++) {
     die_value();
} //calls display function
    displayDice();
};
