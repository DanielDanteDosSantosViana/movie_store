angular.module("MovieStoreController").controller("PagamentoPresenter", [
    "$scope",
    "$routeParams",
    "$location",
    "$rootScope",
    "MovieStoreService",
    function($scope, $routeParams,$location,$rootScope,MovieStoreService)
    {

        var movies = $rootScope.carrinho;
        var aluguel = new Aluguel(new Date(),null,movies);
        var pagar = function(){
            MovieStoreService.finalizar(
            function(data){


            },function(data){


            },
            aluguel);
        }


        {
            $scope.command = pagar;
            $scope.numeroCVV;
            $scope.bandeira;
            $scope.validade;
        };
    }
]);
