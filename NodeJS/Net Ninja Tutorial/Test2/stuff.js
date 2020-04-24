//working with Tutorial2.js
var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
    //embedd variables without concatanate.
    //To embedd the variable you must use ${ } 
    return `The sum of the 2 number is ${a+b}`;
};

var pi = 3.142; 



//this makes function counter accessable outside this file or do it inline as shown above.
//module.exports.pi = pi;
//or you can use literal notation ( counter: counter, adder: adder)
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};

