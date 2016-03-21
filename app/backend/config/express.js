var express         = require('express'),
    methodOverride  = require('method-override'),
    bodyParser      = require('body-parser'),
    app             = express();

var cons = require('consolidate');

    //config methods GET,POST,DELET,PUT
    app.use(methodOverride('X­HTTP­Method'));
    app.use(methodOverride('X­HTTP­Method­Override'));
    app.use(methodOverride('X­Method­Override'));
    app.use(methodOverride('_method'));

    //config BodyParse JSON
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));



    //static diretories
    app.engine('html', cons.swig);
    app.set('view engine','html');
    app.set('views',__dirname+'/../../front/html');

    app.use('/js', express.static(__dirname+'/../../front/js'));
    app.use('/css', express.static(__dirname+'/../../front/css'));
    app.use('/fonts', express.static(__dirname+'/../../front/fonts'));
    app.use('/bower', express.static(__dirname+'/../../front/bower_components'));
    app.use('/partials', express.static(__dirname+'/../../front/html/partials/'));

    app.use('/tmpl', express.static(__dirname+'/../../front/html/tmpl'));




    app.use(function (request, response, next) {
      if (request.url === '/favicon.ico') {
        response.writeHead(200, {'Content-Type': 'image/x-icon'});
        response.end('');
      } else {
        next();
      }
    });


module.exports = function(){
  return app;
}

