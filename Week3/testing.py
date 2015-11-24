'''
The main methods that we make use of in unit testing for Python are:

assert: base assert allowing you to write your own assertions
assertEqual(a, b): check a and b are equal
assertNotEqual(a, b): check a and b are not equal
assertIn(a, b): check that a is in the item b
assertNotIn(a, b): check that a is not in the item b
assertFalse(a): check that the value of a is False
assertTrue(a): check the value of a is True
assertIsInstance(a, TYPE): check that a is of type "TYPE"
assertRaises(ERROR, a, args): check that when a is called with args that it raises ERROR
'''

# TDD:
#
# 1. write a failing test
# 2. make the test pass
# 3. refactor
# 4. go to 1.
