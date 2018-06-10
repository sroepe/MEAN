function fib(){
  var one = 0;
  var two = 1;

  function nacci(){
    console.log(one);
    var t = one;
    one = two;
    two = t + two;
    return two;
  }
  return nacci;
}
var fibcounter = fib();
fibcounter();
fibcounter();
fibcounter();
fibcounter();
fibcounter();
fibcounter();
