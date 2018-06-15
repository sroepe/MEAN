var notes = require("./../controllers/con_belt_practice");

module.exports = function(app) {
  
  // app.get('/', (request, response) => { /*...*/ })

  // app.post('/', (request, response) => { /*...*/ })

  app.all("*", (request, response) => {response.sendFile(path.resolve("client/dist/index.html"))})

}