const fs = require('node:fs')
const path = require('node:path')
const readLine = require('node:readline')

run()

function escapeHtmlSpecialCharacter(text) {
    return text.replace(/[<>&]/g, (match) => {
        switch(match) {
            case '<':
                return '&lt'
            case '>':
                return '&gt'
            case '&':
                return '&amp;'
            default :
                return match
        }
    })
}

function escapeHtmlFile(inputFilePath, outputFilePath) {
    try {
        const filedContent = fs.readFileSync(inputFilePath, 'utf-8')
        const escapedContent = escapeHtmlSpecialCharacter(filedContent)
        fs.writeFileSync(outputFilePath, escapedContent, 'utf-8')
        console.log(`Arquivo escapado com sucesso: ${outputFilePath}`)
    } catch (error) {
        console.log('Erro:', error.message)
        process.exit(1)
    }
}

function askFilePath(question) {
    const rl = readLine.createInterface({ input: process.stdin, output: process.stdout })

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer)
            rl.close()
        })
    })
}

async function userInteraction() {
    let inputPath = process.argv[2]
    if (!inputPath) {
        inputPath = await askFilePath('Informe o caminho do arquivo de entrada: ')
    }
    inputPath = path.resolve(inputPath)

    const defaultName = `escaped_${path.basename(inputPath)}.txt`
    const answer = await askFilePath(`Informe o caminho do arquivo de saída (Padrão ${defaultName})`)
    let outputPath = answer.length > 0 ? answer : defaultName
    outputPath = path.resolve(outputPath)

    escapeHtmlFile(inputPath, outputPath)
}

function run() {
    if (process.argv.length >= 4) {
        escapeHtmlFile(path.resolve(process.argv[2]), 
        path.resolve(process.argv[3]))
    } else {
        console.log('-------------------------------------------')
        console.log('HTML tag Escaper v1.0')
        console.log('-------------------------------------------')
        console.log('Argumentos não informados: Por favor, informe os caminhos dos arquivos para realizar o escape.')
        userInteraction()
    }
}