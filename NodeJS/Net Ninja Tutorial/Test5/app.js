//DeleteMe.txt

var fs = require('fs');

// fs.unlink('deleteMe.txt', (err)=>{ }); // needs a throwback message but works

//Creating Directories.
//fs.mkdirSync('stuff'); 
//Deleting Directories.
//fs.rmdirSync('stuff');
/*
//Creating a directory and writing a file into it
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function (err,data){
        fs.writeFile('./stuff/writeMe.txt', data, (err)=> {});
    });
});
*/

//can't remove directories if not empty so remove file first
fs.unlink('./stuff/writeMe.txt', function(){
    fs.rmdir('stuff', (err)=>{});
});
    

