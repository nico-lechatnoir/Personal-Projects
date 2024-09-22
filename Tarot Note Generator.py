import os
from pprint import pp

full_path = os.path.realpath(__file__)
localDir = os.path.dirname(full_path)
tPath = localDir + '/Tarot'
if not os.path.exists(tPath):
    os.makedirs(tPath)

# Minor 
SUITS = ["Wands", "Cups", "Swords", "Pentacles"]
NUMBERS = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Page", "Knight", "Queen", "King"]
# Major
MAJOR = {
    0 : "The Fool", 
    1 : "The Magician",
    2 : "The High Priestess",
    3 : "The Empress",
    4 : "The Emperor",
    5 : "The Hierophant",
    6 : "The Lovers",
    7 : "The Chariot",
    8 : "Strength",
    9 : "The Hermit",
    10 : "The Wheel of Fortune",
    11 : "Justice",
    12 : "The Hanged Man",
    13 : "Death",
    14 : "Temperance",
    15 : "The Devil",
    16 : "The Tower",
    17 : "The Star",
    18 : "The Moon",
    19 : "The Sun",
    20 : "Judgment",
    21 : "The World",
}

MINOR = {}
CARD = """---
created:
modified:
cssclasses: tarot-cards
title: {card}
aliases:
Image:
tags: tarot/{arcana}Arcana{tag}
---

# {card}
## Description

> Arcana:: {arcana}
> Tarot-Order:: {ord}
> Suit:: {suit}


## My Notes
### My Pulls

```dataview
LIST "Pull Type: " + pull-type
FROM #TarotPull and [[]]
SORT file.ctime
LIMIT 10
```
"""

def create_list():
    for s in SUITS:
        suit_list = []
        for n in NUMBERS:
            suit_list.append(n +" of " + s)
        MINOR.append(suit_list)
    print(MINOR)

def create_dic():
    for s in SUITS:
        suit_dic = {}
        num = 1
        for n in NUMBERS:
            suit_dic[num] = n +" of " + s
            num+=1
        MINOR[s] = suit_dic

def create_major_card():
    for i in range(len(MAJOR)):
        f_name = MAJOR.get(i) + ".md"
        newFile = os.path.join(tPath, f_name)
        num = 1
        with open(newFile, 'w+') as fp:
            fp.write(CARD.format(card = MAJOR.get(i), ord = num, arcana = "Major", suit="", tag=""))
            num += 1
            return "One Card Made"
    ##return "Major Cards Created"

def create_minor_card():
    for s in range(len(SUITS)):
        num = 1
        for n in range(len(NUMBERS)):
            f_name = MINOR[s][n] + ".md"
            newFile = os.path.join(tPath, f_name)
            with open(newFile, 'w+') as fp:
                fp.write(CARD.format(card = MINOR[s][n], ord = num,  arcana = "Minor", suit = SUITS[s], tag = "/" + SUITS[i]))
                num += 1
    return "Minor Cards Created"

#create_major_card()
##create_minor_card()


def create_all_cards():
    create_dic()
    for suit, card in MINOR.items():
        for ord in card:
            f_name = card[ord] + ".md"
            newFile = os.path.join(tPath, f_name)
            with open(newFile, 'w+') as fp:
                fp.write(CARD.format(card = card[ord], ord = ord,  arcana = "Minor", suit = suit, tag = "/" + suit))
    for ord, card in MAJOR.items():
        f_name = card + ".md"
        newFile = os.path.join(tPath, f_name)
        with open(newFile, 'w+') as fp:
            fp.write(CARD.format(card = card, ord = ord+1, arcana = "Major", suit="", tag=""))
create_all_cards()
