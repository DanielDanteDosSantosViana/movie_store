angular.module("authRoute",[])
    .run(authorization);

authorization.$inject = ['$rootScope', '$location']

var urlSecurity = {
  pagamento:"/partials/pagamento/pagamento.tpl.html",
  minhaconta:"/partials/minhaconta/minha_conta.tpl.html",
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
  if(urlSecurity["pagamento"]===type||urlSecurity["minhaconta"]===type){
    return true;
  }
  return false;
}




