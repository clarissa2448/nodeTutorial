var formidable = require('formidable');
//Creating an upload form
var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'}); //sets as HTML
	res.write('<form action = "fileupload" method = "post" enctype = "multipart/form-data">'); //creates form, uses html
	res.write('<input type = "file" name ="filetoupload"><br>'); //file name upload
	res.write('<input type = "submit">'); //submit form
	res.write('</form>');
	return res.end();
}).listen(8080);