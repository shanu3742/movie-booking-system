const { Movie } = require("../../model/movie.model")


exports.getMovie = async (req, res) => {
    try {
        const currentDate = new Date();

        const movies = await Movie.aggregate([
            {
                $addFields: {
                    movieEndDateDate: { $toDate: "$movieEndDate" } // Convert string to Date object
                }
            },
            {
                $match: {
                    movieEndDateDate: { $gte: currentDate }
                }
            },
            {
                $project: { // Projecting only the required fields
                    _id: 1,
                    movieName: 1,
                    movieCategory: 1,
                    movieDescription: 1,
                    movieImage: 1,
                    movieDuration: 1,
                    movieDirector: 1
                }
            }
        ]);

        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send({
            message: 'Something went wrong',
            serverMessage: error.message
        });
    }
};
exports.postMovie = async (req,res)=> {
    try{
        const movie = req.body;
        const savedMovie = await Movie.create(movie);
        res.status(201).send({
            message:'movie created successfully',
            movie:savedMovie
        })

    }catch(e){
        res.status(500).send({
            message:'something went wrong ',
            serverMessage:e.message
        })
    }

}
exports.getParticular = async (req,res)=> {
    try{
        const id = req.params.id;
        const movie = await Movie.findById(id);
        res.status(200).send(movie);
    }catch(e){
        res.status(500).send({
            message:'something went wrong ',
            serverMessage:e.message
        })
    }
}

exports.getAvaliableSeat = async (req,res) => {
    try{
        let  Movieid = req.params.id;
        let  date = req.params.date;
        let time = req.params.time;
        let updatedDateFormat = `${date.substring(0, 4)}/${date.substring(4, 6)}/${date.substring(6, 8)}`;
       let updateTime  = `${time.substring(0, 2)}:${time.substring(2, 4)}`
        const movie = await Movie.findById(Movieid);
        let totalTicketForASlot = movie.totalTicketForASlot;
        //get all user booked for a particular date 
         let userBookedForADate =movie.ticketBookedByUser.filter(booked => booked.MovieSlotDate === updatedDateFormat && booked.MovieSlotTime === updateTime);
         let seat = [];
         seat.length=totalTicketForASlot;
         seat.fill(1);
        seat= seat.map((el,i) => i).filter(el => !userBookedForADate.find(booked => +(booked.seatNumber) === +(el)));
        res.status(200).send({
            'avaliableSeat':seat,
        });
    }catch(e){
        res.status(500).send({
            message:'something went wrong ',
            serverMessage:e.message
        })
    }

}