angular.module("MovieStoreController").controller("HeaderPresenter", [
    "$rootScope",
    "$scope",
    "$routeParams",
    "$location",
    "MovieStoreService",
    function($rootScope,$scope, $routeParams, $location , MovieStoreService)
    {

        $scope.$on('addItemCarrinho', function (events,args) {
          var existeFilmeNoCarrinho = false;
          if(args!=null){
              for(var i = 0; i < $rootScope.carrinho.length; ++i){
                  if($rootScope.carrinho[i]._id == args._id){
                     existeFilmeNoCarrinho = true;
                  }
              }
              if(!existeFilmeNoCarrinho){
                $rootScope.carrinho.push(args);
                $scope.carrinho = $scope.carrinho+1;
              }
            }

         });
        $scope.$on('removeItemCarrinho', function (events,movie) {
          if($scope.carrinho!= 0){
            for(var i = 0; i < $rootScope.carrinho.length; ++i){
                if($rootScope.carrinho[i]._id == movie._id){
                    $rootScope.carrinho.splice(i, 1);
                    $scope.carrinho = $scope.carrinho-1;
                }
            }

          }
         });

        $scope.$on('removeAll', function (events,args) {
          if($scope.carrinho!= 0){
            for(var i = 0; i < $rootScope.carrinho.length; ++i){
                    $rootScope.carrinho.splice(i, 1);
                    $scope.carrinho = $scope.carrinho-1;
            }

          }
         });

        $scope.$on('verifToken', function (events,args) {
          if($rootScope.token!=null){
            $scope.logado = true;
          }else{
            $scope.logado = false;
          }
         });

        var logout = function logout(){
          $rootScope.token = null;
          $rootScope.idUser = null;
          $scope.logado = false;
          $location.path('/home')

        }


      {
        $scope.carrinho = 0;
        $rootScope.carrinho = [];
        $scope.logado = false;
        $scope.logout = logout;
        $scope.idUser;
        //$scope.adicionarCarrinho = adicionarCarrinho;
      };
    }
]);
