import fs from 'node:fs'

function updateFile(content) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./meuArquivo.txt', content, 'utf-8', (error) => {
            if (error) {
                reject('Erro ao modificar o arquivo: ', error.message)
            } else {
                console.log('Arquivo modificado com sucesso!')
                resolve()
            }
        })
    })
}

export default updateFile