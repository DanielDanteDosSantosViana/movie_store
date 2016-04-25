angular.module("MovieStoreController").controller("CarrinhoPresenter", [
    "$rootScope",
    "$scope",
    "$routeParams",
    "MovieStoreService",
    function($rootScope,$scope, $routeParams,MovieStoreService)
    {

       var removeItem = function(movie){
            $rootScope.$broadcast('removeItemCarrinho',movie);
            loadTotal();
        };

        var loadCarrinho = function(){
            $scope.movies =  $rootScope.carrinho;

        };
        var loadTotal = function(){
            var preco = 0.0;
            for(var i = 0; i < $rootScope.carrinho.length; ++i){
                preco+=parseFloat($rootScope.carrinho[i].preco.replace(',', '.'));
            }

            var arredondado = preco.toFixed(2)
            $scope.total = arredondado.toString().replace('.', ',') ;
        }

        //construtor
        {

            $scope.removeItem = removeItem;
            loadCarrinho();
            loadTotal();



        };
    }
]);
