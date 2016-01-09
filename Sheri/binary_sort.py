numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

def binary_search(lisst, target):
    first = 0
    last = len(lisst) -1
    match = False
    midpoint = (first + last)//2

    while first == (last -1) and not match:
        midpoint = (first + last)//2
        print(first, last)

        if lisst[midpoint] == target:
            match = True
        else:
            if target < lisst[midpoint]:
                last = midpoint -1
            else:
                first = midpoint +1
    return midpoint

print(binary_search(numbers, 39))
