import time          # includes a library named time
import random        # a random library


var name = input('Hi... what is your name? ')
console.log();

if name === 'Charles' or name == 'Skip':
    print ('I\'m "offline." Try later.')

elif name == 'Oliver':
    print ('Oliver Cromwell!?!')
    time.sleep(1.0)
    print ('No?')
    time.sleep(1.0)
    print ('Meh.')

else:
    print ('Welcome,', name)
    my_choice = random.choice(['rock', 'paper', 'scissors'])
    print ('By the way, I choose', my_choice)
    print ()
