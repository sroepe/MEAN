// import { request } from "https";

var users = require("./../controllers/con_users");
var lists = require("./../controllers/con_users");
var path = require("path");


module.exports = function(app){
  app.post('/login', function(req, res){
    res.json(req.body)
    users.login(req, res);
  })

  app.get('/logout', function(req,res){
    users.logout(req, res);
  })

  app.get('/check', function(req, res){
    users.checkSession(req, res);
  })

  app.post('/addlist', function(req, res){
    res.json(req.body)
    lists.addList(req, res);
  })

  app.get('/allusers', function(req, res){
    users.getAll(req, res);
  })

  app.get('/allitems', function(req, res){
    lists.getList(req, res);
  })

  app.post('/markdone', function(req, res){
    res.json(req.body)
    lists.addList(req, res)
  })

  app.get('/getuserlist', function(req, res){
    users.getUserList(req, res);
    
  })
  app.get("/user/:id", (req, res) => { 
    users.getUserList(req, res)
  })

  app.all("*", (request, response) => { response.sendFile(path.resolve("./client/dist/index.html"))});
}