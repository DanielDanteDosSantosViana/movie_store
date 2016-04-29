angular.module("MovieStoreController").controller("LoginPresenter", [
    "$scope",
    "$rootScope",
    "$location",
    "$routeParams",
    "MovieStoreService",
    function($scope,$rootScope,$location, $routeParams, MovieStoreService)
    {
        var login = function()
        {
          if(validarCampos()){

           MovieStoreService.login(
              function(data)
              {
                  $rootScope.token = data.token;
                  $rootScope.idUser = data.id;
                  close();
                  $scope.email = null;
                  $scope.senha = null;
                 // $location.path('/home')
              },
              function(data) {
                  alert(data.err);
                  $scope.response = data;
              },
              $scope.email,
              $scope.senha
           );
         }

        };

          var close = function()
          {
             $('#myModal').modal('hide')
             $location.path("/");
          };

        function validarCampos(){
          if($scope.email != null && $scope.email != ''
                && $scope.senha != null && $scope.senha != '' ){
              return true;
          }
          return false;
        };

        {
            $scope.email = null;
            $scope.senha = null;
            $scope.login = login;
            $scope.close = close;
        };
    }
]);
