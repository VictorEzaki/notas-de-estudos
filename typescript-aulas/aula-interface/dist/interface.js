var sun;
sun.name = "Sol";
sun.mass = 1.989 * (Math.pow(10, 30));
sun.age = 4.506 * (Math.pow(10, 9));
sun.planets = [];
var MilkyWayPlanet = /** @class */ (function () {
    function MilkyWayPlanet(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    MilkyWayPlanet.prototype.createSatellite = function (name) {
        //..
    };
    return MilkyWayPlanet;
}());
