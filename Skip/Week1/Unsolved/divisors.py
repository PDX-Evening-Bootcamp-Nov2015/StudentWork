# Create a program that asks the user for a number and then prints out a list
# of all the divisors of that number. (If you don’t know what a divisor is, it
# is a number that divides evenly into another number. For example, 13 is a
# divisor of 26 because 26 / 13 has no remainder.)

# Remember you can generate a list using range(start, stop)
# range(2,10) == [2,3,4,5,6,7,8,9,10]
newlist = []
faillist = []
user =  int(input('Give me a number: '))

for num in range(1, (user + 1)):
    if user%num == 0:
        newlist.append(num)
    else:
        faillist.append(num)
print(newlist)
