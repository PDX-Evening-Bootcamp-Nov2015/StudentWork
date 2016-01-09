# Binary search algorithm attempt

def binarySearch(searchlist, target):
    items = len(searchlist)
    minindex = 0
    maxindex = items - 1
    current = 0
    while searchlist[current] != target:
        if minindex > maxindex:
            return -1
        current = (minindex + maxindex) // 2
        if searchlist[current] < target:
            minindex = current + 1
        elif searchlist[current] > target:
            maxindex = current - 1
    return current

listy = [ x for x in range(1000001)]
listoid = [0,2,3,4,6,8,9,874,1000,10000,100000]
target = 874
print("Target found at index: " + str(binarySearch(listy, target)))
print("Target found at index: " + str(binarySearch(listoid, target)))
targete = 1000001
print("Target found at index: " + str(binarySearch(listy, targete)))
print("Target found at index: " + str(binarySearch(listoid, targete)))
targot = 1000000
print("Target found at index: " + str(binarySearch(listy, targot)))
print("Target found at index: " + str(binarySearch(listoid, targot)))
teargut = 0
print("Target found at index: " + str(binarySearch(listy, teargut)))
print("Target found at index: " + str(binarySearch(listoid, teargut)))
