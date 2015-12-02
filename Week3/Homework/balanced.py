# # Given a string which may include opening or closing round brackets, write a
# #function to determine
# # whether the string contains a balanced pair(s) of round brackets, that is
# #there are no brackets
# # which are either opened & not closed, or vice versa. Opening round brackets
# # always have to come
# # before closing bracket. An empty string is balanced.
# #
# # isBalanced("hi)(") == False
# # isBalanced("hi(hi)") == True
# # isBalanced("(") == False
#
# def isBalanced(expr):
#     if len(expr)%2!=0:
#         return False
#     #else:
#         #return True
#     opening=set('([{')
#     match=set([ ('(',')'), ('[',']'), ('{','}') ])
#     stack=[]
#     for char in expr:
#         if char in opening:
#             stack.append(char)
#         else:
#             if len(stack)==0:
#                 return False
#             lastOpen=stack.pop()
#             if (lastOpen, char) not in match:
#                 return False
#
#     return len(stack)==0
#
# print(isBalanced('who are you'))
#
# def test_balanced_parantheses(string_to_check):
#
#     if len(string_to_check) % 2 != 0:
#
#         return False
#
#         pairs = {
#
#         "}": "{",
#
#         "]": "[",
#
#         ")": "(",
#
#         }
#
#         openers = []
#
# for s in string_to_check:
#
#     if s in pairs.values():
#
#         openers.append(s)
#
#     elif not pairs.has_key(s):
#
#         return False  #not valid char
#
#     elif pairs[s] == openers[-1]:
#
#         openers.pop()
#
#         return len(openers) == 0
#
# print(test_balanced_parantheses('who are you'))



#include <stdio.h>
#include <stdlib.h>
typedef struct stack stack;
struct stack {
    char brace ;
    stack * next ;
} *top = NULL ;

void push ( char val )
{
    stack * ptr = (stack *) malloc(sizeof(stack)) ;
    ptr -> brace = val ;
    ptr -> next = top ;
    top = ptr ;
}

char pop ()
{
    stack * ptr ;
    char ch ;
    ptr = top ;
    ch = top -> brace ;
    top = top -> next ;
    free (ptr) ;
    return ch ;
}

char close(char ch)
{
    if(ch==']')
        return '[' ;
    if(ch=='}')
        return '{' ;
    if(ch==')')
        return '(' ;
    return ' ' ;
}
int check_order (char * str)
{
    int i , len = 0 ;
    for(i=0;str[i]!='\0';i++)
        len++ ;
    if(len&1)  // if string length is odd
        return 0 ;
    for(i=0;i<len;i++)
    {
        if(str[i]=='[' || str[i]=='{' || str[i]=='(')
            push(str[i]);
        else {
            if(pop() != close(str[i]))
                return 0 ;
        }
    }
    return 1 ;
}
int main()
{
    char str[100] ;
    printf("Enter the string expression: ");
    scanf("%s",str);
    printf("The expression you entered is: %s .\n",str);
    if( check_order(str) )
        printf("Right Order");
    else printf("Wrong Order");
    return 0;
}

The above code can be modified to accept all strings that include parenthesis, such as

                                       [{(2+3)}](4*5)[{}]

by adding one more if condition to ignore characters other than any of the braces.
#assert isBalanced("hi")(") == False
#assert isBalanced("hi(hi)") == True
#
#assert isBalanced("(") == False
