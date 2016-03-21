angular.module("MovieStoreController").controller("CarrinhoPresenter", [
    "$rootScope",
    "$scope",
    "$routeParams",
    "MovieStoreService",
    function($rootScope,$scope, $routeParams,MovieStoreService)
    {

       var addItem = function(){
            $rootScope.$broadcast('addItemCarrinho');
         }

        //construtor
        {

            $scope.addItem = addItem;


        };
    }
]);
