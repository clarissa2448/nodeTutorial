var http = require('http');
var url = require('url'); //requires url module

http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query; //parses or scans through url
	var txt = q.year + " " + q.month; //gets the vlues for year and month
	console.log(q.host); //returns 'localhost:8080'
	console.log(q.pathname); //returns '/default.htm'
	console.log(q.search); //returns '?year=2017&month=february'

	res.end(txt);
}).listen(8080);
//local host format: http://localhost:8080/?year=2017&month=July