var express = require('express'),
    router = express.Router();


var mongoose = require('../db/mongoose');


//MOVIE CONTROLLER AND MODEL
var MovieStoreModel = require('../models/MovieStoreModel')(mongoose);
var MovieStoreController = require('../controllers/MovieStoreController')(MovieStoreModel);

//GENERO CONTROLLER AND MODEL
var GeneroModel = require('../models/GeneroModel')(mongoose);
var GeneroController = require('../controllers/GeneroController')(GeneroModel);

//EMAIL CONTROLLER
var EmailController = require('../controllers/EmailController')();

//Usuario CONTROLLER
var UsuarioModel = require('../models/UsuarioModel')(mongoose);
var UsuarioController = require('../controllers/UsuarioController')(UsuarioModel);

//
var ensureAuthorized = require('../authorized/authorized.js');






router.get('/movies', MovieStoreController.getAll.bind(MovieStoreController));

router.get('/generos', GeneroController.retrievingThreePerCategory.bind(GeneroController));

router.get('/generos/tipos/total', GeneroController.contarTipos.bind(GeneroController));

router.get('/generos/:genero', GeneroController.findPerCategory.bind(GeneroController));

router.get('/mais_vistos', MovieStoreController.maisVistos.bind(MovieStoreController));

router.post('/search', MovieStoreController.search.bind(MovieStoreController));

router.get('/lancamentos',MovieStoreController.getLancamentos.bind(MovieStoreController));

router.post('/email/sendContato', EmailController.sendContato.bind(EmailController));

router.post('/usuario/criar',UsuarioController.criar.bind(UsuarioController));

router.get('/movie/:_id', MovieStoreController.getById.bind(MovieStoreController));


module.exports = router;
