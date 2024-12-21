class Account {
    #password 
    #balance
    // O "#" indica que o método ou atributo é privado. Privado significa que tais só podem ser acessados dentro da própria classe.

    constructor(user) {
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    getBalance(email, password) {
        if (this.#authenticate(email, password)) {
            return this.#balance;
        }
        return null;
    }

    #authenticate(email, password){
        return this.email === email && this.#password === password;
    }
}

const user = {
    email: "victor@gmail.com",
    password: '123'
}
const myAccount = new Account(user)
console.log(myAccount)
console.log(myAccount.getBalance('victor@gmail.com', '123'))