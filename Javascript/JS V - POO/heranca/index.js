const Apartment = require("./Apartment");
const House = require("./House");
const Property = require("./Property");

const someProperty = new Property(200, 10000)
const someHouse = new House(220, 20000)
const apt = new Apartment('302', 200, 30000)

console.log(someProperty)
console.log(someProperty.getPricePerMet())
console.log(someHouse)
console.log(someHouse.getPricePerMet())
console.log(apt)
console.log(apt.getFloor())
console.log(apt.getPricePerMet())