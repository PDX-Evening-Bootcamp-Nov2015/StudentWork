window.onload = function() {
  document.getElementById("ROLL").onclick = rollDice;
  // document.getElementById('Save_die_one').onclick = Save_dice;
};

var dice = ["1.png", "2.png", "angry.png", "4.png", "5.png", "6.png"]

// function Save_die(){
//
// };

function rollDice(){
  rolled_dice = []
    for(var num_of_dice = 1; num_of_dice > 0; num_of_dice --) {
      var num = Math.random();
        num = Math.floor(num*5);
        num = num+0;
      rolled_dice.push(dice[num]);
    }
    printingDice(rolled_dice);
    // console.log(rolled_dice[0]);
};

function printingDice(rolled_dice){
  var die_one = rolled_dice[0];
  console.log(die_one);
    var die_img_one = document.getElementById('dice_image_one');
    // die_img_one.appendChild(die_one);
  var die_two = rolled_dice[1];
  console.log(die_two);
    var die_img_two = document.getElementById('dice_image_two');
    // die_img_two.appendChild(die_two)
  var sum_of_dice = (die_one + die_two)

  Stage_One(sum_of_dice);
  };

function Stage_One(sum_of_dice){
  if(sum_of_dice === 3 ){
    document.write('Stage One COMPLETE!')
  }
};

function Dice(FirstDice, SecondDice, Stage){
  this.FirstDice = die_one;
  this.SecondDice = die_two;
  this.Stage = Stage;
};
