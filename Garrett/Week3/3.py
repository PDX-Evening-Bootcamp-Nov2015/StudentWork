# Make function that takes a number and returns a two-dimensional array (i.e. a list of lists) or random
# numbers that are between 1 and n squared.  N should determine the size of the array and the limit on random.
# Example: make_2d(3) should return [[n, n2, n3], [n4, n5, n6], [n7, n8, n9]] where any n is 1 <= n <= 9 (3 squared)

import random

def make_2d(num):
    listone = []
    for x in range(num):
        templist = []
        for y in range(num):
            templist.append(random.randrange(1,(num**2)) )
        listone.append(templist)

    return listone

print (make_2d(3))
