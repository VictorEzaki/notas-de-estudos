const fila = []
let escolha = 0

do {

    let pacientes = ""
    for (let i = 0; i < fila.length; i ++) {
        pacientes += (i + 1) + "º " + fila[i] + "\n"
    }

    escolha = prompt(
        "Fila de atendimento médico\n\n" +
        pacientes +
        "\n\n1)Novo paciente" +
        "\n2)Consultar paciente" +
        "\n3)Sair")

    switch (escolha) {
        case "1" :
            fila.push(prompt("Digite o nome do paciente: "))
            break
        case "2" :
            if (fila.length === 0) {
                alert("Não possui nenhum paciente na fila.")
            } else {
                alert("Paciente " + fila[0] + " removido.")
            }
            const pacientesConsultados = fila.shift()
            break

        case "3" :
            alert("Finalizando o sistema...")
            break

        default :
        alert("Opção inválida!")
        break
    }
} while (escolha !== "3");

