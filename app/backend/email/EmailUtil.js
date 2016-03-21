var nodemailer = require('nodemailer');
var debug = require('debug')('movie_store:controller');

var handleNotFound = function(data) {
  if(!data) {
    var err = new Error('Not Found');
    err.status = 404;
    throw err;
  }
  return data;
};

function EmailUtil(rec,sen,subject,body) {

 this.sender = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'moviestorecefet@gmail.com',
    pass: 'cefet123456'
  }
 });

 this.receiver = {
  from: sen,
  to: rec,
  subject: subject,
  html: body
};


}

EmailUtil.prototype.send = function() {
  console.log(this.receiver);
  this.sender.sendMail(this.receiver, function(err, info){
    if(err)
      throw err; // Oops, algo de errado aconteceu.
    console.log('Email enviado! Leia as informações adicionais: ', info);
  });
};


module.exports = function(rec,sen,subject,body) {
  return new EmailUtil(rec,sen,subject,body);
};





