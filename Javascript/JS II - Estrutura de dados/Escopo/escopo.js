// Escopo é o contexto onde a variável foi declarada podendo ser
// mais externo, ou mais interno (se estiver dentro de um bloco)

// Variáveis no escopo mais externo podem ser
// usadas dentro de escopos mais internos
let pokemon = "Charmander"

function evoluir() {
    pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

// Variáveis no escopo mais interno não podem ser
// usadas fora dele em escopos mais internos
function criarAnimal() {
    let animal = "gato"
}
// criarAnimal()
// console.log(animal)

// Apenas variáveis declaradas com var ficam
// disponíveis em um escopo mais externo
function avaliarNota(nota) {
    if (nota > 60) {
        var aprovado = true
        let situacao = "Aprovado"
    } else {
        var aprovado = false
        let situacao = "Reprovado"
    }
    console.log(nota)
    console.log(aprovado)
    console.log(situacao)
}

// avaliarNota()

// Mas mesmo o var não consegue "sair" para fora do escopo da função
function ola() {
    var texto = "Olá, mundo!"
}

// ola()
// console.log(texto) // Gera erro

// Apenas variáveis declaradas com var são carregadas
// sempre no começo do código, acima de todo o resto, independente da linha que ela se apresenta
console.log(nome)
console.log(sobreNome)

var nome = "Victor"
let sobreNome = "Ezaki"

console.log(nome)
console.log(sobreNome)