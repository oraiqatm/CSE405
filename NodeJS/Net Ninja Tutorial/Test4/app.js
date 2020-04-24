//file reads and writes from files. (files used "readMe.txt" and "writeMe.txt")
var fs = require('fs');
/* 
//Synchronous Request
var readMe = fs.readFileSync('readMe.txt', 'utf8');
fs.writeFileSync('writeMe.txt', readMe);
*/

//Asynchronous 
fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data, (err)=>{ }); //need a callback function now
});
