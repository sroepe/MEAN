var mongoose = require("mongoose");
var user = require("./../models/users");
var User = mongoose.model('User');


module.exports = {
  login(req, res){
    User.find({name: req.body.name}, function(err, users){
      if(users.length == 0){
        User.create({name: req.body.name}, function(err, user){
          req.session.user = user;
          req.session.save();
        })
      }
      else{
        req.session.user = users[0];
        req.session.save();
      }
    })
  },

  // checkSession(req, res){
  //   if(!req.session.user){
  //     return res.json({user: null});
  //   }
  //   else{
  //     res.json({ user: req.session.user })
  //     console.log({user: req.session.user})
  //   }
  // },

  logout(req, res){
    req.session.destroy();
    return res.redirect('/');
  },

  newGame(req, res){
    console.log(newGame)
  }



}