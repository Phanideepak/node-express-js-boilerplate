const {qe} = require('../services/executor/questionExecutor')

const getAll = (req, res) => {
     return qe.getAll(req, res)
}

const getById = (req, res) => {
     return qe.getById(req.query.id, res)
}

const create = (req, res) => {
     return qe.create(req, res)
}

const update = (req, res) => {
     return qe.update(req, res)
}

const deleteById = (req, res) => {
     return qe.deleteById(req.query.id, res)
}

module.exports= {getAll, getById, create, update, deleteById}