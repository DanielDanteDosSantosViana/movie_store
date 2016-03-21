db.movies.insert({"nome" : "Velozes & furiosos 7", "preco" : "10,90", "genero" : "ação", "descricao" :"A família de Toretto é ferozmente perseguida por um assassino que busca vingar a morte de seu irmão. Enquanto fogem alucinadamente, eles ainda precisam resgatar um gênio da computação que está na mira de terroristas, levando seus carros e suas vidas ao limite do perigo.", "qtdEstrela" : 5, "qtdVisualizacao" : 25, "urlImg" : "/fonts/img_180x266/velozes_furiosos.jpeg" });


56da5b6d6181262ac7baee02

---------INSERT MOVIES-----------------------------------

db.movies.insert({"nome" : "Buuu", "preco" : "4,90", "genero" : "infantil", "descricao" :"Quatro crianças partem numa aventura contra o tempo, dentro de uma pirâmide subterrânea, cheia de mistérios e perigos, em busca do que promete ser uma descoberta revolucionária.", "qtdEstrela" : 1, "qtdVisualizacao" : 3, "urlImg" : "/fonts/img_180x266/buuu.jpeg"});


-----------INSERT NOVO GENERO----------------------------------------
db.generos.insert({nome:"Infantil",movies:[ObjectId("56dcda0b9580c6ec2b4ee5c5"),ObjectId("56dcdceb9580c6ec2b4ee5c8")]})


------------UPDATE ASSOCIACAO--------------------------------------------------
db.generos.update(
    { nome: "Infantil" },
    { $push: { movies:ObjectId("56dce1d79580c6ec2b4ee5cb")}}
)

db.generos.update(
    { nome: "Infantil" },
    { $pull: { movies: ObjectId("56dcda0b9580c6ec2b4ee5c5") }}
)

db.generos.remove(
    { nome: "Infantil" });

db.movies.remove(
    { _id: ObjectId("56dcda619580c6ec2b4ee5c7") })
;
--------DELETE------------

