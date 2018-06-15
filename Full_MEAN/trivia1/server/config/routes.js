var users = require("./../controllers/users");
var questions = require("./../controllers/questions")

var path = require("path");

module.exports = function(app){
  app.post('/login', function(req, res){
    res.json(req.body);
    users.login(req, res);
  })

  app.get('/check', function(req, res){
    users.checkSession(req, res);
  })

  app.get('/logout', function(req, res){
    users.logout(req, res);
  })

  app.get('/newgame', function(req, res){
    users.newGame(req, res);
  })

  app.get('/cancel', function(req, res){
    questions.cancelTest(req, res);
  })

  app.get('/addquestion', function(req, res){
    questions.addQuestion(req, res);
  })

  app.post('submitquestion', function(req, res){
    questions.submitQuestion(req, res);
  })

  app.all("*", (request, response) => { response.sendFile(path.resolve("./client/dist/index.html"))});

}

