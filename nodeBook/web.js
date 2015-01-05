var http = require("http");

function process_request(req, res){
	var body = 'Thanks';
	var content_length = body.leength;
	res.writeHead(200, {
	'Content-Length': content_length,
	'Content-type' : 'text/plain'
	});
	res.end(body);
}

var s = http.createServer(process_request);
s.listen(8080);

