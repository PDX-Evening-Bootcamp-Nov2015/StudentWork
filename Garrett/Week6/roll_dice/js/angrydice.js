document.getElementById("freshgame").addEventListener("click", showTable);
document.getElementById("rolldice").addEventListener("click", playGame);
    
var dieone = new die(0, 0, false);
var dietwo = new die(1, 0, false);
var stage = 0;

//generate a die object
function die(num, value, saved) {
    this.dienum = num
    this.value = value;
    this.saved = saved;
    this.filename = "angry.png";
    this.roll = rollDice;
};

function playGame (){
    //read the checkboxs and updated the saved state
    dieone.saved = document.getElementById('dice1').checked; 
    dietwo.saved = document.getElementById('dice2').checked;
    
    //roll the dice
    dieone.roll();
    dietwo.roll();
    
    //check the game state
    checkStage();
};

//generate a random number 1-6 and then update the filename.
function rollDice() {
    //if try to save a six, don't let them.
    if (this.value === 6 && this.saved === true){
        console.log("Can't save a 6!");
        this.saved = false;
    };
    // if not saved, roll the dice
    if (this.saved === false) {
        var rand = Math.random();
        rand = Math.floor(rand * 6);
        rand = rand + 1;
        console.log("Random number found! " + rand);
        this.value = rand;
        // if the dice is a "3", change to angry dice
        if (rand === 3) {
            this.filename = "angry.png";
        } else {
            this.filename = rand + ".png";
        };
    };
    //update the image src tag with the new filename based on the roll
    var diceimg = document.getElementById(this.dienum);
    dicenum = 'images/' + this.filename; 
    diceimg.setAttribute('src', dicenum);
};

//show the table initially.    
function showTable () {
    document.getElementById('theTable').style.display = "flex";
    document.getElementById('rules').style.display = "none";
};

function checkStage (){
    //check to see if angry dice!
    if (dieone.value === dietwo.value && dieone.value === 3) {
        stage = 0;
        alert ('You made the dice angry! Starting over at stage 0!');
    }; 
    // check stage values
    switch (stage){
        case 0:
            if (dieone.value + dietwo.value === 3) {
                stage = 1;
            };
            break;
        case 1:
            if (dieone.value === 4 && dietwo.value === 3){
                stage = 2;
            } else if (dieone.value === 3 && dietwo.value === 4){
                stage = 2;
            };
            break;
        case 2:
            if (dieone.value + dietwo.value === 11) {
                stage = 3;
                alert ('You win! Start a new game to play again!');
            };
            break;
    };
    
    document.getElementById("stageLabel").innerHTML = "Current Stage " + stage;
};
