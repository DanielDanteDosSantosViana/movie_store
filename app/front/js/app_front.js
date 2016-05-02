
/* APP */
angular.module("MovieStoreModuloServices", []);
angular.module("MovieStoreController", []);
angular.module("repeat", []);
angular.module("authRoute", []);


var app = angular.module('moviestore', [
  'ngRoute',
  'MovieStoreController',
  'MovieStoreModuloServices',
  'repeat',
  'authRoute']);

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

  $routeProvider.when('/pagamento',
      {
        templateUrl:'/partials/pagamento/pagamento.tpl.html',
      });

    $routeProvider.when('/404',
      {
        templateUrl:'/partials/notfound/404.tpl.html',
      });


 $routeProvider.when('/meusFilmes/:idUser',
      {
        templateUrl:'/partials/meusfilmes/meus_filmes.tpl.html',
      });

 $routeProvider.otherwise({redirectTo:'/404'});



});
