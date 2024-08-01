let valor1 = prompt("Insira o primeiro valor...");
let valor2 = prompt("Insira o segundo valor...");

valor1 = parseFloat(valor1);
valor2 = parseFloat(valor2);

const soma = valor1 + valor2;
const sub = valor1 - valor2;
const mult = valor1 * valor2;
const div = valor1 / valor2;

alert("Resultados: \n" + 
    "\nSoma: " + valor1 + " + " + valor2 + " = " + soma + "\n" + 
    "Subtração: " + valor1 + " - " + valor2 + " = " + sub + "\n" + 
    "Multiplicação: " + valor1 + " x " + valor2 + " = " + mult + "\n" + 
    "Divisão: " + valor1 + " / " + valor2 + " = " + div);