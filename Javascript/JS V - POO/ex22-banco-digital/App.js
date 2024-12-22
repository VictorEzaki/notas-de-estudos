const Deposit = require("./entities/Deposit")
const Loan = require("./entities/Loan")
const Transfer = require("./entities/Transfer")
const User = require("./entities/User")

module.exports = class App {
    static #users = []

    static findUser(email) {
        const user = this.#users.find(user => user.email === email)
        return user ?? null
    }

    static createUser(fullname, email) {
        const userExists = App.findUser(email)
        if (!userExists) {
            const user = new User(fullname, email)
            App.#users.push(user)
        }
    }

    static deposit(email, value) {
        const user = App.findUser(email)
        if (user) {
            const newDeposit = new Deposit(value)
            user.account.addDeposit(value)
        }
    }

    static transfer(fromUserEmail, toUserEmail, value) {
        const fromUser = App.findUser(fromUserEmail)
        const toUser = App.findUser(toUserEmail)
        if (fromUser && toUser) {
            const newTransfer = new Transfer(fromUser, toUser, value)
            fromUser.account.addTransfer(newTransfer)
            toUser.account.addTransfer(newTransfer)
        }
    }

    static takeLoan(email, valueLoan, numberOfInstallments) {
        const user = App.findUser(email)
        if (user) {
            const newLoan = new Loan(valueLoan, numberOfInstallments)
            user.account.addLoan(newLoan)
        }
    }

    static changeLoanFee(newRate) {
        Loan.interestRate = newRate
    }
}