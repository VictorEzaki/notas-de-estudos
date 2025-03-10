const express = require('express')
const authController = require('./controllers/authController')
const welcomeController = require('./controllers/welcomeController')
const { optionalAuth, ensureAuth, ensureAdmin } = require('./middlewares/authMiddleware')
const usersController = require('./controllers/usersController')
const router = express.Router()

router.post('/user/register', authController.register)
router.post('/user/login', authController.login)
router.get('/user/welcome', optionalAuth, welcomeController.welcome)

router.get('/users', ensureAuth, ensureAdmin, usersController.index)
router.get('/users/:id', ensureAuth, ensureAdmin, usersController.show)
router.post('/users', ensureAuth, ensureAdmin, usersController.save)
router.delete('/users/:id', ensureAuth, ensureAdmin, usersController.delete)

module.exports = router