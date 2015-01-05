var express = require('express'),
	bodyParser = require('body-parser'),
	app     = express();


// app.get('/', function(req, res){
// 	res.send('hello express');
// });

// app.listen(3000, function(){
// 	console.log('3000');
// });


app.use(bodyParser.urlencoded());

var names= [];

app.get('/', function(req, res){
	res.render('index.jade', { names: names });
});
app.post('/', function(req, res){
	names.push(req.body.name);
	res.redirect('/');
});
app.listen(3000, function(){
	console.log('3000');
});
