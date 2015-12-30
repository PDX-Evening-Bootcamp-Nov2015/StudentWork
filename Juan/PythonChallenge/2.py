solvable = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj."

def replaceanator(str):
    count = 0
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    newstring = ""
    for i in str:
        if i in alphabet:
            newindex = alphabet.index(i) + 2
            if newindex == 26:
                newindex = 0
            elif newindex == 27:
                newindex = 1
            newletter = alphabet[newindex]
            newstring += newletter
        else:
            newstring += i
    return newstring

print(replaceanator(solvable))
print(replaceanator("map"))
