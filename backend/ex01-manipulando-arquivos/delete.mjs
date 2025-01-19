import fs from 'node:fs'

function deleteFile() {
    return new Promise((resolve, reject) => {
        const exists = fs.existsSync('./meuArquivo.txt')
    
        if (exists) {
            fs.unlink('./meuArquivo.txt', (error) => {
                if (error) {
                    reject('Erro ao deletar o arquivo: ', error.message)
                } else {
                    console.log('Arquivo deletado com sucesso!')
                    resolve()
                }
            })
        }
    })
}

export default deleteFile