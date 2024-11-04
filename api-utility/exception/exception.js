class BaseError extends Error{    
    constructor(message){
        super(message)
        this.statusMessage = 'Internal Error Occurred'
        if(!message){
            this.errorMessage = this.statusMessage
        } else {
            this.errorMessage = message
        }

        this.statusCode = 500
    }
}

class NotFoundError extends BaseError{
    constructor(message){
        super(message);
        this.statusCode = 404;
        this.statusMessage = 'Not Found Error Occurred'
        this.errorMessage = message;
    }
}

class ValidationError extends BaseError{
    constructor(message){
        super(message);
        this.statusCode = 404;
        this.statusMessage = 'Validation Error Occured'
        this.errorMessage = message;
    }
}

module.exports.exception = {BaseError, NotFoundError, ValidationError}