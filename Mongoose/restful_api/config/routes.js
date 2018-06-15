var users = require("./../controllers/users");
console.log(users);

module.exports = function(app){
  app.get("/", function(req, res){
    users.index(req, res);
  })
}