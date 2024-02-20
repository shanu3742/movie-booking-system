const { Movie } = require("../../model/movie.model")

exports.getMovie = async (req,res) => {
    try{
        const movie = await Movie.find({},{
            _id:1,
            movieName:1,
            movieCategory:1,
            movieDiscription:1,
            movieImage:1,
            movieDuriation:1,
            movieDirector:1
        });
        res.status(201).send(movie)

    }catch(e){
        res.status(500).send({
            message:'something went wrong ',
            serverMessage:e.message
        })
    }
}
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