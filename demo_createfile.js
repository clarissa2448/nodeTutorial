var fs = require('fs');

//creates file
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) { //append adds specific content to a file
  //will create file if it doesn't previously exist
  if (err) throw err; //if there's an error
  console.log('Saved!');
});

//opens file
fs.open('mynewfile2.txt', 'w', function (err, file) { //w for writing
  if (err) throw err;
  console.log('Saved!');
});

//Replaces specified file and content or creates new file with specified content
fs.writeFile('mynewfile3.txt', 'Hello Content!', function(err){
	if (err) throw err;
	console.log('Saved!!');
});

//updating files
fs.appendFile('mynewfile1.txt', 'This is my text.', function(err){
	if (err) throw err;
	console.log('Updated');
});

//Deleting files
fs.unlink('mynewfile2.txt', function(err){
	if (err) throw err;
	console.log('FIle deleted!');
});
//Rename files
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err){
	if (err) throw err;
	console.log('FIle renamed!');
})