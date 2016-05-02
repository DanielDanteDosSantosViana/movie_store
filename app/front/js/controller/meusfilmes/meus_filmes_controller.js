angular.module("MovieStoreController").controller("MeusFilmesPresenter", [
    "$scope",
    "$routeParams",
    "MovieStoreService",
    function($scope, $routeParams,MovieStoreService)
    {

        var buscarMeusFilmes = function()
        {

          MovieStoreService.buscarMeusFilmes(
              function(aluguel)
              {

              var movies = [];
              for(var i = 0; i < aluguel.length; ++i){
                for(var j = 0; j < aluguel[i].movies.length; ++j){
                     movies.push(aluguel[i].movies[j]);
                }
              }

               $scope.movies = movies;

              },
              function(data) {
                  $scope.response = data;
              },
              $routeParams.idUser
           );
        };

        //construtor
        {
            buscarMeusFilmes();
        };
    }
]);
