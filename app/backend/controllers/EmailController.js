var debug = require('debug')('movie_store:controller');
var emailUtil = require("../email/EmailUtil");

var handleNotFound = function(data) {
  if(!data) {
    var err = new Error('Not Found');
    err.status = 404;
    throw err;
  }
  return data;
};

function EmailController() {
}

EmailController.prototype.sendContato = function(request, response, next) {
  var useremail = request.body.useremail;
  emailUtil("moviestorecefet@gmail.com",useremail.email,"Contato -"+useremail.nome,useremail.body+" Enviado por :"+useremail.email).send();
  response.json({resposta:"Enviado com Sucesso!"});
};

EmailController.prototype.send = function(request, response, next) {
  var useremail = request.body.useremail;
  emailUtil.send(useremail.receiver,useremail.sender,useremail.subject,useremail.body);
};



module.exports = function() {
  return new EmailController();
};
