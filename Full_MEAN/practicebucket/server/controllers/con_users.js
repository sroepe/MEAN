
var mongoose = require("mongoose");
var user = require("./../models/mod_users")
var list = require("./../models/mod_users")
var User = mongoose.model('User');
var List = mongoose.model('List');


module.exports = {
  login(req, res){
    // User.find({}).remove().exec();
    User.find({name:req.body.name}, function(err, users){
      if(users.length == 0){
        User.create({name: req.body.name}, function(err, user){
          req.session.user = user
          req.session.save();
        })
      }
      else{
        req.session.user = users[0]
        req.session.save();
      }
    })
  },

  logout(req, res){
    req.session.destroy();
    return res.redirect('/')
  },
  
  checkSession(req, res){
    if(!req.session.user){
      return res.json({user: null});
    }
    else{
      res.json({ user: req.session.user })
    }
  },

  getAll(req, res){
    User.find({}, function(err, users){
      return res.json({users: users})
    })
  },

  addList(req, res) {
    // List.find({}).remove().exec();
    List.create({creator: req.session.user.name, title: req.body.title, description: req.body.description, created_on: new Date()}, function(err, list){
      // if(err){
      //   console.log(err)
      //   // return res.json(err)
      // }
      // else{
      
      // }
      // console.log(list)
      return res.json()
      
    })
    // res.redirect('/dashboard')
  },

  getList(req, res){
    List.find({}, function(err, lists){
      return res.json({lists: lists})
    })
  },
  // markDone(req, res){
  //   List.update()
  // },

  getUserList(req, res){
    // User.find({}, function(err, user) {
    //   return res.json({user: user.name})
    // })
    User.findOne({_name: req.params.name}).populate('items').exec(function(err, user){
      res.render('user', {user:user})
    })
  },
}
