interface CelestialBody {
    name: string;
    mass: number;
}

interface Planet extends CelestialBody {
    population: number;
    createSatellite: (name: string) => void;
}

interface Star extends CelestialBody {
    age: number;
    planets: Planet[];
}

let sun: Star;

sun.name = "Sol";
sun.mass = 1.989 * (10 ** 30);
sun.age = 4.506 * (10 ** 9);
sun.planets = [];

class MilkyWayPlanet implements Planet {
    name: string;
    mass: number;
    population: number;

    constructor(name: string, mass: number, population: number) {
        this.name = name
        this.mass = mass
        this.population = population
    }

    createSatellite (name: string) {
        //..
    }
}