var mongoose = require("mongoose");
var Person = mongoose.model("Person");
var printError = function(error, explicit) {
  console.log(`[${explicit ? 'EXPLICIT' : 'INEXPLICIT'}] ${error.name}: ${error.message}`);
}

module.exports = {
  index: function(req, res){
    return res.json("hitting this route")
  },
  create: function(req, res){
    Person.create(req.params)
      if(error){
        console.log("something did not work properly");
        return res.json(error);
      } else {
        console.log("this created a record in the db");
        return res.json( Person );
      }
      return res.json("hitting this route")
    },
   
  }





//     Person.find({})
//       .then(people => res.json({Person}))

// },
//   create(req, res) {
//     Person.create(req.params)
//       .then(people => res.json({Person}));
//   }
// }  
//   index: function(req, res){
//     Person.find({})
//       return res.json(people);
//       // .catch(error => res.json(error));
//   },

//   create: function(req, res){
//     Person.create(req.params)
//       return res.json(Person);
//       // .catch(error => res.json(error));
//     // var person = new People(`/new/:${name}`);
//     // person.save(function(err){
//     //   if(err){
//     //     console.log("something did not work properly");
//     //     return res.json(err);
//     //   } else {
//     //     console.log("this created a record in the db");
//     //     return res.json( {person:People} );
//     //   }
//     // })
//   }
// }