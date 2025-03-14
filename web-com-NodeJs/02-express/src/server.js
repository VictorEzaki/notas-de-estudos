const express = require('express')
const server = express()

server.get('/', (request, response) => {
    response.send('Servidor express funcionando!\nVocê está na página inicial!')
})

server.get('/artigos', (req, res) => {
    res.send('Servidor express funcionando!\nVocê está na página de artigos!')
})

const PORT = 3000

server.listen(PORT, () => {
    console.log(`O servidor express iniciado em http://localhost:${PORT}/`)
})