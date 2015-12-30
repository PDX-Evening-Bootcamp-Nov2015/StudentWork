/* I will need:
- An event listener to detect a button click
- A function that generates an array of random numbers
- A function that creates an html element for each random number

*/

// input validator
function validator(num_rolls) {
  // check to make sure input can be interpreted as a positive integer
  if (parseInt(num_rolls) > 0) {
    // everything is OK
    return(false);
  } else {
    alert('Please enter a postive number.');
    return(true);
  }
}

// random number generator, one roll
function gen_roll() {
  var roll = Math.floor(Math.random() * 6) + 1;
  return(roll);
}

// number array generator
function gen_array(num_rolls) {
  // initialize empty array
  var rolls = [],
      i;
  // roll once for each time we've been asked to roll
  for (i = 0; i < num_rolls; i++) {
    rolls.push(gen_roll());
  }
  // return array of all rolls
  return(rolls);
}

// generate html elements based on an array
function gen_elements(rolls) {
  // initialize variables for use in loop
  var i,
      // cache dice area for use in function
      dice_area = document.getElementById('dice_area');
  // clear the roll area to make way for new dice
  dice_area.innerHTML = "";
  // loop through roll array
  for(i = 0; i < rolls.length; i++) {
    // create a div containing nothing
    var newdiv = document.createElement('div');
    newdiv.classList.add('die');
    // create an image for the corresponding number
    var newimg = document.createElement('img');
    newimg.src = rolls[i] + '.png';
    // add image to div
    newdiv.appendChild(newimg);
    // add div to .dice_area div
    dice_area.appendChild(newdiv);
  }
}

// event handler for click on "roll" button
function roll_it(event) {
  // initialize variables!
  var roll_results,
      // pull required number of rolls from the document, convert to int
      num_rolls = parseInt(document.getElementById('num_dice').value);
  // check to make sure input is valid
  if (validator(num_rolls)) {
    return;
  }
  // pass those rolls to the roller function and save result
  roll_results = gen_array(num_rolls);
  // pass roll results to the element generator function
  gen_elements(roll_results);
}

// BEHOLD THE GREAT AND POWERFUL EVENT LISTENER
window.onload = function () {
  document.getElementById('roll').onclick = roll_it;
};
