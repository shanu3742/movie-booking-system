const { Movie } = require("../../model/movie.model")

exports.getMovie = (req,res) => {
    console.log('get movie details')
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