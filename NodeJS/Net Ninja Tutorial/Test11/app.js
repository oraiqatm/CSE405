//https://www.youtube.com/watch?v=CdvSVkF9m_Y&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=27
//Mader server and determining what type of request was made and handle it
//Using the node package manager npmjs.com for more information for each package
//For all packages with node you can use npmjs.com to find what you need.
//To use this file you need to download express => $ npm install express
//To uninstall => $ npm install express
//Can make the package.json file by => $ npm init
//Now to download and save the new package to the json file you write => $ npm install express -save
//Then you can do, to download all packages used => npm install 

//next we download nodemon globally which we can make changes and it will update
//dynamically  => $ npm install -g nodemon

//Installing EJS => $ npm install ejs -save
//Installing Body-parser from Express 
//Sending emails using the package: nodemailer

var express = require('express');
var bodyParser = require('body-parser'); //used to pass post data
var app = express();

var urlencoderParser = bodyParser.urlencoded({extended:false});

app.set('view engine', 'ejs');
//used to serve up stylesheets, images, and other static resources.
app.use('/assets', express.static('assets'));


app.get('/', function(req, res){
    //res.sendFile(__dirname + '/index.html');
    res.render('index');
});
app.get('/contact', function(req, res){
    //res.sendFile(__dirname + '/contact.html');
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencoderParser ,function(req, res){
    //res.sendFile(__dirname + '/contact.html');
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});


//using route parameters/ methods => name
//instead of send file we use render()
app.get('/profile/:name', function (req, res){
    var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
    //include the object data just as the name
    res.render('profile', {person: req.params.name, data: data});
})

app.listen(3000);
