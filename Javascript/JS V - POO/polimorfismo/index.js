class Vehicle {
    move() {
        console.log('O veículo está de se movendo')
    }
}

class Car extends Vehicle {
    move() {
        console.log('O Carro está se movendo')
    }
}

class Ship extends Vehicle {
    move() {
        console.log('O Navio está navegando')
    }
}

class Aircraft extends Vehicle {
    move(speed) {
        console.log(`A aeronave está voando a ${speed}KM/h`)
    }
}

const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()


// delorean.move()
// blackPearl.move()
// epoch.move(8000)

function start(vehicle) {
    console.log('Iniciando um veículo')
    vehicle.move()
}

start(delorean)
start(blackPearl)
start(epoch)