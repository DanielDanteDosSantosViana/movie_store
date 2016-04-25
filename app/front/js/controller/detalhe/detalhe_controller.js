angular.module("MovieStoreController").controller("DetalheMoviePresenter", [
    "$rootScope",
    "$scope",
    "$routeParams",
    "MovieStoreService",
    function($rootScope,$scope, $routeParams,MovieStoreService)
    {

        var addItem = function(movie){
          $rootScope.$broadcast('addItemCarrinho',movie);
        };

        var detalheMovie = function()
        {

          MovieStoreService.getDetalheMovie(
              function(movie)
              {
                  $scope.movie = movie;

              },

              function(data) {
                  $scope.response = data;
              },
              $scope.idMovie
           );

          $scope.getTimes = function(n){
                            return new Array(n);
                  };

        };

        //construtor
        {
            $scope.idMovie = $routeParams.idMovie;
            $scope.addItem = addItem;
            detalheMovie();
        };
    }
]);
