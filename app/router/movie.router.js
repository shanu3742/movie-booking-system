const { getMovie,postMovie} = require("../controller/movie.controller/movie.controller")

module.exports= (app) =>{
    console.log('routing part :')

    // console.log('routing part :',app)
    app.get('/moviebooking/api/v1/getMovie',getMovie);
    app.post('/moviebooking/api/v1/postMovie',postMovie)

}