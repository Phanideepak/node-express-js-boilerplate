const {dto} = require('../../api-utility/dto/dto')

function wrap(res, data){
    return res.status(200).send(new dto.WrappedResponse(data))
}

function errorWrap(res, statusCode, errorMessage){
    return res.status(statusCode).send(new dto.ErrorResponse(statusCode, errorMessage))
}


module.exports.responseUtils = {wrap, errorWrap}