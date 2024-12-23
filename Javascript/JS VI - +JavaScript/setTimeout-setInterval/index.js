console.log('Programa iniciado!')


// Com o setTimeOut pode atribuir um tempo para que aquele bloco de comando seja executado. Como mostra abaixo:
// setTimeout(() => {
//     console.log('3 segundos se passram desde que o program foi iniciado')
// }, 1000 * 3)

// Podemos também retornar o ID do setTimeOut. Com ele podemos interromper seu funcionamento chamando outra função, o clearTimeOut. Como mostra abaixo:
// const timeOutID = setTimeout(() => {
//     console.log('3 segundos se passram desde que o program foi iniciado')
// }, 1000 * 3)
// clearTimeout(timeOutID)

// --------------------------------

// Com o setInterval podemos settar intervalos que tal bloco de comando irá ser executado. 
// Da forma mostrado abaixo, será executado infinitamente até que o programa seja stoppado.
let seconds = 0
// setInterval(() => {
//     seconds += 3
//     console.log(`Se passaram ${seconds} segundos.`)
// }, 1000 * 3)

// Por isso é importante pegarmos o ID do interval para que conseguimos parar através do próprio código.
const intervalID = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos.`)
    if (seconds > 10) {
        clearInterval(intervalID)
        console.log('Tempo esgotado!')
    }
}, 1000 * 3)