angular.module("MovieStoreController").controller("PagamentoPresenter", [
    "$scope",
    "$routeParams",
    "$location",
    "$rootScope",
    "MovieStoreService",
    function($scope, $routeParams,$location,$rootScope,MovieStoreService)
    {

        var movies = $rootScope.carrinho;
        var aluguel = new Aluguel(new Date(),null,movies,$rootScope.idUser);
        var pagar = function(){
            MovieStoreService.finalizar(
            function(data){
                if(data=="OK"){
                    alert("Pagamento Efetuado com Sucesso! Você tem 1 semana para assitir os filmes!");
                    $rootScope.$broadcast('removeAll');
                    $location.path("/meusFilmes/"+$rootScope.idUser);
                }
            },function(data){

                alert("Ocorreu um erro ao efetuar o seu pagamento! =(")
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
