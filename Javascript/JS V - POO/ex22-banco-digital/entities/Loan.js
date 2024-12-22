const Installment = require("./Installment");

module.exports = class Loan {
    static #interestRate = 1

    constructor(valueLoan, installments) {
        this.valueLoan = valueLoan
        this.installments = []
        for (let i = 0; i <= installments; i++) {
            this.installments.push(new Installment((valueLoan * Loan.#interestRate) / installments, i))
        }
        this.createdAt = new Date()
    }

    static set interestRate(newRate) {
        Loan.#interestRate = 1 + (newRate / 100);
    }

    static get interestRate() {
        return Loan.#interestRate;
    }
}