module.exports = class Account {
    #balance

    // Todos estes deveriam ser privado. Por ser mais prático de testar ficarão todos públicos.
    // #deposits
    // #loans
    // #transfers

    constructor(user) {
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get balance() {
        return this.#balance
    }

    addDeposit(deposit) {
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }

    addLoan(loan) {
        this.#balance += loan.value
        this.loans.push(loan)
    }

    addTransfer(transfer) {
        if (transfer.userReceived.email === this.owner.email) {
            this.#balance += transfer.value
            this.transfers.push(transfer)
        } else if (transfer.userSend.email === this.owner.email) {
            this.#balance -= transfer.value
            this.transfers.push(transfer)
        }
    }
}