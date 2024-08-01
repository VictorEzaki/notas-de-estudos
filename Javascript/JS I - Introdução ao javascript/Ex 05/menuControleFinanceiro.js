let emprestimo = 0
let opcao ;
let opcao2 ;

const usuario = prompt("Digite seu usuário:")
let saldo = parseFloat(prompt(
    "Olá " + usuario + " , seja bem vindo!\n" +
    "Faça seu primeiro depósito para ativar sua conta."))

do {

    opcao = prompt(
        "Seu saldo é de: R$" + saldo +
        "\n\n1)Depositar\n" +
        "2)Sacar\n" +
        "3)Empréstimo\n" +
        "4)Sair" 
    )

    switch (opcao) {
        case "1" :
            saldo += parseFloat(prompt("Digite o valor a ser depositado:"))
            break
        
        case "2" :
            saldo -= parseFloat(prompt("Digite o valor que deseja sacar:"))
            break

        case "3" :
            opcao2 = prompt(
                "1)Fazer empréstimo\n" + 
                "2)Pagar empréstimo\n" + 
                "3)Voltar ao menu principal"
            )
            switch (opcao2) {
                case "1" :
                    if (emprestimo === 0) {
                        emprestimo = parseFloat(prompt("Digite o valor de empréstimo desejado:"))
                        saldo += emprestimo
                    } else {
                        alert("No momento você não pode fazer um empréstimo, page o valor restante para que fique disponível.")
                    }
                    break

                case "2" :
                    if (emprestimo !== 0) {
                        emprestimo -= parseFloat(prompt(
                            "Valor a ser pago: R$" + emprestimo +
                            "\nDigite o valor que deseja pagar: "
                        ))
                    } else {
                        alert("Você não possui nenhum valor a ser pago.")
                    }
                    break

                case "3" :
                    alert("Voltando ao menu principal...")
                    break

                default :
                    alert("Opção inválida!")
                    break
            }
            break
        
        case "4" :
            alert("Finalizando o sistema...")
            break
        
        default :
            alert("Opção inválida!")
            break

    }

} while(opcao !== "4");