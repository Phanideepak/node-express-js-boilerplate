const {exception} = require('../exception/exception')

function emptyMessage(field){
    return `${field} cannot be blank or nill`
}

function noneMessage(field){
    return `${field} cannot be nill`
}

function zeroMessage(field){
    return `${field} cannot be zero`
}

function isLessThan(field, threshold){
    return `${field} cannot be less than ${threshold}`
}

function isGreaterThan(field,threshold){
    return `${field} cannot be greater than ${threshold}`
}
    

function isTrue(expression, message){
    if(expression){
        throw new exception.ValidationError(message);
    }
}

function isEmpty(value , field ){
    if(!value)
       throw new exception.ValidationError(emptyMessage(field))
}

function isNone(value, field){
    if(!value)
        throw new exception.ValidationError(noneMessage(field))
}

function isZero(value, field){
     if(value == 0)
        throw new exception.ValidationError(zeroMessage(field)) 
}

module.exports.validationAssist = {isZero, isEmpty, isNone}