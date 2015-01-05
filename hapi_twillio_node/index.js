var Hapi = require('hapi');
var routes = require('./routes')(Hapi);
var server = Hapi.createServer('localhost', process.env.PORT || 3000);

server.route([{
	method: 'GET',
	//path: '/vote/sms',
	path: routes.voteSMS,
	handler: function(request, reply){
		reply('hello world');
	}
}]);

server.start();
