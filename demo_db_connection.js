var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
  user: "Clarissa Xu",
  password: "pvZ5GeoNqe"
});
con.connect(function(err){
	if (err) console.log(err);
	console.log("Connected!");
});