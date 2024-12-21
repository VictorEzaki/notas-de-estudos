const Property = require("./Property");

class Apartment extends Property {
    constructor(number, area, price) {
        super(area, price)
        this.number = number
    }

    getFloor() {
        const floor = this.number
        return floor.slice(0, -2)
    }
}

module.exports = Apartment