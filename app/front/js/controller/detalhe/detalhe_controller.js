angular.module("MovieStoreController").controller("DetalheMoviePresenter", [
    "$scope",
    "$routeParams",
    "MovieStoreService",
    function($scope, $routeParams,MovieStoreService)
    {

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
            detalheMovie();
        };
    }
]);
