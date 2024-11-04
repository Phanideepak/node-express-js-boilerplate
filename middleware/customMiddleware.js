const crypto = require('crypto')

function errorHandler(err, res) {
    res.status(err.status_code).send({status_code : err.status_code, exception : err.error_message,
        exception_id : crypto.randomBytes(32).toString('hex'), 
        request_id : crypto.randomBytes(32).toString('hex')})
}

module.exports = {errorHandler}