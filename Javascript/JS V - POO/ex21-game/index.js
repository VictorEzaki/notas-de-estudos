const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const arthur = new Mage('Arthur', 90, 4, 2, 14)
const morgan = new Thief('Morgan', 100, 22, 4)
const sonic = new Warrior('Sonic', 120, 4, 12, 4)

console.table({ arthur, morgan, sonic })

sonic.switchStance()
arthur.attack(sonic)
morgan.attack(arthur)
arthur.heal(arthur)

console.table({ arthur, morgan, sonic })

sonic.attack(morgan)

console.table({ arthur, morgan, sonic })
