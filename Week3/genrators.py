def fib_gen():
    num = 0
    num2 = 1
    while True:
        fib = num + num2
        yield fib
        num, num2 = num2, num 

fibs = fib_gen()

for x in range(20):
    print(next(fibs))
