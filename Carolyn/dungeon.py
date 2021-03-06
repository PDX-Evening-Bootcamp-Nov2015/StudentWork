import random

CELLS = [(0, 2), (1, 2), (2, 2),
         (0, 1), (1, 1), (2, 1),
         (0, 0), (1, 0), (2, 0)]


def get_locations():
    monster = random.choice(CELLS)
    door = random.choice(CELLS)
    start = random.choice(CELLS)
    if monster == door or monster == start or door == start:
        return get_locations()
    else:
    #   print(monster, door, start)
        return monster, door, start

print(get_locations())
  # if monster, door, or start are the same, do it again

  # return monster, door, start


def move_player(player, move):
#   # Get the player's current location
    if move == 'LEFT':
        player = (player[0]-1, player[1])
    if move == 'RIGHT':
        player = (player[0]+1, player[1])
    if move == 'UP':
        player = (player[0], player[1]+1)
    if move == 'DOWN':
        player = (player[0], player[1]-1)
    return player

print(move_player((0, 0), 'DOWN'))
#   # If move is LEFT, y - 1
#   # If move is RIGHT, y + 1
#   # If move is UP, x - 1
#   # If move is DOWN, x + 1
#   return player
#
#
def get_moves(player):
    MOVES = ['LEFT', 'RIGHT', 'UP', 'DOWN']
    if player[0] == 0:
         MOVES.remove('LEFT')
    if player[1] == 0:
        MOVES.remove('DOWN')
    if player[0] == 2:
        MOVES.remove('RIGHT')
    if player[1] == 2:
        MOVES.remove('UP')
    return MOVES
player = (0,1)
print(get_moves(player))

#   # if player's y is 0, remove LEFT
#   # if player's x is 0, remove UP
#   # if player's y is 2, remove RIGHT
#   # if player's x is 2, remove DOWN
#   return MOVES
locations = get_locations()
player = locations[2]
monster = locations[0]
door = locations[1]
while True:
  MOVES = get_moves(player)
  print("Welcome to the dungeon!")
  print("You're currently in room {}".format(player))  # fill in with player position
  print("You can move {}".format(MOVES))  # fill in with available moves
  print("Enter QUIT to quit")

  move = input("> ")

  move = move.upper()
  player = move_player(player, move)

  if move == 'QUIT':
    break
  if player == monster:
      print('YOU LOSE!')
  if player == door:
      print('YOU WIN')
  if player[0] > 2:
      print('Invalid Move')
  if player[1] > 2:
      print('Invalid move')
  if player[1] >2 or player[1] <0:
      print(player)

#   # If it's a good move, change the player's position
#   # If it's a bad move, don't change anything
#   # If the new player position is the door, they win!
#   # If the new player position is the monster, they lose!
#   # Otherwise, continue
