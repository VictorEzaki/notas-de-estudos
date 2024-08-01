// Retorno é a saída da função

// O retorno é usado para armazenarmos a saída da função em uma variável
// Se não explicitarmos qual deve ser a saída da função, sua saída será undefined
function calcularMedia(a, b) {
    const media = (a + b) / 2
}

const resultado = calcularMedia(7, 5)
console.log(resultado)


// Para dizer qual é a saída de uma função usamos o return
function criarProduto(nome, preco) {
    const produto = {nome, preco, estoque: 1}
    return produto
}

// const notebook = criarProduto("lenovo 3i gaming", "R$ 3000")
// console.log(notebook)

// OU PODEMOS ABREVIAR O CÓDIGO ACIMA DA SEGUINTE FORMA
console.log(criarProduto("lenovo 3i gaming", "R$ 3000"))

// E o retorno não precisa ser uma variável,
// pode ser o resultado de qualquer expressão
function areaRetangular(base, altura) {
    return base * altura
}

console.log(areaRetangular(2, 4))

// OU ATÉ RETORNO DE OUTRA FUNÇÃO
function areaQuadrado(lado) {
    return areaRetangular(lado, lado)
}

console.log(areaQuadrado(2))


// Uma função só pode ter uma saída, depois do return nada é executado
// Repare que o VS Code nos avisa que nosso código não será executado
function ola() {
    let texto = "..."
    return texto
    texto = "Olá, mundo!"
    console.log(texto)
}

console.log(ola())



// No entanto, diferentes ramificações dentro
// da função podem ter diferentes retornos
function maiorIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

console.log(maiorIdade(20))
console.log(maiorIdade(17))