import { Spaceship } from "./export";
import * as _ from "lodash";

interface BattleSpaceship extends Spaceship {
    weapons: number;
}

let xwing: BattleSpaceship = {
    name: "X-Wing",
    pilot: "Luke Skywalker",
    speed: 2000,
    weapons: 20
}

console.log(_.camelCase(xwing.pilot))