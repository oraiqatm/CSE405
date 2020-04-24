//This file uses stuff.js 
// ./ for we want the file in the current directory
var stuff = require('./stuff.js');

console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 5));