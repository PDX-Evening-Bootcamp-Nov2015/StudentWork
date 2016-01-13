#! /usr/bin/env python3

###############################################################################
# OPENING FILES
# Call the built-in 'open' function, passing the path to the file (relative
# or absolute), the mode ((r)ead, (w)rite, (a)ppend, (b)inary, etc.), and the
# character encoding, if opening a text file.
# Specifying the encoding for text is optional, but highly recommended. If
# encoding isn't given, it defaults to the platform dependent value of
# 'locale.getpreferredencoding(False)'
###############################################################################

# open(<file path>, <mode>, <character encoding>)
numbers = open('examples/numbers.txt', 'r', encoding='utf-8')


print(numbers.readline())  # reads one line of the file
print(numbers.read())  # reads the rest of the file. WATCH FOR BIG FILES!

# files are iterable
for line in numbers:
    print("In the loop, line is:", line)

numbers.close()  # forgetting to close files consumes memory while the program is running

# print('------------------')

# context manager
with open('examples/numbers.txt', 'r', encoding='utf-8') as infile:

# print(infile)
#
# with open('examples/output.txt', 'w', encoding='utf-8') as outfile:
#     outfile.write('hello there')
#     outfile.write('This is Evan')
#
# print(outfile)
