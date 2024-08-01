const firstName = prompt("Insira seu primeiro nome...")
const lastName = prompt("Insira seu último nome...")
const campoDeEstudo = prompt("Qual seu campo de estudo?")
const nascimento = prompt("Em que ano você nasceu?")

const idade = 2024 - nascimento

alert("Cliente cadastrado com sucesso!\n\n" +
    "Nome completo: " + firstName + " " + lastName + ".\n" +
    "Área de estudo: " + campoDeEstudo + ".\n" +
    "Idade: " + idade + " anos.")