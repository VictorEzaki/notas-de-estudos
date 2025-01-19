import fs from 'node:fs'

function showFile() {
    return new Promise((resolve, reject) => {
        const exists = fs.existsSync('./meuArquivo.txt')

        if (exists) {
            fs.readFile('./meuArquivo.txt', 'utf-8', (error, data) => {
                if (error) {
                    reject('Erro ao ler o arquivo: ', error)
                } else {
                    console.log(data)
                    resolve()
                }
            })
        } else {
            console.log('Esse arquivo não existe!')
        }
    })
}

export default showFile