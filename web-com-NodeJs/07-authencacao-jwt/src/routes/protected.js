const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')

const protectedRouter = express.Router()

protectedRouter.get('/dashboard', authMiddleware, (req, res) => {
    const username = req.authenticatedUser.username
    res.status(200).json({ message: `Você está na área protegida. Bem-vindo, ${username}` })
})

module.exports = protectedRouter