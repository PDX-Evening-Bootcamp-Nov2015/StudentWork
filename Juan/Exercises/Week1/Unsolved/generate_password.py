# Write a password generator in Python. Be creative with how you generate
# passwords - strong passwords have a mix of lowercase letters, uppercase letters,
# numbers, and symbols. The passwords should be random, generating a new password
# every time the user asks for a new password. Include your code in a main
# method.

import random

pchars = "1234567890qwertyuiopasdfghjklzxcvbnm!@#$%^&*()"
pchars = pchars + pchars.upper()

pleng = int(input("How long would you like your password? "))
print(''.join(random.sample(pchars, pleng)))
