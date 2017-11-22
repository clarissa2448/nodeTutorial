// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
// 	service: 'gmail',
// 	auth: {
// 		user: 'clarissaxu24@gmail.com',
// 		pass: 'fogopengy'
// 	}
// 	});
// var mailOptions = {
// 	from: 'clarissaxu24@gmail.com',
// 	to: 'clarissa_xu24@outlook.com, xucl@northvilleschools.net', 
// 	subject: "Sent from noooode",
// 	text: "wowza"
// };
// transporter.sendMail(mailOptions, function(error, info){
// 	if (error){
// 		console.log(error);
// 	}
// 	else{
// 		console.log('Email sent: ' + info.response);
// 	}
// })
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xucl@northvilleschools.net',
    pass: 'ducky10mez'
  }
});

var mailOptions = {
  from: 'xucl@northvilleschools.net',
  to: 'clarissaxu24@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});