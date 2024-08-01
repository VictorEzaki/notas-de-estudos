let op = "";
let ListaVagas = [];
let ListaCandidatos = [];

do 
{
    op = prompt(
        "----------------- Menu -----------------" +
        "\n[1]Listar vagas disponíveis" +
        "\n[2]Criar uma nova vaga" +
        "\n[3]Visualizar uma vaga" +
        "\n[4]Inscrever um candidato em uma vaga" +
        "\n[5]Excluir uma vaga" +
        "\n[6]Sair" +
        "\n----------------------------------------"
    )

    switch (op) {
        case "1":
            alert(ListarVagas());
            break;
        
        case "2":
            CriarVaga();
            break;

        case "3":
            VisualizarVaga();
            break;
        
        case "4":
            InscreverCand();
            break;
        
        case "5":
            ExcluirVaga();
            break;

        case "6":
            alert("Saindo...");
            break;

        default:
            alert("Opção inválida!");
            break;
    }
} while (op !== "6");

function CriarVaga() 
{
    const vaga = {};

    vaga.Nome = prompt("Digite o nome da vaga: ");
    vaga.Desc = prompt("Digite uma descrição sobre a vaga: ");
    vaga.DtLimit = prompt("Qual a data limite? (dd/mm/aaaa)");
    
    let confirmar = confirm(
        `Deseja salvar a vaga? 
    Vaga: ${vaga.Nome} 
    Descrição: ${vaga.Desc}
    Data limite: ${vaga.DtLimit}`
    );

    if (confirmar == true) {
        ListaVagas.push(vaga);
    }
}

function InscreverCand() {
    const candidato = {};
    const vagas = ListarVagas();


    candidato.Nome = prompt("Digite o nome do candidato: ");
    candidato.Indice = parseInt(prompt(`${vagas} \nDigite o indice da vaga que está se candidatando: `))-1;
    
    confirmar = confirm(
        `Deseja salvar o candidato ${candidato.Nome} na vaga:
    Nome: ${ListaVagas[candidato.Indice].Nome}
    Descrição: ${ListaVagas[candidato.Indice].Desc}
    Data Limite: ${ListaVagas[candidato.Indice].DtLimit}`
    );

    if (confirmar == true) {
        ListaCandidatos.push(candidato);
    }
}

function ListarVagas()
{
    let candidatosInsc;
    let AllVagas = `----------- Lista de Vagas -----------\n`;
    ListaVagas.forEach(vaga => {
        candidatosInsc = 0;
        for (let i = 0; i < ListaCandidatos.length; i ++){
            if (ListaCandidatos[i].Indice == ListaVagas.indexOf(vaga)) {
                candidatosInsc ++;
            }
        }
        
        AllVagas += `${ListaVagas.indexOf(vaga) + 1} - ${vaga.Nome} | ${candidatosInsc} candidatos inscritos\n`;
    });
    AllVagas += `\n---------------------------------------`;

    return AllVagas;
}

function VisualizarVaga() {
    const vagas = ListarVagas();
    let indice = parseInt(prompt(`${vagas} \nDigite o indice da vaga que deseja visualizar: `)) -1;

    alert(`Nome: ${ListaVagas[indice].Nome}
    Descrição: ${ListaVagas[indice].Desc}
    Data Limite: ${ListaVagas[indice].DtLimit}`
    );
}

function ExcluirVaga() {
    const vagas = ListarVagas();
    let indice = parseInt(prompt(`${vagas}\nDigite o indice da vaga que deseja deletar: `)) - 1;

    confirmar = confirm(`Tem certeza que deseja remover a vaga:
    Nome: ${ListaVagas[indice].Nome}
    Descrição: ${ListaVagas[indice].Desc}
    Data limite: ${ListaVagas[indice].DtLimit}`);

    const vagaDel = confirmar == true ? ListaVagas.splice(indice): alert("Opção inválida");
}