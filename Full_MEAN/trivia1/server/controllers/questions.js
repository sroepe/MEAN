var mongoose = require("mongoose");
var question = require("./../models/questions");
var Question = mongoose.model('Question');

module.exports = {
  cancelTest(req, res){
    return res.redirect('/home');
  },

  addQuestion(req, res){
    return res.redirect("/new_question")
  },

  submitQuestion(req, res){
    Question.create({ question: req.body.question, correct: req.body.correct, fake1: req.body.fake1, fake2: req.body.fake2}, function(err, user){
      Question.save(function(){
        res.json({ questions: questions })
      })
      return res.redirect('/home')
    })
  },

  getAllQuestions(req, res){
    Question.find({}, function(err, users){
      return res.json({questions:questions})
    })

},

}