const baralho = []
let escolha = ""

do {

    escolha = prompt(
        "O baralho está atualmente com " + baralho.length + " cartas.\n\n" +
        "Escolha uma ação: \n" + 
        "1)Adcionar uma carta\n" + 
        "2)Puxar uma carta\n" +
        "3)Sair")

    switch (escolha) {
        case "1" :
            baralho.push(prompt("Digite o a carta que deseja colocar: "))
            break

        case "2" :
            if (baralho.length === 0) {
                alert("Você não pode puxar uma carta com o baralho vazio.")
            } else {
                const cartaRetirada = baralho.pop()
                alert("Você puxou um " + cartaRetirada)
            }
            break

        case "3" :
            alert("Encerrando o programa...")
            break

        default :
            alert("Opção inválida!")
            break
    }

} while (escolha !== "3")