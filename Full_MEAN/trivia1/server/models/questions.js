var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    question: String,
    correct: String,
    fake1: String,
    fake2: String
    
})

mongoose.model('Question', QuestionSchema)