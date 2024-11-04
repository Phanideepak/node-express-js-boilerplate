const {qrs} = require('../../repository/questionRepoService')
const { mapper } = require('../mapper/mapper')
const { responseUtils } = require('../util/responseUtils')
const {messageUtils} = require('../../api-utility/utils/messageUtil')


function getAll(req, res){
    qrs.getAll().then(results=>{
        if(results.length === 0){
            return responseUtils.errorWrap(res, 404, messageUtils.entitiesNotFound('Questions'))
        }
        return responseUtils.wrap(res, mapper.toQuestionDtos(results))
    }).catch(err=>{
        return responseUtils.errorWrap(res, 500, err.message)     
    })
}

function getById(id, res){
    qrs.getById(id).then(result=>{
        if(result.length === 0){
            return responseUtils.errorWrap(res, 404, messageUtils.entityNotFound('Question','id',id))
        }
        return responseUtils.wrap(res, mapper.toQuestionDto(result[0]))
    }).catch(err=>{
        return responseUtils.errorWrap(res, 500, err.message)     
    })
}

function create(req, res){
    qrs.create(req.body.question, req.body.answer).then((result)=>{
        return responseUtils.wrap(res, 'Successfully Created')
    }).catch(err=>{
        return responseUtils.errorWrap(res, 500, err.sqlMessage ? err.sqlMessage : 'Database error occured')
    })
}

function update(req, res){
    var isUpdate = false

    qrs.getById(req.body.id).then((result)=>{
        var isUpdate = false
        if(result.length === 0){
            return responseUtils.errorWrap(res, 404, messageUtils.entityNotFound('Question','id',req.body.id)) 
        }

        if(req.body.question !== result[0].question){
            isUpdate = true
        }
        if(req.body.answer !== result[0].answer){
            isUpdate = true
        }

        if(!isUpdate){
            return responseUtils.errorWrap(res, 400, messageUtils.fieldsNotModified())
        }
        
       

        qrs.update(req.body.id, req.body.question, req.body.answer).then((result)=>{
            return responseUtils.wrap(res, 'Successfully Updated')
        }).catch(err=>{
            return responseUtils.errorWrap(res, 500, err.sqlMessage ? err.sqlMessage : 'Updation error occured')
        })

    }).catch(err => {
        return responseUtils.errorWrap(res, 500, err.sqlMessage ? err.sqlMessage : 'Fetching data error occured')
    })
}




function deleteById(id, res){
    qrs.getById(id).then((result)=>{
        if(result.length === 0){
            return responseUtils.errorWrap(res, 404, messageUtils.entityNotFound('Question','id',id)) 
        }

        qrs.deleteById(id).then((result)=>{
            return responseUtils.wrap(res, 'Successfully Deleted')
        }).catch(err=>{
            return responseUtils.errorWrap(res, 500, err.sqlMessage ? err.sqlMessage : 'Deletion error occured')
        })

    }).catch(err => {
        return responseUtils.errorWrap(res, 500, err.sqlMessage ? err.sqlMessage : 'Fetching data error occured')
    })
}

module.exports.qs = {getAll, getById, create, update, deleteById}