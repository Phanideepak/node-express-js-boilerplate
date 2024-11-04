const { dto } = require("../../api-utility/dto/dto")


function toQuestionDto(question){
    return new dto.QuestionDto(question.id, question.question, question.answer)
}

function toQuestionDtos(questions){
    return questions.map((question)=> toQuestionDto(question))
}

module.exports.mapper = {toQuestionDto, toQuestionDtos}