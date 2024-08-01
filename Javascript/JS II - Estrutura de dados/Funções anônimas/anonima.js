// No javascript as funções podem ser atribuidas
// a variáveis como se elas fosse valores

function somar(a, b) {
    return a + b;
}

// console.log(somar(10, 5));

// Repare que não usamos os () ao lado do nome da função,
// porque ao fazer isso estaríamos executando a função
let operacao = somar;
// console.log(operacao(4, 9));

// Para isso, podemos usar as funções anônimas, que
// nada mais são do que funções que não possuem um nome
// const subtrair = function (a, b) {
//     return a - b;
// }

// console.log(subtrair(10, 5));

// Também podemos fazer com que essa variável receba diferentes funções
// Primeiro chamamos a variável com a função somar 
console.log(operacao(5, 5));
// Em seguida, conseguir atribuir outra função a esta variável
operacao = function (a, b) {
    return a * b;
}
console.log(operacao(4, 3));


// O QUE NÃO FAZER
// Funções anônimas só podem ser chamadas após a atribuição da variável,
// elas não são jogadas para o topo do arquivo como funções normais
olaMundo()
oiMundo()

function olaMundo() {
  console.log("Olá, mundo!")
}

const oiMundo = function () {
  console.log("Oi, mundo!")
}
