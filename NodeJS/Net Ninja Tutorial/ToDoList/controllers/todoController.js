var bodyParser = require('body-parser');

var data = [{item: 'Get Milk'}, {item: 'Walk Dog'},{item: 'Do some coding'}];
var urlencoderParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){
    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencoderParser, function(req, res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', function(req, res){
        data = data.filter(function(todo){
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });

};