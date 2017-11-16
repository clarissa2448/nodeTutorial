var http = require('http');
var formidable = require('formidable');

http.createServer(function(req, res){
	  if (req.url == '/fileupload') {
	    var form = new formidable.IncomingForm();
	    form.parse(req, function (err, fields, files) {
	      var oldpath = files.filetoupload.path;
	      var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
	      fs.rename(oldpath, newpath, function (err) {
	        if (err) throw err;
	        res.write('File uploaded and moved!');
	        res.end();
	      });
	 });
	} else{
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<form action = "fileupload" method = "post" enctype = "multipart/form-data">'); //creates form, uses html
		res.write('<input type = "file" name ="filetoupload"><br>'); //file name upload
		res.write('<input type = "submit">'); //submit form
		res.write('</form>');
		return res.end();
	}
}).listen(8080);