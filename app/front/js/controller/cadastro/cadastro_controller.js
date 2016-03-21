angular.module("MovieStoreController").controller("CadastroPresenter", [
    "$scope",
    "$routeParams",
    "MovieStoreService",
    function($scope, $routeParams,MovieStoreService)
    {

        var cadastrar = function()
        {

          if(preenchimentoObrigatorio()){
             $scope.error = "Preencher todos os campos obrigatórios!";

              if(validarSenha()){
                  var usuario = new Usuario($scope.nome,
                                    $scope.sobrenome,
                                    $scope.email,
                                    $scope.senha);

                  MovieStoreService.criarUsuario(
                      function(data)
                      {
                        alert(data);
                      },

                      function(data) {
                          $scope.response = data;
                      },

                      usuario
                   );
              }else{
                $scope.senha="";
                $scope.confirma_senha="";
                alert("confirmação de senha inválida!");
              }
          }

        };

        function validarSenha(){
          if($scope.senha==$scope.confirma_senha){
            return true;
          }
          return false;
        }

       function preenchimentoObrigatorio(){
          if(($scope.senha!="" && $scope.senha!= undefined) && ($scope.email!="" && $scope.email!= undefined) && ($scope.confirma_senha!="" && $scope.confirma_senha!= undefined) && ($scope.aceite!="" && $scope.aceite!= undefined)){
            return true;
          }
          return false;
        }

        //construtor
        {
            $scope.nome;
            $scope.sobrenome;
            $scope.email;
            $scope.senha;
            $scope.confirma_senha;
            $scope.aceite;
            $scope.command = cadastrar;


        };
    }
]);
