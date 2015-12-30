window.onload = function() {
  document.getElementById("roll").onclick = rolledDice;
};

var dice = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"]


function rolledDice(){
    results = []
    var num_of_dice = document.getElementById('user_input').value;
    for(var num_of_dice; num_of_dice > 0; num_of_dice --) {
      var num = Math.random();
        num = Math.floor(num*5);
        num = num+0;
        results.push(dice[num]);
      // console.log(results);
      // printingDice(results);
    }
    console.log(results);
    document.getElementById('result_dice').innerHTML = "";
    printingDice(results);
};

function printingDice(dice){
  var result = document.getElementById('result_dice');
  for(var results=dice.length; results > 0; results --) {
    console.log(results);
    var diceimg = document.createElement('img');
    var dicenum = dice[results-1];
    diceimg.setAttribute('src', dicenum);
    result.appendChild(diceimg);
    console.log('printing' + dicenum);
  }
  // console.log('printing' + dicenum);
};
