const uuid = require('uuid').v4
const bcrypt = require('bcrypt')

const users = [
    { id: '1', name: 'Victor', email: 'victor@gmail.com', password: '123', role: 'employee' },
    { id: '2', name: 'takeyoshi', email: 'takeyoshi@gmail.com', password: '123', role: 'user' },
    { id: '3', name: 'kieper', email: 'kieper@gmail.com', password: '123', role: 'user' },
    { id: '4', name: 'Ezaki', email: 'Ezaki@gmail.com', password: '123', role: 'user' }
]

module.exports = {
    findAll: () => users,

    findById: (id) => users.find(user => user.id === id),

    findByEmail: (email) => users.find(user => user.email === email),

    createUser: (name, email, password, role) => {
        const newUser = {
            id: uuid(),
            name,
            email,
            password: bcrypt.hashSync(password, 12),
            role
        }

        users.push(newUser)
        return newUser
    }
}