angular.module("authRoute",[])
    .run(authorization);

authorization.$inject = ['$rootScope', '$location']

var urlSecurity = {
  pagamento:"/partials/pagamento/pagamento.tpl.html",
  minhaConta:"/partials/minhaconta/minha_conta.tpl.html",
  meusFilmes:"/partials/meusfilmes/meus_filmes.tpl.html",
}

function authorization($rootScope, $location)
{
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
    $rootScope.$broadcast('verifToken');
    if ($rootScope.token == null) {
        if(isRouteSecurity(next.templateUrl)){
            $('#myModal').modal('show');
            $location.path("/home");
        }
      }
    });
}

function isRouteSecurity(type){
  if(urlSecurity["pagamento"]===type||urlSecurity["minhaConta"]===type
   ||urlSecurity["meusFilmes"]===type){
    return true;
  }
  return false;
}




