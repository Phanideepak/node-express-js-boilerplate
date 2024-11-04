const crypto = require('crypto')

class ResponseDto{
     constructor(statusMessage, statusCode){
        this.statusMessage = statusMessage
        this.statusCode = statusCode
     }
}

 class ErrorResponse extends ResponseDto {
     constructor(statusCode,  exception){
        super('Error Occurred',statusCode)
        this.exception = exception
        this.requestId = crypto.randomBytes(16).toString('hex')
        this.exceptionId = crypto.randomBytes(32).toString('hex')
     }
}

class WrappedResponse extends ResponseDto{
    constructor(data){
        super('Success', 200)
        this.data = data
        this.requestId = crypto.randomBytes(16).toString('hex')
    }
}

class QuestionDto{
    constructor(id, question, answer){
        this.id = id;
        this.question = question;
        this.answer = answer;
    }
}

module.exports.dto = {ErrorResponse, WrappedResponse, ResponseDto, QuestionDto}

