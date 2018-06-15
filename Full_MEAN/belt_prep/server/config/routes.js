module.export = function(app){
  app.post('/adduser', function(req, res){
    res.json(req.body);
  })

  app.get('/getall', function(req, res){
    user.getAll(req, res);
  })


}