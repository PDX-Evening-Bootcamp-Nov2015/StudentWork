# File I/O

 **Opening Files**

Call the built-in 'open' function, passing the path to the file (relative or absolute), the mode ((r)ead, (w)rite, (a)ppend, (b)inary, etc.), and the character encoding, if opening a text file.

```python
a_file = open('examples/foo.txt', 'r', encoding='utf-8')
```

Specifying the encoding for text is optional, but highly recommended. If encoding isn't given, it defaults to the platform dependent value of 'locale.getpreferredencoding(False)'.

_Why does this matter?_

"Bytes are bytes; characters are an abstraction." - Mark Pilgrim

### Character Encoding

Encoding is the way that computers translate from binary numbers into different _character sets_. In the 1960s, the US developed a system called [ASCII](https://en.wikipedia.org/wiki/ASCII), which became the standard encoding for English characters (originally for teletype machines), while other countries developed their own encoding systems for their own languages and character sets. These were all incompatible, which caused major problems as computers and the web became the dominant way of exchanging documents.
To remedy this, the _Unicode Consortium_ was formed to develop a compatible standard for all languages. While English characters encoded in ASCII fit into one byte each, characters in Unicode take more than one byte to encode. **In Python 3, strings are Unicode sequences**.

The web has more or less settled on **UTF-8** (Unicode Transformation Format) encoding for Unicode characters. UTF-8 maps Unicode to binary in a way that handles most any Unicode character. UTF-16 and UTF-32 are also used, but are less popular.

The big takeaway is that if you want to handle non-English characters, you should specify UTF-8. You can specify the character set for your HTML, CSS, and Python source code as well (not sure about JavaScript).

**Reading Files**

After opening the file, depending on the mode, you can either read or write it.

```python
# open the file for reading, you can only read from the file
foo = open('examples/foo.txt', 'r', encoding='utf-8')
# read one line from the file
print(foo.readline())
# read the next line
print(foo.readline())

foo.close()  # always close files when finished
```

Python's `.read()` method will return individual characters, or any number of characters.

```python
foo = open('examples/foo.txt', 'r', encoding='utf-8')
# one CHARACTER
print(foo.read(1))
# the next 10 characters
print(foo.read(10))
# the entire rest of the file
print(foo.read())
# reading beyond the end returns an empty string
print(foo.read())

foo.close()
```

Be careful when reading an entire file into memory. This could be an issue if the file is large. It's safer to read lines or characters as you need them.

**Writing Files**

If you try to write to a file you opened in 'r' mode, you'll get an error. To open a file for writing, use 'w':

```python
output = open('examples/output.txt', 'w', encoding='utf-8')
output.write('My hands are typing words.\n')
output.write('Haaaaaaaaaaaaaaaaands.\n')
output.close()
```

Note that 'w' overrides the previous content of the file, if any and will create the file if you reference a filename that doesn't exist. To preserve the original content of the file, use append mode 'a':

```python
output = open('examples/output.txt', 'a', encoding='utf-8')
output.write('This line is appended.\n')
```


**Sources:**

- http://www.diveintopython3.net/files.html
- http://www.pfinn.net/python-check-if-file-exists.html
- https://docs.python.org/3/tutorial/inputoutput.html
- https://docs.python.org/3/library/functions.html#open
- https://www.youtube.com/watch?v=MijmeoH9LT4
