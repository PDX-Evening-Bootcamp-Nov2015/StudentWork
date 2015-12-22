window.onload = function() {
};
var diceOne = new CreateDice();
var dieOne = diceOne.numShowing;
var diceTwo = new CreateDice();
var dieTwo = diceTwo.numShowing;

var el = document.getElementById('Save_die_one');
  el.addEventListener('click', function(){
    SaveDie(dieOne);
  }, false);

var elem = document.getElementById('Save_die_two');
  elem.addEventListener('click', function(){
    SaveDie(dieTwo);
  }, false);

var ellie  = document.getElementById('ROLL');
  // ellie.addEventListener('click', function(){
  //   checkStages(diceOne, diceTwo);
  // }, false);
  ellie.addEventListener('click', function(){
    newRoll(diceOne, diceTwo);
  }, false);

var dice = ["1.png", "2.png", "angry.png", "4.png", "5.png", "6.png"]

function CreateDice() {
  this.numShowing = function(){
    rolledDice = []
      if(this.held === false) {
        for(var i=1; i>0; i--){
          var num = Math.random();
            num = Math.floor(num*5);
            num = num+0;
        rolledDice.push(dice[num]);
    }
    // console.log(rolled_dice[0]);
    return rolledDice[0];
  }
    else {
    }
  };
  this.held = false;
};

function SaveDie(die) {
  if(die === '6.png'){
    die.held = false;
  }
  else {
    die.held = true;
  };
};

function newRoll(diceOne, diceTwo) {
  if(diceOne.held === false){
    document.getElementById('dice_image_one').innerHTML='';
    var one = document.getElementById('dice_image_one');
    var dieimg = document.createElement('img');
    dieimg.src = diceOne.numShowing();
    one.appendChild(dieimg);
  }
  if(diceTwo.held === false) {
    document.getElementById('dice_image_two').innerHTML='';
    var two = document.getElementById('dice_image_two');
    var diceImage = document.createElement('img');
    diceImage.src = diceTwo.numShowing();
    two.appendChild(diceImage);
  }
    if(diceOne === "1.png" && diceTwo === "2.png" || diceOne === "2.png" && diceTwo === "1.png"){
      var blurb = document.createElement('P');
      var StageOne = document.createTextNode('Stage One COMPLETE!');
      blurb.appendChild(StageOne);
      document.getElementById('Stage').appendChild(blurb);
    }
    else{

    }
};

// function checkStages(diceOne, diceTwo) {
//   if(diceOne === "1.png" && diceTwo === "2.png" || diceOne === "2.png" && diceTwo === "1.png"){
//     var blurb = document.createElement('P');
//     var StageOne = document.createTextNode('Stage One COMPLETE!');
//     blurb.appendChild(StageOne);
//     document.getElementById('Stage').appendChild(blurb);
//   }
//   else{
//
//   }
//
// };
