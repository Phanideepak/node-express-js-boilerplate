


const express = require('express')
const {update, deleteById, getAll, getById, create} = require('../controller/questionController')

const questionRouter = express.Router()

/**
 * @swagger
 * /api/posts:
 *  get:
 *   description use to request all posts
 *   responses:
 *   '200':
 *     description: a successful response
 */
questionRouter.get('/all', getAll)
questionRouter.get('',getById)
questionRouter.post('',create)
questionRouter.put('', update)
questionRouter.delete('', deleteById)


module.exports = questionRouter