const personagemAtaque = prompt("Digite o nome do seu personagem de ataque: ")
const poderAtaque = parseFloat(prompt("Digite o poder de ataque do seu personagem: "))

const personagemDefesa = prompt("Digite o nome do seu personagem de defesa: ")
const poderDefesa = parseFloat(prompt("Digite o poder de defesa do seu personagem: "))
const pontoDeVida = parseFloat(prompt("Digite o quanto de vida seu personagem terá: "))
const escudo = prompt("Seu personagem possui um escudo? (Sim/Não)")

let danoAtaque = 0

if (poderAtaque > poderDefesa && escudo === "não") {
    danoAtaque = poderAtaque - poderDefesa
    alert("Você causou " + danoAtaque + " de dano.")
} else if (poderAtaque > poderDefesa && escudo === "sim") {
    danoAtaque = (poderAtaque - poderDefesa) / 2
    alert("Você causou " + danoAtaque + " de dano.")
} else if (poderAtaque <= poderDefesa) {
    alert("Você não causou nenhum dano.")
} else{

}

alert("Informações atualizadas dos personagens: \n\n" +
    "Personagem de ataque: " + personagemAtaque + ".\n" + 
    "Poder de ataque: " + poderAtaque + ".\n" +
    "Dano causado: " + danoAtaque + ".\n" + 
    "\nPersonagem de defesa: " + personagemDefesa + ".\n" +
    "Pontos de defesa: " + poderDefesa + ".\n" + 
    "Escudo: " + escudo + ".\n" + 
    "Vida restante: " + (pontoDeVida - danoAtaque) + ".\n" + 
    "")