angular.module("MovieStoreController").controller("GenerosPresenter", [
    "$scope",
    "$routeParams",
    "MovieStoreService",
    function($scope, $routeParams,MovieStoreService)
    {

        var contarGeneros = function()
        {

          MovieStoreService.contarGrupos(
              function(generos)
              {
                 if(generos[0]!=null){
                    $scope.genero_acao_total = generos[0].total;
                 }else{
                    $scope.genero_acao_total = 0;
                 }

                 if(generos[1]!=null){
                    $scope.genero_animacao_total = generos[1].total;
                 }else{
                    $scope.genero_animacao_total  = 0;
                 }

                 if(generos[2]!=null){
                    $scope.genero_documentario_total = generos[2].total;
                 }else{
                    $scope.genero_documentario_total = 0;
                 }

                 if(generos[3]!=null){
                     $scope.genero_drama_total = generos[3].total;
                 }else{
                    $scope.genero_drama_total = 0;
                 }

                 if(generos[4]!=null){
                    $scope.genero_ficcao_total = generos[4].total;
                 }else{
                     $scope.genero_ficcao_total = 0;
                 }

                 if(generos[5]!=null){
                    $scope.genero_infantil_total = generos[5].total;
                 }else{
                    $scope.genero_infantil_total = 0;
                 }

              },

              function(data) {
                  $scope.response = data;
              }
           );
        };

        //construtor
        {
            contarGeneros();
        };
    }
]);
