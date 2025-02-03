const jwt = require("jsonwebtoken")
const usersModel = require("../models/users-model")
const bcrypt = require('bcrypt')
const HttpError = require("../errors/HttpError")

module.exports = {
    register: (req, res) => {
        const { name, email, password } = req.body

        if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
           throw new HttpError(400, 'Invalid fields!')
        }

        const existingUser = usersModel.findByEmail(email)
        if (existingUser) {
            return res.status(400).json({ message: 'E-mail already in use!' })
        }

        const newUser = usersModel.createUser(name, email, password)
        res.status(201).json({ ...newUser, password: undefined })
    },

    login: (req, res) => {
        const { email, password } = req.body

        if (typeof email !== 'string' || typeof password !== 'string') {
            throw new HttpError(400, 'Invalid fields!')
        }

        const user = usersModel.findByEmail(email)
        if (!user) {
            return res.status(404).json({ message: 'User not found!' })
        }

        const isValidPassword = bcrypt.compareSync(password, user.password)
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials!' })
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_KEY, { expiresIn: '1h' })
        res.json(token)
    }
}