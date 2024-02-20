const  mongoose = require("mongoose");


const movieSchema= new mongoose.Schema({
    movieName:{
        type:String
    },
    movieCategory:{
        type:[String]
    },
    movieRating:{
        type:Number
    },
    totalTicketForASlot:{
        type:Number,
    },
    totalTicketBooked:{
        type:Number
    },
    tickedBookedByUserIDList:{
       type:Object
    },
    // {
    //     NAME:'SS',
    //     AGE:'SD',
    //     PRICE:'DDK',
    //     BOOKEDaT:'JDDKD',
    //     MOVIEsLOTtIME:'DDJ'
    //     mOVIEsLOATDate:'DDJD',
    //     setNumber:'12'
    // }
    ticketBookedByUser:{
        type:[Object]

    },
    avaliableSlot:{
        type:[String]
    },
    movieCast:{
        type:[Object]
    },
    movieDuriation:{
        type:String
    },
    movieDirector:{
        type:String
    },
    movieEndDate:{
        type:String
    },
    movieDiscription:{
        type:String
    },
    movieImage:{
        type:[String]
    },
    movieTrailer:{
        type:[String]
    }  
})

exports.Movie=mongoose.model('MOVIE',movieSchema)
