const listaDeCompra = []

// listaDeCompra[0] = "Arroz"
// listaDeCompra[1] = "Feijão"
// listaDeCompra[2] = "Batata"
// listaDeCompra[3] = "Frango"


// Podemos dar valores a cada posição de um array através de uma estrutura de repetição
for (let i = 0 ; i < 5 ; i ++) {
    listaDeCompra[i] = prompt("Digite os itens da lista de compra: ")
}

console.log(listaDeCompra)