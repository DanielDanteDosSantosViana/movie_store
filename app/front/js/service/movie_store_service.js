angular.module("MovieStoreModuloServices").factory("MovieStoreService", [
    "$http","$rootScope",
    function($http,$rootScope)
    {
        function MovieStoreServiceObject()
        {
            var self = this;

            self.listarFilmes = function(fn_success, fn_error)
            {
                $http({
                    method: "GET",
                    url: "/movie_store/movies",
                    cache: false,
                    responseType: "json"
                }).
                success(function(data , status , headers, config)
                {
                    if(data.erro != null)
                    {
                        fn_error(data.erro);
                    }
                    else if (data.resposta == null)
                    {
                        fn_error("NULL response.");
                    }
                    else
                    {
                        var movies = [];

                         if(data.resposta != null){

                            for(var i = 0; i < data.resposta.length; ++i)
                            {
                              var estrelas = [];

                              if(data.resposta[i].qtdEstrela != 0){
                                for(var j = 0; j < data.resposta[i].qtdEstrela; ++j){
                                    estrelas.push(j);
                                }
                              }

                                movies.push(new Movie(
                                    data.resposta[i]._id,
                                    data.resposta[i].nome,
                                    data.resposta[i].preco,
                                    data.resposta[i].genero,
                                    estrelas,
                                    data.resposta[i].qtdVisualizacao,
                                    data.resposta[i].descricao,
                                    data.resposta[i].urlImg
                                ));

                            }
                        }

                        fn_success(movies);
                    }
                    $rootScope.$broadcast('verifToken');

                }).error(function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            },

            self.listarGeneros = function(fn_success, fn_error)
            {
                $http({
                    method: "GET",
                    url: "/movie_store/generos",
                    cache: false,
                    responseType: "json"
                }).
                success(function(data , status , headers, config)
                {
                    if(data.erro != null)
                    {
                        fn_error(data.erro);
                    }
                    else if (data.resposta == null)
                    {
                        fn_error("NULL response.");
                    }
                    else
                    {


                        fn_success(data.resposta);

                    }

                }).error(function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            },

            self.contarGrupos = function(fn_success, fn_error)
            {
                $http({
                    method: "GET",
                    url: "/movie_store/generos/tipos/total",
                    cache: false,
                    responseType: "json"
                }).
                success(function(data , status , headers, config)
                {
                    if(data.erro != null)
                    {
                        fn_error(data.erro);
                    }
                    else if (data.resposta == null)
                    {
                        fn_error("NULL response.");
                    }
                    else
                    {
                       var generos = [];
                       for(var i = 0; i < data.resposta.length; ++i){

                           generos.push(new Genero(data.resposta[i]._id,data.resposta[i].nome,data.resposta[i].count));

                        }

                         fn_success(generos);
                    }

                }).error(function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            },

            self.buscarGenero = function(fn_success, fn_error,genero)
            {
                $http({
                    method: "GET",
                    url: "/movie_store/generos/"+genero,
                    cache: false,
                    responseType: "json"
                }).
                success(function(data , status , headers, config)
                {
                    if(data.erro != null)
                    {
                        fn_error(data.erro);
                    }
                    else if (data.resposta == null)
                    {
                        fn_error("NULL response.");
                    }
                    else
                    {
                         fn_success(data.resposta);
                    }

                }).error(function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            },

            self.buscarMaisVistos = function(fn_success, fn_error,genero)
            {
                $http({
                    method: "GET",
                    url: "/movie_store/mais_vistos",
                    cache: false,
                    responseType: "json"
                }).
                success(function(data , status , headers, config)
                {
                    if(data.erro != null)
                    {
                        fn_error(data.erro);
                    }
                    else if (data.resposta == null)
                    {
                        fn_error("NULL response.");
                    }
                    else
                    {
                         fn_success(data.resposta);
                    }

                }).error(function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            },

            self.buscar = function(fn_success, fn_error, param)
            {

                $http({
                    method: "POST",
                    url: "/movie_store/search",
                    data: {q :param },
                    cache: false,
                    responseType: "json"
                }).
                success(function(data , status , headers, config)
                {
                    if(data.erro != null)
                    {
                        fn_error(data.erro);
                    }
                    else if (data.resposta == null)
                    {
                        fn_error("NULL response.");
                    }
                    else
                    {

                        fn_success(data.resposta);
                    }

                }).error(function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            },

           self.getLancamentos = function(fn_success, fn_error)
            {

                $http({
                    method: "GET",
                    url: "/movie_store/lancamentos",
                    cache: false,
                    responseType: "json"
                }).
                success(function(data , status , headers, config)
                {
                    if(data.erro != null)
                    {
                        fn_error(data.erro);
                    }
                    else if (data.resposta == null)
                    {
                        fn_error("NULL response.");
                    }
                    else
                    {


                        fn_success(data.resposta);
                    }

                }).error(function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            },

           self.sendContato = function(fn_success, fn_error,user)
            {

                $http({
                    method: "POST",
                    url: "/movie_store/email/sendContato",
                    data:{useremail:{nome:user.nome, sobrenome:user.sobrenome, telefone:user.telefone, email:user.email, body:user.msg}},
                    cache: false,
                    responseType: "json"
                }).
                success(function(data , status , headers, config)
                {
                    if(data.erro != null)
                    {
                        fn_error(data.erro);
                    }
                    else if (data.resposta == null)
                    {
                        fn_error("NULL response.");
                    }
                    else
                    {


                        fn_success(data.resposta);
                    }

                }).error(function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            },

            self.criarUsuario = function(fn_success, fn_error, user)
            {

                $http({
                    method: "POST",
                    url: "/movie_store/usuario/criar",
                    data:{usuario:{nome:user.nome, sobrenome:user.sobrenome, email:user.email, senha:user.senha}},
                    cache: false,
                    responseType: "json"
                }).
                success(function(data , status , headers, config)
                {
                    if(data.erro != null)
                    {
                        fn_error(data.erro);
                    }
                    else if (data.resposta == null)
                    {
                        fn_error("NULL response.");
                    }
                    else
                    {

                        fn_success(data.resposta);
                    }

                }).error(function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            },

           self.login = function(fn_success, fn_error,_email,_senha)
            {
                $http({
                    method: "POST",
                    url: "/movie_store/login",
                    cache: false,
                    data:{email:_email,senha:_senha},
                    responseType: "json"
                }).
                success(function(data , status , headers, config)
                {
                    if(data.erro != null)
                    {
                        fn_error(data.erro);
                    }
                    else if (data.resposta == null)
                    {
                        fn_error("NULL response.");
                    }
                    else
                    {

                        fn_success(data.resposta);


                    }


                }).error(function(data, status, headers, config) {
                  fn_error(data);
                  });
            },

           self.getDetalheMovie = function(fn_success, fn_error,id)
            {

                $http({
                    method: "GET",
                    url: "/movie_store/movie/"+id,
                    cache: false,
                    responseType: "json"
                }).
                success(function(data , status , headers, config)
                {
                    if(data.erro != null)
                    {
                        fn_error(data.erro);
                    }
                    else if (data.resposta == null)
                    {
                        fn_error("NULL response.");
                    }
                    else
                    {


                        fn_success(data.resposta);
                    }

                }).error(function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            },

           self.getUserById = function(fn_success, fn_error,id)
            {

                $http({
                    method: "GET",
                    url: "/movie_store/usuario/"+id,
                    cache: false,
                    responseType: "json"
                }).
                success(function(data , status , headers, config)
                {
                    if(data.erro != null)
                    {
                        fn_error(data.erro);
                    }
                    else if (data.resposta == null)
                    {
                        fn_error("NULL response.");
                    }
                    else
                    {


                        fn_success(data.resposta);
                    }

                }).error(function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            },
            self.editarUsuario = function(fn_success, fn_error, user)
            {

                $http({
                    method: "POST",
                    url: "/movie_store/usuario/editar",
                    data:{usuario:{nome:user.nome, sobrenome:user.sobrenome, email:user.email, senha:user.senha , id: user.id}},
                    cache: false,
                    responseType: "json"
                }).
                success(function(data , status , headers, config)
                {
                    if(data.erro != null)
                    {
                        fn_error(data.erro);
                    }
                    else if (data.resposta == null)
                    {
                        fn_error("NULL response.");
                    }
                    else
                    {

                        fn_success(data.resposta);
                    }

                }).error(function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            },
            self.finalizar = function(fn_success, fn_error, aluguel)
            {

                $http({
                    method: "POST",
                    url: "/movie_store/aluguel",
                    data:JSON.stringify({aluguel:{aluguel}}),
                    cache: false,
                    responseType: "json"
                }).
                success(function(data , status , headers, config)
                {
                    if(data.erro != null)
                    {
                        fn_error(data.erro);
                    }
                    else if (data.resposta == null)
                    {
                        fn_error("NULL response.");
                    }
                    else
                    {

                        fn_success(data.resposta);
                    }

                }).error(function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            },
            self.buscarMeusFilmes = function(fn_success, fn_error, idUser)
            {

                $http({
                    method: "GET",
                    url: "/movie_store/aluguel/"+idUser,
                    cache: false,
                    responseType: "json"
                }).
                success(function(data , status , headers, config)
                {
                    if(data.erro != null)
                    {
                        fn_error(data.erro);
                    }
                    else if (data.resposta == null)
                    {
                        fn_error("NULL response.");
                    }
                    else
                    {

                        fn_success(data.resposta);
                    }

                }).error(function(data, status, headers, config) {
                  fn_error("AJAX ERROR:\n" + config.method + ": " + config.url + "\nstatus: " + status + "\nresponse: " + angular.toJson(data, true));
                  });
            };


        }

         return new MovieStoreServiceObject();
    }


]);


