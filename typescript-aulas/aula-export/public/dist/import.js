import * as _ from "lodash";
let xwing = {
    name: "X-Wing",
    pilot: "Luke Skywalker",
    speed: 2000,
    weapons: 20
};
console.log(_.camelCase(xwing.pilot));
