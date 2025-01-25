const express = require('express')
const uploadMiddlewares = require('./middlewares/upload-middleware')
const app = express()

app.use(express.static('public'))

app.post('/upload', uploadMiddlewares.single('avatar'), (req,res) => {
    console.log(req.file, req.body)
    res.json({ message: 'Arquivo salvo com sucesso' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor iniciado!\nRodando em http://localhost:${PORT}/`)
})