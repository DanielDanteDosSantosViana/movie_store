angular.module("MovieStoreController").controller("LancamentoPresenter", [
    "$scope",
    "$routeParams",
    "MovieStoreService",
    function($scope, $routeParams,MovieStoreService)
    {

        var buscarLancamentos = function()
        {

          MovieStoreService.getLancamentos(
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
            buscarLancamentos();
        };
    }
]);
