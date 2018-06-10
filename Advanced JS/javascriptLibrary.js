var _ = {   
        // --> cannot seem to get map: to work with an object --> see down below for trying to run function 
        // map: function(object, callback){
        //   for(let num=0; num<object.length; num++){
        //     object({key:num}) = callback(object({key:num}));
        //   }
        //   return object;
        // },
        map: function(array, callback){
          for(var i=0; i<array.length; i++){
            array[i] = callback(array[i]);
          }
          return array;
        },

        reduce: function(array, callback, memo){
          let index = 0;
          if(!memo){
            memo = array[0];
            index += 1;
          }
          for(var i = index; i < array.length; i++){
            memo = callback(array[i], memo);
          }
          return memo;
        },
      
        find: function(array, callback){
          for(let i=0; i < array.length; i++){
            if(callback(array[i])){
              return array[i];
            }
          }
          return false;
        },
        
        filter: function(array, callback){
          ans = [];
          for(let i=0; i< array.length; i++){
            if(callback(array[i])){
              ans.push(array[i]);
            }
          }
          return ans;
        },

        reject: function(array, callback){
          ans = [];
          for(var i = 0; i<array.length; i++){
            if(!callback(array[i])){
              ans.push(array[i]);
            }
          }
          return ans;
      
        } 
      }   
      
      var timesthree = _.map([1, 2, 3], function(num){ return num * 3; });
      console.log(timesthree);     //=> [3, 6, 9]
      
      // --> cannot get MAP: function to work with an object !!!!  
      // let keythree = _.map({one: 1, two: 2, three: 3}, function(key, num){ return num * 3; });
      // console.log(keythree);
      //=> [3, 6, 9]

      var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0); 
      console.log(sum)  //=> 6

      var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }); 
      console.log(even) //=> 2

      var even = _.find([1, 3, 5, 7], function(num){ return num % 2 == 0; }); 
      console.log(even)  //=> false

      var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
      console.log(evens); // if things are working right, this will return [2,4,6].
      
      var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
      console.log(odds) //=> [1, 3, 5]
