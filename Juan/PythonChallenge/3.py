def openread(filename):
    with open(filename, mode='r', encoding = 'utf-8') as f:
        text = f.read()
    chars = {}
    for i in text:
        try:
            chars[i] += 1
        except KeyError:
            chars[i] = 1
    print(chars)
    for i in chars:
        if chars[i] == 1:
            print(i)
    return None

openread('3.txt')
