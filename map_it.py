# write a function (called double) that takes and integer n and returns twice
#the value of n


def double(n):
    return n*2
print(double(5))
# # Then write a function that takes a double and a list and returns a list
# # of each number doubled
#


list = [1,2,3]

def dbl(l):
    for x in l:
        return double(x)
    print(dbl(list))
