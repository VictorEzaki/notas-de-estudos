const turista = prompt("Qual o seu nome?")
let todasCidades = "Todas as cidades conhecidas por " + turista + ":\n"
let cidadesConhecidas = undefined
let contagem = 0
let resposta = prompt(turista + ", você já visitou alguma cidade? (s/n)")

while (resposta === "s") {
    contagem += 1
    cidadesConhecidas = prompt("Digite o nome da cidade que você visitou: ")
    resposta = prompt("Tem alguma outra cidade que ja visitou? (s/n)")
    todasCidades += "\n" + cidadesConhecidas
}

alert(turista + " conheceu um total de " + contagem + " cidades.\n" + todasCidades)