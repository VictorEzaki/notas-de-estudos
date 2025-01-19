const fs = require('node:fs')

const exists = fs.existsSync('./arquivo.csv')

if (exists) {
    fs.readFile('./Victor.txt', 'utf-8', (error, data) => {
        if (error) {
            console.log('Erro ao tentar ler o arquivo: ', error.message)
            return
        }
        const entries = data.split(",")
        console.log(entries)
        entries.forEach((entry) => console.log(entry))
    })
} else {
    console.log('Arquivo não existe!')
}

// try {
//     const data = fs.readFileSync('./arquivo.txt', 'utf-8')
//     console.log(data)
// } catch (error) {
//     console.log('Erro ao tentar ler o arquivo: ', error.message)
// }