function sendSpaceShip(spaceship: { pilot: string, copilot?: string }) {

}

sendSpaceShip({ pilot: 'Han Solo', copilot: 'Chewbacca' })
sendSpaceShip({ pilot: 'Luke'})
// Colocando uma interrogação no atributos que queremos, ele se torna opcional.

let input: unknown

input = 'test'
input = 1
input = true
// Usando UNKNOWN podemos definir qualquer tipo a ele.

let label: any
let text = 'teste'

label = text
// Parecido com o UNKNOWN o ANY é como trabalhar com JS. Devemos evitar utilizar o ANY.

function verification(teste){
    if (teste) {

    } else {
        let _check: never
        return
    }
}
// NEVER é quando nosso código caiu em um estado que nunca deveria existir, isso significa que tem algo de errado na nossa aplicação.