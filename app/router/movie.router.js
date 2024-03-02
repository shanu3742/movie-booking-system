const { getMovie,postMovie,getParticular,getAvaliableSeat,bookedSeat} = require("../controller/movie.controller/movie.controller")

module.exports= (app) =>{
    console.log('routing part :')

    // console.log('routing part :',app)
    app.get('/moviebooking/api/v1/getMovie',getMovie);
    app.get('/moviebooking/api/v1/getParticular/:id',getParticular);
    app.post('/moviebooking/api/v1/postMovie',postMovie);
    app.get('/moviebooking/api/v1/getAvaliableSeat/:id/:date/:time',getAvaliableSeat)
    // 65d4696c0327226965ea12f8
    app.post('/moviebooking/api/v1/bookedSeat/:id',bookedSeat)

}

// name	:	troy
// age	:	29
// price	:	250
// id	:	s193u832ajdh828usjn
// bookedAT	:	2024/02/24
// MovieSlotTime	:	10:00
// MovieSlotDate	:	2024/02/25
// seatNumber	:	15
//movieName:'djkd',
//movieIs:'dkmdk',
//transtitionId:''