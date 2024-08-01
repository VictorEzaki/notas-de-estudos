let velocidade = 60

do {
    alert("Você está a " + velocidade + "km/h.")
    velocidade += 20
} while (velocidade < 100) {
    
}

alert(
    "Você ultrapassou o limite de velocidade.\n" + 
    "Velocidade final: " + velocidade + "km/h")