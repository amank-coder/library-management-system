const express = require('express')
const authRouter = express.Router()
const authController = require('./../controller/authController')

authRouter.route('/auth/signup').post(authController.signup)

authRouter.route('/auth/login').post(authController.login)

module.exports = authRouter