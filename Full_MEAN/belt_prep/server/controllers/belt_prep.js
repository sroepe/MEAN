var mongoose = require("mongoose");
var User = mongoose.model("User");

var user = require('./../controllers/belt_prep');

module.exports = {
  addUser: function(req, res){
    User.create({name: req.body.name}, function(err, user){
      return res.json(user);
    })
  },

  getAll: function(req, res){
    User.find({}), function(err, users){
      return res.json(users);
    }
  }

}