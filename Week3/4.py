# Write a function that takes a number and prints a series of numbers that follow this pattern:
#
# If the number is even divide by 2
# Otherwise multiply the number by 3 and add 1
# Print the new number
# If the number equals 1 then terminate the function

#def if_then():
for n in range(10):
    if n % 2 == 0:
        print(n/2)
    else:
        print(sum(n*3 + 1)
