var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'clarissaxu24@gmail.com',
    pass: 'fogopengy'
  }
});

var mailOptions = {
  from: 'clarissaxu24@gmail.com.com',
  to: 'clarissa_xu24@outlook.com',
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