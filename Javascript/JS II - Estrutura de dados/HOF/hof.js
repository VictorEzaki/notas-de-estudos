// Funções de alta-ordem, ou high-order functions, são funções que
// recebem outras funções como parâmetro e as executam em algum momento
function calcular(a, b, operacao) {
    console.log("Realizando uma operação");
    const resultado = operacao(a, b);
    return resultado;
}

// Repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estaríamos executando a função
function somar(x, y) {
    console.log("Realizando uma soma");
    return x + y;
}

calcular(9, 3, somar);
console.log(somar);
console.log(somar(2, 3));

// Também podemos escrever funções anônimas dentro da própria chamada da high-order function
console.log(calcular(9, 3, function(x, y){
    console.log("Realizando uma subtração");
    return x - y;
}))

// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks
// Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays
// Forma funcional
// function exibirElemento(elemento, indice, array) {
//     console.log({
//       elemento,
//       indice,
//       array
//     })
//   }
  
const lista = ["Maçã", "Banana", "Laranja", "Limão", "Uva"]

// for (let i = 0; i < lista.length; i ++) {
//     exibirElemento(elemento[i], i, lista)
// }

// Ao invés de usar o for (){}, podemos usar o forEach que é muito mais simples
// lista.forEach(exibirElemento)


// Também poderia ser feito através de uma função anônima
lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
})



const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

//-------------------------------------------------------------------------------------------------

// const nomes = []
// for (let i = 0; i < personagens.length; i++) {
//   const personagem = personagens[i]
//   nomes.push(personagem.nome)
// }

// // map: permite obter um novo array a partir de um array existenste
// const nomes = personagens.map(function (personagem) {
//   return personagem.nome
// })

//---------------------------------------------------------------------------------------------------

// const orcs = []
// for (let i = 0; i < personagens.length; i++) {
//   const personagem = personagens[i]
//   if (personagem.raca === "Orc") {
//     orcs.push(personagem)
//   }
// }

// // filter: permite obter um novo array contendo apenas elementos específicos de um array existente
// const orcs = personagens.filter(function (personagem) {
//   return personagem.raca === "Orc"
// })

//-------------------------------------------------------------------------------------------------

// let nivelTotal = 0
// for (let i = 0; i < personagens.length; i++) {
//   nivelTotal += personagens[i].nivel
// }
// // reduce: serve para reduzir um array existente a um valor final qualquer,
// // passando um valor entre cada iteração sobre esse array e retornando ele no final
// const nivelTotal = personagens.reduce(function (acumulador, personagem) {
//   return acumulador + personagem.nivel
// }, 0)

// const racas = personagens.reduce(function (acumulador, personagem) {
//   if (acumulador[personagem.raca]) {
//     acumulador[personagem.raca].push(personagem)
//   } else {
//     acumulador[personagem.raca] = [personagem]
//   }
//   return acumulador
// }, {})

//-------------------------------------------------------------------------------------------------

// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
personagens.sort(function (a, b) {
  return a.nivel - b.nivel // forma crescente
  // retunr b.nivel - a.nivel // forma descrescente
})