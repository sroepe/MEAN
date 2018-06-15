var mongoose = require("mongoose");
var user = require('./../controllers/con_bucketList');


User = mongoose.model('User')

module.exports = {
  addUser: function(req, res){
    User.find({name: req.body.name }, function(err, users) {
      if(users.length < 1){
        User.create({ name: req.body.name }, function(err, users){
          req.session.user = user
          req.session.save();
        })
      }
      else {
        req.session.user = users[0];
        req.session.save();
      }
    })
  },

  // getAll: function(req, res){
  //   User.find({}), function(err, users){
  //   }
  // }
}