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
            verificarSeCarrinhoPossuiProduto();
            checkAuth();

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

        var verificarSeCarrinhoPossuiProduto = function(){
            if($rootScope.carrinho!=null && $rootScope.carrinho.length > 0){
                  $scope.possuiProdutos = true;
            }else{
                $scope.possuiProdutos = false;

            }
        }

        var checkAuth = function(){
         if($rootScope.token==null){
            $scope.possuiProdutos = false;
         }
        }

        var openModal = function(){
            if($rootScope.token==null){
                 $('#myModal').modal('show');
            }
        }

        //construtor
        {
            $scope.removeItem = removeItem;
            $scope.possuiProdutos = false;
            $scope.openModal = openModal;
            loadCarrinho();
            loadTotal();
            verificarSeCarrinhoPossuiProduto();
            checkAuth();

        };
    }
]);
