var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
  // user: "ClarissaXu",
  // password: "pvZ5GeoNqe"
  	user: "ClarissaXu",
  	password: "Fogo&yam24"
});
con.connect(function(err){
	if (err) throw err;
	console.log("Connected!");
});