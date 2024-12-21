const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("7 de setembro", 99, 'centro', "São fidelis", 'RJ')
const victor = new Person("victor", addr)

console.log(victor)
console.log(victor.address.fullAddress())