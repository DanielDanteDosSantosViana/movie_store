angular.module("MovieStoreController").controller("BuscadorGeneroPresenter", [
    "$scope",
    "$routeParams",
    "MovieStoreService",
    function($scope, $routeParams,MovieStoreService)
    {

        var buscarGenero = function()
        {

          MovieStoreService.buscarGenero(
              function(genero)
              {
                  $scope.genero = genero[0];

              },

              function(data) {
                  $scope.response = data;
              },
              $scope.generoTipo
           );
        };

        //construtor
        {
            $scope.generoTipo = $routeParams.genero;
            buscarGenero();
        };
    }
]);
