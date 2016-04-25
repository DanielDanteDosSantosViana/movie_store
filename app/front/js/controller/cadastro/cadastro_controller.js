angular.module("MovieStoreController").controller("CadastroPresenter", [
    "$scope",
    "$routeParams",
    "$location",
    "MovieStoreService",
    function($scope, $routeParams,$location,MovieStoreService)
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
                        alert("Usuário Cadastrado com Sucesso!");
                        $location.path("/home");
                      },

                      function(data) {
                          alert("Error no cadastro!")
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
          if(($scope.senha!="" && $scope.senha!= undefined) && ($scope.email!="" && $scope.email!= undefined) && ($scope.confirma_senha!="" && $scope.confirma_senha!= undefined)){
            return true;
          }
          return false;
        }

        //construtor
        {
            $scope.nome = null;
            $scope.sobrenome = null;
            $scope.email =null;
            $scope.senha = null;
            $scope.confirma_senha = null;
            $scope.command = cadastrar;


        };
    }
]);
