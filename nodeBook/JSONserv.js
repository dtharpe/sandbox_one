var http = require('http');

function handle_incoming_request(req, res){
	console.log("Incoming Request: " + req.method + " " + req.url );
	res.writeHead(200, {"Content-type" : "application/json"});
	res.end(JSON.stringify({error: null}) + "\n");
}

var s =  http.createServer(handle_incoming_request);
s.listen(8080);
