
function invalidPassword(){
    return 'Invalid password'
}
    

function loginSuccessMessage(){
    return 'Login Successfully.'
}

function signupSuccessMessage(){
    return 'user created successfully'
}

function entityAlreadyExists(entityName, fieldName, val){
    return `${entityName} with ${fieldName} : ${val} already exists`
}

function entitiesNotFound(entityName){
    return `No ${entityName} found`
}

function fieldsNotModified(){
    return 'Fields Not Modified'
}

function entityNotFound(entityName, fieldName, val){
    return `No ${entityName} Found by ${fieldName} : ${val}`
}

function entityNotFoundTwo(entityName, fieldName, val, secondFieldName, secondVal){
    return `No ${entityName} Found by ${fieldName} : ${val}  and ${secondFieldName} : ${secondVal}`
}

module.exports.messageUtils = {entitiesNotFound, fieldsNotModified, entityNotFound, entityNotFoundTwo}