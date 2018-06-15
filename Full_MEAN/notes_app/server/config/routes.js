// var mongoose = require("mongoose");
// var Note = mongoose.model('Note');

var notes = require("./../controllers/notes");

module.exports = function(app) {
  
  app.get('/', (request, response) => { /*...*/ })

  app.post('/', (request, response) => { /*...*/ })

  app.all("*", (request, response) => {response.sendFile(path.resolve("client/dist/index.html"))})

}