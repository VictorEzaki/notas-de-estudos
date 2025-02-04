const express = require('express')
const booksController = require('../controllers/books-controller')
const loansController = require('../controllers/loans-controller')
const { ensureAuth, ensureEmployee } = require('../middlewares/auth-middleware')
const apiRouter = express.Router()

apiRouter.get('/books', ensureAuth, ensureEmployee, booksController.index)
apiRouter.get('/books/:id', ensureAuth, ensureEmployee, booksController.show)
apiRouter.post('/books', ensureAuth, ensureEmployee, booksController.save)
apiRouter.put('/books/:id', ensureAuth, ensureEmployee, booksController.update)
apiRouter.delete('/books/:id', ensureAuth, ensureEmployee, booksController.delete)

apiRouter.get('/loans', loansController.index)
apiRouter.get('/loans/:id', loansController.show)
apiRouter.post('/loans', ensureAuth, loansController.save)
apiRouter.post('/loans/:id/return', loansController.return)

module.exports = apiRouter