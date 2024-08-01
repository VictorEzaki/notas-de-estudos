const arr = ["Arroz", "Feijão", "Batata", "Frango", "Ovo"]

// Adiciona um valor a última posição
arr.push("Cenoura")

// Adiciona um valor a primeira posição
arr.unshift("Ketchup")

console.log(arr)

// Remove um valor da última posição e devolve ele
let ultimaposicao = arr.pop()
console.log(arr)
console.log(ultimaposicao)

// Remove um valor da primeira posição e devolve ele
ultimaposicao = arr.shift()
console.log(arr)
console.log(ultimaposicao)

// Verifica se existe uma posição com este valor
const inclui = arr.includes("Arroz")
console.log(inclui)

// Verifica se existe a posição e o valor 
const indice = arr.indexOf("Feijão")
console.log(indice)

// Cortar 
const hobbits = arr.slice(0, 5)
const invertido = arr.slice(-2)
console.log(hobbits)
console.log(invertido)

// Concatenar
const outros = hobbits.concat(invertido, "Mustang")
console.log(outros)

// substituição dos elementos
const elementosRemovidos = outros.splice(indice, 1, "Repolho", "Cebola", "Bolo")
console.log(elementosRemovidos)
console.log(outros)

// Podemos iterar os arrays
for (let i = 0; i < 10; i ++) {
    const iterar = outros[i]
    console.log(iterar + " Se encontra na posição " + i)
}