angular.module("MovieStoreController").controller("ContatoPresenter", [
    "$scope",
    "$routeParams",
    "MovieStoreService",
    function($scope, $routeParams,MovieStoreService)
    {

        var sendEmail = function()
        {

          if(preenchimentoObrigatorio()){

             var user = new UserEmail($scope.nome,
                            $scope.sobrenome,
                            $scope.telefone,
                            $scope.email,
                            $scope.msg);


          MovieStoreService.sendContato(
              function(resposta)
              {
                alert(resposta);
                $scope.nome = "";
                $scope.sobrenome="";
                $scope.telefone="";
                $scope.email="";
                $scope.msg ="";
              },

              function(data) {
                alert(data);
              },
              user
           );
        }else{
          alert("Por favor , preencha todos os campos da tela para que possamos entrar em contato!");
        }
        };

        function preenchimentoObrigatorio(){
          if(($scope.nome!="" && $scope.nome!= undefined) && ($scope.email!="" && $scope.email!= undefined) && ($scope.msg!="" && $scope.msg!= undefined) && ($scope.telefone!="" && $scope.telefone!= undefined)){

            return true;
          }
          return false;
        }

        //construtor
        {
            $scope.nome;
            $scope.sobrenome;
            $scope.telefone;
            $scope.email;
            $scope.msg;
            $scope.command = sendEmail;

        };
    }
]);
