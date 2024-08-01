function addPlayer() {
    const position = document.getElementById("position").value;
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;

    const confirmation = confirm("Escalar " + name + " com a camisa de número " + number + " como " + position)

    if (confirmation) {
        const teamSection = document.getElementById('team');

        const playerItem = document.createElement('li');
        playerItem.id = "Player-" + number;
        playerItem.innerText = "Posição: " + position + "\nNome: " + name + "\nNº: " + number;
        teamSection.appendChild(playerItem);
        teamSection.appendChild(document.createElement('br'));  
        document.getElementById('position').value = "";
        document.getElementById('name').value = "";
        document.getElementById('number').value = "";  
    }
}

function rmPlayer() {
    const number = document.getElementById('remove').value;
    const player = document.getElementById("Player-" + number);

    const confirmation = confirm('Deseja excluir o jogador de número ' + number + "?");

    if (confirmation) {
        document.getElementById('team').removeChild(player);
        document.getElementById('remove').value = "";
    }
}