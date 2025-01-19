import fs from 'node:fs'

function createFile(content) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./meuArquivo.txt', content, 'utf-8', (error) => {
            if (error) {
                reject('Erro ao criar o arquivo!')
            }else {
                console.log('Arquivo criado com sucesso!')
                resolve()
            }

        })
    })
}

export default createFile