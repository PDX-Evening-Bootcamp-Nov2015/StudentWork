# # Given a string which may include opening or closing round brackets, write a
# #function to determine
# # whether the string contains a balanced pair(s) of round brackets, that is
# #there are no brackets
# # which are either opened & not closed, or vice versa. Opening round brackets
# # always have to come
# # before closing bracket. An empty string is balanced.#

def isBalanced(expr):
    if len(expr)%2!=0:
        return False
    #else:
        #return True
    opening=set('([{')
    match=set([ ('(',')'), ('[',']'), ('{','}') ])
    stack=[]
    for char in expr:
        if char in opening:
            stack.append(char)
        else:
            if len(stack)==0:
                return False
            lastOpen=stack.pop()
            if (lastOpen, char) not in match:
                return False

            return len(stack)==0

print(isBalanced('who )are you'))

assert isBalanced("hi)(") == False
#assert isBalanced("hi(hi)") == True
assert isBalanced("(") == False
