# create a function that when provided with a triplet, returns the index of the numerical element that lies 
# between the other two elements.
#
# The input to the function will be an list of three distinct numbers.
#
# For example:
#
# gimme([2, 3, 1]) => 0
# 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
#
# Another example (just to make sure it is clear):
#
# gimme([5, 10, 14]) => 1
# 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

alist = [2,3,1]

def findmiddle(listone):

    originallist = listone[:]

    listone.sort()

    return originallist.index(listone[1])

print (findmiddle(alist))
