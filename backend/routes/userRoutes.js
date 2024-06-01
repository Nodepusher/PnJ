const express = require('express')
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')

const router = express.Router()

router.post('/login', userController.login)
router.post('./email-verify', authController.emailAuthentication)

module.exports = router
