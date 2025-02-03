const HttpError = require('../errors/HttpError')

const uuid = require('uuid').v4

let books = [
    { id: '1', title: 'Booke One', author: 'Author One', quantityAvable: 4 },
    { id: '3', title: 'Booke Two', author: 'Author Two', quantityAvable: 2 },
    { id: '4', title: 'Booke Three', author: 'Author Three', quantityAvable: 1 },
    { id: '5', title: 'Booke Four', author: 'Author Four', quantityAvable: 3 },
]

module.exports = {
    getAllBooks: () => books.map(book => ({ id: book.id, title: book.title })),

    getBookById: (id) => books.find(book => book.id === id),
    
    createBook: (title, author, quantityAvable) => {
        const newBook = {
            id: uuid(),
            title,
            author,
            quantityAvable
        }

        books.push(newBook)
        return newBook
    },

    updateBook: (id, updatedBook) => {
        const bookIndex = books.findIndex(book => book.id === id)
        if (bookIndex === -1) {
            throw new HttpError(404, 'Livro não encontrado')
        }

        books[bookIndex] = { ...books[bookIndex], ...updatedBook }

        return books[bookIndex]
    },

    deleteBook: (id) => {
        const bookIndex = books.findIndex(book => book.id === id)
        if (bookIndex === -1) {
            throw new HttpError(404, 'Livro não encontrado')
        }

        const deletedBook = books[bookIndex]
        books = books.filter(book => book.id !== id)
        return deletedBook
    }
}