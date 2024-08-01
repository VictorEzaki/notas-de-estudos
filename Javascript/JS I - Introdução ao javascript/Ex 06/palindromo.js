let palavra = prompt("Digite uma palavra para saber se ela é palíndromo: ")
let palindromo = ""

for (let i = palavra.length - 1 ; i >= 0 ; i--) {
    palindromo += palavra[i]
}

if (palavra === palindromo) {
    alert("A palavra " + palavra + " é sim um palíndromo.")
} else {
    alert(
        "A palavra " + palavra + " não é um palíndromo, como podemos ver abaixo.\n\n" + 
        palavra + "\n" + 
        palindromo)
}