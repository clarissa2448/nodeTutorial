var http = require('http'); //mehtod to create an http server
//create a server object (.createServer)
http.createServer(function (req, res) { //req represents request from client
	res.writeHead(200, {'Content-Type': "text/html"}); //adds html header
	res.write('Hello World!'); //WRITE resposne to client
	res.write(req.url); //holds part of url after domain
	res.end(); //end response
}).listen(8080); //listens ob port 8080