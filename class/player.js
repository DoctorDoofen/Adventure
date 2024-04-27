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
      for (let i = 0 ; i < this.items.length ; i++) {
          console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    this.items.push(itemName)
    Room.items.splice(Room.items.indexOf(itemName), 1)
  }

  dropItem(itemName) {
    Room.items.push(itemNAme);
    this.items.splice(this.items.indexOf(itemName), 1)
  }

  eatItem(itemName) {
    if (itemName instanceof Food) {
      console.log(`You eat the ${itemName}. \n It slaps`);
      this.items.splice(this.items.indexOf(itemName), 1)
    }
  }

  getItemByName(name) {
    if (this.items.includes(name)) {
      return Item.description
    } return 'Item not in inventory, broke-ass'

  }
}

module.exports = {
  Player
};
