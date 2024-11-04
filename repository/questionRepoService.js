const db = require("../app-config/db")

function getAll(){
    return new Promise((resolve, reject)=>{
        db.query('SELECT * FROM flashcards.questions', (err,result) => {
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
}

function getById(id){
    return new Promise((resolve, reject)=>{
        db.query(`SELECT * FROM flashcards.questions where id = ?`, [id], (err,result) => {
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
}

function create(question, answer){
    return new Promise((resolve, reject)=>{
        db.query(`INSERT INTO flashcards.questions(question, answer) values(?, ?)`,[question, answer], (err,result) => {
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
}

function update(id, question, answer){
    return new Promise((resolve, reject)=>{
        db.query(`UPDATE flashcards.questions SET question = ?, answer = ? where id = ?`, [question, answer, id], (err,result) => {
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
}

function deleteById(id){
    return new Promise((resolve, reject)=>{
        db.query(`DELETE FROM flashcards.questions where id = ?`, [id] ,(err,result) => {
            if(err){
                reject(err)
            }
            resolve(result)
        })
    })
}


module.exports.qrs = {getAll, getById, create, update, deleteById}