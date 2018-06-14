var people = require("./../controllers/people");
console.log(people);

module.exports = function(app){
  app.get("/", function(req, res){
    people.index(req, res);
  })
  app.get("/new/:name", function(req, res){
    people.create(req, res);
  })
  // app.get("/remove/:name", function(req, res){
  //   people.destroy(req, res);
  // })
  // app.show("/:name", function(req, res){
  //   people.show(req, res);
  // })
}
