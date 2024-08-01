const nomeVeiculo1 = prompt("Insira o nome do primeiro veículo: ")
const velocidade1 = prompt("Insira a velocidade desse veículo: ")

const nomeVeiculo2 = prompt("Insira o nome do segundo veículo: ")
const velocidade2 = prompt("Insira a velocidade desse veículo: ")


if (velocidade1 > velocidade2) {
    alert("Resultado do veículo mais rápido:\n\n" + nomeVeiculo1 + " foi mais rápido que " + nomeVeiculo2 + ".")
} else if (velocidade2 > velocidade1) {
    alert("Resultado do veículo mais rápido:\n\n" + nomeVeiculo2 + " foi mais rápido que " + nomeVeiculo1 + ".")
} else {
    alert("Resultado do veículo mais rápido:\n\n" + "Ambos tiveram a mesma velocidade.")
}