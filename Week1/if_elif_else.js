// import time          # includes a library named time
// import random        # a random library
//

// var name = ('Skip')
// console.log();

var answer_phone = function (name) {
    console.log("\ntesting, with name =", name);
    if ((name === 'Charles') || (name === 'Skip')) {
        console.log('I\'m "offline." Try later.');
    } else if (name === 'Oliver') {
        console.log('Howdy, glad you called!');
    } else {
        console.log('Hello! This is ', name);
    }
};

var test_answer_phone = function () {
    answer_phone('Skip');
    answer_phone('Charles');
    answer_phone('Akbar');
    answer_phone('Oliver');
};

test_answer_phone();


//     print ('Oliver Cromwell!?!')
//     time.sleep(1.0) // Ed says don't sleep.
//     print ('No?')
//     time.sleep(1.0)
//     print ('Meh.')
//
// else:
//     print ('Welcome,', name)
//     my_choice = random.choice(['rock', 'paper', 'scissors'])
//     print ('By the way, I choose', my_choice)
//     print ()
