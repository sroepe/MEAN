var users = require('./../controllers/con_bucketList');

module.exports = function(app){
  app.get('/', function(req, res){
    res.redirect("index");
  })
  app.get('/index', function(req, res){
    res.render("index");
  })
  app.post('/adduser', function(req, res){
    users.addUser(req, res);
  })

  // app.get('/getall', function(req, res){
  //   // User.getAll(req, res);
  // })
}