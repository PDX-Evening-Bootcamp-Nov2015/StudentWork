#make_game
#the object of this game is to build life
#using "input" method, the inputs get stored in a dict which update a textfile
#once the standard inputs are received, the User is given chance to make changes
#any changes are made to the stored information
#the User can check anytime what info is stored simply by asking


# print(data)
parts = {}
name = input("Welcome to Build Your Life.  Please type your first name. ")
#def info():
# # if name in parts.key():
parts['name']=name
# # else:
# #     parts['name']=input

print(parts)
parts['shelter'] = input("In what kind of shelter do you want to live? ")
print(parts)

stuff = input("What do you want in your {}? ".format(parts['shelter']))
print(parts)

parts['stuff']=stuff.split(",")
print(parts)
# opt1 = input("What qualities do you want in your {}? ".format(household))
# print(parts)

#take in the name and store it in a dictionary as a key



print (parts)

#convert to a string before saving to text

txt = open("life.txt", 'a')
data = txt.write(parts)
txt.close()
#
#
# life = {'name':'Skip'}
#
# print(life)
