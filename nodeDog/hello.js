var http = require('http');//include library

http.createServer(function(request, response){
  response.writeHead(200);//status code 
  response.write("Hello, this is dog"); //response body

  setTimeout(function(){
  	response.write("Dog is Done");
  	response.end();//close connnection
  }, 5000);
  
}).listen(8080); //port

console.log('Listening on port 8080');

