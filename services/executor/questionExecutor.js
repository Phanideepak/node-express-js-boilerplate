const { validationAssist } = require('../../api-utility/utils/validationAssist')
const {qs} = require('../service/questionService')
const { responseUtils } = require('../util/responseUtils')

function getAll(req, res){
    return qs.getAll(req, res)
}

function getById(id, res){
    try{
       validationAssist.isZero(id, 'id')
    } catch(error){
        return responseUtils.errorWrap(res, 404, error.message)
    }
    return qs.getById(id, res)
}

function create(req, res){
    try{
        validationAssist.isNone(req.body, 'create request payload')
        validationAssist.isEmpty(req.body.question, 'question')
        validationAssist.isEmpty(req.body.answer, 'answer')
    } catch(error){
         return responseUtils.errorWrap(res, 404, error.message)
    }
   
    return qs.create(req, res)
}

function update(req, res){
    try{
        validationAssist.isNone(req.body, 'create request payload')
        validationAssist.isZero(req.body.id, 'id')
        validationAssist.isEmpty(req.body.question, 'question')
        validationAssist.isEmpty(req.body.answer, 'answer')
    } catch(error){
         return responseUtils.errorWrap(res, 404, error.message)
    }
   
    return qs.update(req, res)
}

function deleteById(id, res){
    try{
        validationAssist.isZero(id, 'id')
     } catch(error){
         return responseUtils.errorWrap(res, 404, error.message)
     }
     return qs.deleteById(id, res)
}

module.exports.qe = {getAll, getById, create, update, deleteById}