angular.module("MovieStoreController").controller("MaisVistosGeneroPresenter", [
    "$scope",
    "$routeParams",
    "MovieStoreService",
    function($scope, $routeParams,MovieStoreService)
    {

        var buscarMaisVistos = function()
        {

          MovieStoreService.buscarMaisVistos(
              function(movies)
              {
                  $scope.movies = movies;

              },

              function(data) {
                  $scope.response = data;
              }
           );
        };

        //construtor
        {
            buscarMaisVistos();
        };
    }
]);
