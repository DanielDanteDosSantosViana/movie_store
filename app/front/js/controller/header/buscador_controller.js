angular.module("MovieStoreController").controller("BuscadorHeaderPresenter", [
    "$scope",
    "$routeParams",
    "MovieStoreService",
    function($scope, $routeParams,MovieStoreService)
    {

        var buscar = function()
        {
          MovieStoreService.buscar(
              function(movies)
              {
                  $scope.movies = movies;

              },

              function(data) {
                  $scope.response = data;
              },
                $scope.param
           );
        };

        //construtor
        {
            $scope.param = $routeParams.q;
             buscar();
        };
    }
]);
