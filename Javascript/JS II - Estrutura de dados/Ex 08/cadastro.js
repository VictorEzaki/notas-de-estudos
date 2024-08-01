let escolha = ""
let imoveis = []

do {

    escolha = prompt(
        "Cadastro de imóveis: \n\n" +
        "Total de " + imoveis.length + " imóveis Cadastrados\n\n" +
        "Escolha uma ação: \n" +
        "1)Cadastrar um novo imóvel\n" +
        "2)Mostrar todos os imóveis\n" +
        "3)Sair"
    )

    switch (escolha) {
        case "1" :
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
            imovel.quartos = parseFloat(prompt("Quantos quartos possui o imóvel?"))
            imovel.banheiros = parseFloat(prompt("Quantos banheiros possui o imóvel?"))
            imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

            const confirma = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
             "\nPossui Garagem? " + imovel.garagem
            )

            if (confirma) {
                imoveis.push(imovel)
            }
            break
        
        case "2" :
            let cadastro = ""
            for (let i = 0; i < imoveis.length; i ++) {
                cadastro += "Imovel nº" + (i + 1) + "\nProprietário: " + imoveis[i].proprietario + "\n" 
                cadastro += "Quantidade de quartos: " + imoveis[i].quartos + "\n"
                cadastro += "Quantidade de banheiros: " + imoveis[i].banheiros + "\n"
                cadastro += "Possui garagem: " + imoveis[i].garagem + "\n\n"
            }
            alert(cadastro)
            break

        case "3" :
            alert("Encerrando...")
            break

        default :
            alert("Opção inválida!")
            break
    }

} while (escolha !== "3")