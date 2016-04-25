
/* APP */
angular.module("MovieStoreModuloServices", []);
angular.module("MovieStoreController", []);
angular.module("repeat", []);

var app = angular.module('moviestore', [
  'ngRoute',
  'MovieStoreController',
  'MovieStoreModuloServices',
  'repeat']);

app.config(function($routeProvider){

  $routeProvider.when('/home',
      {
        templateUrl:'/partials/row_movies_type.tpl.html',

      });

  $routeProvider.when('/',
      {
        templateUrl:'/partials/row_movies_type.tpl.html',
      });

  $routeProvider.when('/sobre',
      {
        templateUrl:'/partials/sobre/sobre.tpl.html',
      });

  $routeProvider.when('/contato',
      {
        templateUrl:'/partials/contact/contact.tpl.html',
      });

  $routeProvider.when('/lancamentos',
      {
        templateUrl:'/partials/lancamentos/lancamento.tpl.html',
      });

  $routeProvider.when('/mais_vistos',
      {
        templateUrl:'/partials/mais_vistos/mais_vistos.tpl.html',
      });

  $routeProvider.when('/genero/:genero',
      {
        templateUrl:'/partials/buscaPorGenero/genero.tpl.html',
      });

  $routeProvider.when('/search/:q',
      {
        templateUrl:'/partials/search/search.tpl.html',
      });

  $routeProvider.when('/cadastro',
      {
        templateUrl:'/partials/cadastro/cadastro.tpl.html',
      });

 $routeProvider.when('/detalhe/:idMovie',
      {
        templateUrl:'/partials/detalhe/detalhe.tpl.html',
      });

 $routeProvider.when('/meucarrinho',
      {
        templateUrl:'/partials/carrinho/carrinho.tpl.html',
      });

 $routeProvider.when('/minhaconta/:idUser',
      {
        templateUrl:'/partials/minhaconta/minha_conta.tpl.html',
      });

 $routeProvider.otherwise({redirectTo:'/'});

});
