var http = require('http'); //accesses the HTTP module
var dt = require('./myfirstmodule'); //including my own module
//.create creates a server object
http.createServer(function (req, res){
	res.writeHead(200, {'Content_Type': 'text/html'});
	res.write("The date and time are currently: " + dt.myDateTime());
	res.end();
}).listen(8080);

