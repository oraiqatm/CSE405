//When take a node function you write it raw like events
var events = require('events'); 
/*
Demonstration a basic emitter
var myEmitter = new events.EventEmitter(); 

myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});

myEmitter.emit('someEvent', 'The event was emitted');
*/

var util = require('util');

var Person = function(name){
    this.name = name;
}
//person inherits eventEmitter
util.inherits(Person, events.EventEmitter);
var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg);
    });
});

james.emit('speak', 'hey Dudes');
ryu.emit('speak', 'I want a curry');