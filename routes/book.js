const express = require('express')
const bookRouter = express.Router()
const bookController = require('./../controller/bookController')


bookRouter.route("/book")
    .get(bookController.index)
    .post(bookController.store)


bookRouter.route('/book/:id')
    .get(bookController.show)
    .patch(bookController.update)
    .delete(bookController.delete)


module.exports = bookRouter 
