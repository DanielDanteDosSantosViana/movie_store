var express = require('express'),
    jwt        = require("jwt-simple"),
    router = express.Router();


var mongoose = require('../db/mongoose');


//MOVIE
var MovieStoreModel = require('../models/MovieStoreModel')(mongoose);
var MovieStoreController = require('../controllers/MovieStoreController')(MovieStoreModel);

//GENERO
var GeneroModel = require('../models/GeneroModel')(mongoose);
var GeneroController = require('../controllers/GeneroController')(GeneroModel);

//EMAIL
var EmailController = require('../controllers/EmailController')();

//Usuario
var UsuarioModel = require('../models/UsuarioModel')(mongoose);
var UsuarioController = require('../controllers/UsuarioController')(UsuarioModel);

//Aluguel
var AluguelModel = require('../models/AluguelModel')(mongoose);
var AluguelController = require('../controllers/AluguelController')(AluguelModel);

var ensureAuthorized = require('../authorized/authorized.js');





/*
  ROTAS
*/
router.get('/movies', MovieStoreController.getAll.bind(MovieStoreController));
router.get('/generos', GeneroController.retrievingThreePerCategory.bind(GeneroController));

router.get('/generos/tipos/total', GeneroController.contarTipos.bind(GeneroController));


router.get('/generos/:genero', GeneroController.findPerCategory.bind(GeneroController));
router.get('/mais_vistos', MovieStoreController.maisVistos.bind(MovieStoreController));
router.post('/search', MovieStoreController.search.bind(MovieStoreController));
router.get('/lancamentos',MovieStoreController.getLancamentos.bind(MovieStoreController));


router.post('/email/sendContato', EmailController.sendContato.bind(EmailController));
router.get('/movie/:_id', MovieStoreController.getById.bind(MovieStoreController));
router.get('/usuario/:id', UsuarioController.getById.bind(UsuarioController));
router.post('/usuario/editar', UsuarioController.editar.bind(UsuarioController));
router.post('/usuario/criar',UsuarioController.criar.bind(UsuarioController));
router.post('/login',UsuarioController.login.bind(UsuarioController));

router.get('/aluguel/:id',AluguelController.findByUserId.bind(AluguelController));
router.post('/aluguel',AluguelController.alugar.bind(AluguelController));

module.exports = router;
