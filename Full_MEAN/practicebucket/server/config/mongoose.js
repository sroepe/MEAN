var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var mp = path.join(__dirname, './../models');

mongoose.connect('mongodb://localhost/users_bucketlist');

fs.readdirSync(mp).forEach(function(file){
  if(file.indexOf('.js')>=0){
    require(mp + '/' + file);
  }
})