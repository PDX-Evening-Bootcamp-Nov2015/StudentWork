from functools import partial

xs = [1,2,3,4]
ys = [10,15,3,22]

def make_tup(x, y):
    return (x, y)

def add(x, y):
    return x + y

def tup_list(lst, length):
    return map(partial(make_tup, y=length), lst)

def repeater(tup):
    return [tup[0]] * tup[1]

def is_gtr_25(tup):
    return tup[0] * tup[1] > 25

def dup_elms(lst, length):
    return reduce(add, map(repeater, tup_list(lst, length)))

def combine(lst, lst2):
    return map(None, lst * len(lst2), dup_elms(lst2, len(lst)))

def bigmults(lst, lst2):
    return filter(is_gtr_25, combine(lst, lst2))

print (bigmults(xs, ys))


# This could also be written as:

bigmuls = lambda xs,ys: filter(lambda (x,y):x*y > 25, combines(xs,ys))
combines = lambda xs,ys: map(None, xs*len(ys), dupelms(ys,len(xs)))
dupelms = lambda lst,n: reduce(lambda s,t:s+t, map(lambda l,n=n: [l]*n, lst))

print bigmuls(xs, ys)














# print [(x,y) for x in xs for y in ys if x*y > 25]
