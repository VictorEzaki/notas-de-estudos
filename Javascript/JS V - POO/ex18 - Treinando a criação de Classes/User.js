class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if (!email || !password) {
            return console.log('Email ou senha inválidos')
        }

        if (email != this.email || password != this.password) {
            return console.log('Email ou senha inválidos')
        }

        return console.log('Usuário logado com sucesso')
    }
}

const victor = new User("Victor", "victor@gmail.com", "123")
const ezaki = new User("Ezaki", "ezaki@gmail.com", "123")

ezaki.login("ezaki@gmail.com", "123")