angular.module("MovieStoreController").controller("HeaderPresenter", [
    "$rootScope",
    "$scope",
    "$routeParams",
    "MovieStoreService",
    function($rootScope,$scope, $routeParams,MovieStoreService)
    {

        $rootScope.$on('addItemCarrinho', function () {
          $scope.carrinho = $scope.carrinho+1;
         });




      {
        $scope.carrinho = 0;
        //$scope.adicionarCarrinho = adicionarCarrinho;
      };
    }
]);
