const HttpError = require("../errors/HttpError")
const booksModel = require("../models/books-model")
const loansModel = require("../models/loans-model")

module.exports = {
    index: (req, res) => {
        const loans = loansModel.getAllLoans()
        res.json(loans)
    },

    show: (req, res) => {
        const { id } = req.params
        const loan = loansModel.getLoanById(id)
        if (!loan) {
            throw new HttpError(404, 'Loan not found!')
        }
        res.json(loan)
    },

    save: (req, res) => {
        const user = req.user
        const { bookId } = req.body

        if (typeof bookId !== 'string') {
            throw new HttpError(400, 'Invalid ID!')
        }

        const book = booksModel.getBookById(bookId)
        if (!book) {
            throw new HttpError(404, 'Book not found!')
        }

        const newLoan = loansModel.createLoan(user, book)
        res.status(201).json(newLoan)
    },

    return: (req, res) => {
        const { id } = req.params
        const loan = loansModel.returnLoan(id)
        res.json(loan)
    }
}