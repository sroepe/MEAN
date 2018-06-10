console.log(hello);
var hello = 'world';

//predict that 'world' would be output b/c var hello hoisted to top --> ran and determined nothing would happen because although var hello is hoisted, it's hoisted without 'world' so undefined when console.log runs.

var needle = 'haystack';
test();


function test(){
	var needle = 'magnet';
	console.log(needle);
}
// var needle hoisted globally and within function; function will run and print 'magnet'

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
// would print 'super cool' as print function was not invoked --> printed as predicted


var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = ‘gone’;
}
//will print 'chicken' and function will run, var food will get hoisted, but 'gone' is after console.log, so 'half-chicken' will print but 'gone' will not

mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
// will return an error -- mean() is not a function

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
//var genre will get hoisted to top, first console log will log undefined as genre will be defined as 'disco' after first log; rewind function will run and print rock, r&b, then final log will log0 'disco'

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

//var dojo hoisted to top globally, dojo = "san jose", first log prints 'san jose', then learn() runs and prints 'seattle' and 'burbank', then final log is run and prints globally defined 'dojo' which = 'san jose'