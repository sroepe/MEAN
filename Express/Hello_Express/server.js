const express = require("express");
const app = express();
const bp = require("body-parser");
const path = require("path");
let session = require("express-session");  // if error re: declaration type, try const
const port = 8001;
app.use(express.static(path.join(__dirname, "/client")));
app.use(bp.urlencoded());
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(session({secret:"nottelling"}));


//start routing
app.get("/", function(request, response){
  response.send("<h1>Hello Express</h1>");
})
app.get("/users", function(request,response){
  var users_array = [
    {name: "Michael", email: "michael@codingdojo.com"}, 
    {name: "Jay", email: "jay@codingdojo.com"}, 
    {name: "Brendan", email: "brendan@codingdojo.com"}, 
    {name: "Andrew", email: "andrew@codingdojo.com"}
  ];
  response.render('users', {users: users_array});
})
app.post("/users", function(request, response){
  console.log(request);
  response.redirect('/');
})
app.post('/users', function(request, response){
  console.log("POST DATA /n/n", request.body)
  response.redirect("/");
})

//end routing
app.listen(port, function(){
  console.log("listening on 8001");
})
