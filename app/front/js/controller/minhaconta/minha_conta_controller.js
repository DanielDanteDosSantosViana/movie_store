angular.module("MovieStoreController").controller("MinhaContaPresenter", [
    "$scope",
    "$routeParams",
    "$location",
    "MovieStoreService",
    function($scope, $routeParams,$location,MovieStoreService)
    {

        var editar = function()
        {

          if(preenchimentoObrigatorio()){
             $scope.error = "Preencher todos os campos obrigatórios!";

              if(validarSenha()){
                  var usuario = new Usuario($scope.nome,
                                    $scope.sobrenome,
                                    $scope.email,
                                    $scope.senha,
                                    $routeParams.idUser);

                  MovieStoreService.editarUsuario(
                      function(data)
                      {
                        alert("Usuário atualizado com sucesso!");
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
          if(($scope.senha!="" && $scope.senha!= undefined) && ($scope.email!="" && $scope.email!= undefined) && ($scope.confirma_senha!="" && $scope.confirma_senha!= undefined)){
            return true;
          }
          return false;
        }

        var loadUser = function(){
          MovieStoreService.getUserById(
              function(data){
                $scope.nome = data.nome;
                $scope.email = data.email;
                $scope.sobrenome = data.sobrenome;
            }, function(error){
                alert("Usuário não encontrado!");
                $location.path('/home')

            }, $routeParams.idUser
          );
        }

        //construtor
        {
            $scope.nome;
            $scope.sobrenome;
            $scope.email;
            $scope.senha;
            $scope.confirma_senha;
            $scope.aceite;
            $scope.command = editar;
            loadUser();


        };
    }
]);
