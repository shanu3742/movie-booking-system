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