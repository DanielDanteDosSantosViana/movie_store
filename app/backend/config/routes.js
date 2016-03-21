
module.exports = function(app){


app.get('/',function(req,res){

  res.render('index')
});

// route movie
app.use('/movie_store', require('../routes/movie'));

};
