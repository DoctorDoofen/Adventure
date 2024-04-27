const { Room } = require('../data/world-data');
const { Food } = require('./food');
const { Item } = require('./item');

class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;
      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    let item = this.currentRoom.getItemByName(itemName)
    if (item) {
      this.currentRoom.items.splice(this.currentRoom.items.indexOf(itemName), 1)
      this.items.push(item)
    }
    else console.log('This bitch empty\nkeep looking columbus')
  }

  dropItem(itemName) {
    let item = this.getItemByName(itemName)
    if (item) {
      console.log('here have a present')
      this.items.splice(this.items.indexOf(item), 1)
      this.currentRoom.items.push(item)
    }
  }

  eatItem(itemName) {
    let item = this.getItemByName(itemName) || null;
    if (item instanceof Food) {
      console.log(`You eat the ${itemName}.\nIt slaps`);
      this.items.splice(this.items.indexOf(item), 1)
    }
    if (!(itemName instanceof Food)) {
      console.log(`${itemName} is not edible dumbass`)
    }

  }

  getItemByName(name) {
    let validItem = this.items.filter((item) => item.name === name)
    if (validItem.length > 0) {
      return validItem[0]
    }
    else {
      console.log(`${name} is not in your inventory\nCry about it`)
    }
  }
}
module.exports = {
  Player
};
