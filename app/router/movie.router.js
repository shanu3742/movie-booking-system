const { getMovie,postMovie,getParticular,getAvaliableSeat} = require("../controller/movie.controller/movie.controller")

module.exports= (app) =>{
    console.log('routing part :')

    // console.log('routing part :',app)
    app.get('/moviebooking/api/v1/getMovie',getMovie);
    app.get('/moviebooking/api/v1/getParticular/:id',getParticular);
    app.post('/moviebooking/api/v1/postMovie',postMovie);
    app.get('/moviebooking/api/v1/getAvaliableSeat/:id/:date/:time',getAvaliableSeat)
    // 65d4696c0327226965ea12f8

}