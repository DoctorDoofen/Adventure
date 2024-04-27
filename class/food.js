const { Item } = require('./item')

class Food extends Item {
    constructor(name, description, room, isFood) {
        super(name, description);
        this.isFood = isFood
        this.room = room
    }

}

module.exports = {
    Food
}
