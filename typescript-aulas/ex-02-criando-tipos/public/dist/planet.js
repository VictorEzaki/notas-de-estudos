const planets = [];
function addPlanet(name, cords, status) {
    planets.push({
        name,
        cords,
        status,
        satelites: []
    });
    alert(`O planet ${name} foi registrado com sucesso!`);
}
function findPlanet(name) {
    const planet = planets.find(planet => planet.name === name);
    return planet !== null && planet !== void 0 ? planet : false;
}
function updateStatus(status, planet) {
    planet.status = status;
    alert(`O status do planeta ${planet.name} foi atualizada para ${status}`);
}
function addSatelite(name, planet) {
    planet.satelites.push(name);
    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}`);
}
function removeSatelite(name, planet) {
    planet.satelites = planet.satelites.filter(satelite => satelite !== name);
    alert(`O satélite ${name} foi removido do planeta ${planet.name}`);
}
function promptValidStatus() {
    let Status;
    let validStatus = false;
    while (!validStatus) {
        const StatusInput = prompt('Informe a situação do planeta?\n1 - Habitado\n2 - Habitável\n3 - Inabitável\n4 - Inexplorado');
        switch (StatusInput) {
            case '1':
                Status = 'Habitado';
                validStatus = true;
                break;
            case '2':
                Status = 'Habitável';
                validStatus = true;
                break;
            case '3':
                Status = 'Inabitável';
                validStatus = true;
                break;
            case '4':
                Status = 'Inexplorado';
                validStatus = true;
                break;
            default:
                alert('Situação inválida!');
                break;
        }
    }
    return Status;
}
function promptValidPlanet(callback) {
    const planetName = prompt("Informe o nome do planeta:");
    const planet = findPlanet(planetName);
    if (planet) {
        callback(planet);
    }
    else {
        alert("Planeta não encontrado, retornando ao menu...");
    }
}
// Opções do Menu
function firstMenuOption() {
    const name = prompt('Informe o nome do planeta:');
    const coordinateA = Number(prompt('Informe a primeira coordenada:'));
    const coordinateB = Number(prompt('Informe a segunda coordenada:'));
    const coordinateC = Number(prompt('Informe a terceira coordenada:'));
    const coordinateD = Number(prompt('Informe a quarta coordenada:'));
    // Aqui a nossa função ajuda a ter um código mais organizado
    const status = promptValidStatus();
    const confirmation = confirm(`Confirma o registro do planeta ${name}?
    Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
    Situação: ${status}`);
    if (confirmation) {
        addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], status);
    }
}
// Nessas três funções vemos como a nossa função de callback
// proporciona uma facilidade enorme na implementação
function secondMenuOption() {
    // Além disso temos acesso automático às informações
    // dos argumentos, nesse caso a variável planet
    promptValidPlanet(planet => {
        const status = promptValidStatus();
        updateStatus(status, planet);
    });
}
function thirdMenuOption() {
    promptValidPlanet(planet => {
        const satellite = prompt('Informe o nome do satélite a ser adicionado:');
        addSatelite(satellite, planet);
    });
}
function fourthMenuOption() {
    promptValidPlanet(planet => {
        const satellite = prompt('Informe o nome do satélite a ser removido:');
        removeSatelite(satellite, planet);
    });
}
function fifthMenuOption() {
    let list = 'Planetas:\n';
    planets.forEach(planet => {
        // Repare que as tuplas são uma forma fácil de permitir a
        // desestruturação com qualquer nome nas variáveis.
        // As variáveis a seguir podem ter qualquer nome pois a
        // tupla segue um padrão fixo.
        const [a, b, c, d] = planet.cords;
        list += `
        Nome: ${planet.name}
        Coordenadas: (${a}, ${b}, ${c}, ${d})
        Situação: ${planet.status}
        Satélites: ${planet.satelites.length}
      `;
        planet.satelites.forEach(satellite => {
            list += `    - ${satellite}\n`;
        });
    });
    alert(list);
}
// Menu
let userOption = 0;
while (userOption !== 6) {
    const menu = `Menu
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
  `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            fifthMenuOption();
            break;
        case 6:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
