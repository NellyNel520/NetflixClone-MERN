const { Movie } = require('../models')

// CREATE 

const addMovie = async (req, res) => {
  if (req.user.isAdmin) {
  const newMovie = new Movie(req.body);
  try {
    const savedMovie = await newMovie.save();
    res.status(200).json(savedMovie);
  } catch (err) {
    res.status(500).json(err);
  }

} else {
  res.status(403).json("You are not allowed!");
}
};
 
// Update Movie

const updateMovie = async (req, res) => {
  if (req.user.isAdmin) {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedMovie);
  } catch (err) {
    res.status(500).json(err);
}
  } else {
    res.status(403).json("You are not allowed!");
  }
}

// Delete Movie

const deleteMovie = async (req, res) => {
  if (req.user.isAdmin) {
  try {
      const { id } = req.params;
      const deleted = await Movie.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Movie deleted");
      }
      throw new Error("Movie not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
} else {
  res.status(403).json("You are not allowed!");
}
}

// GET Movie BY ID
const getMovieById = async (req, res) => {
	try {
		const { id } = req.params;
		const Movie = await Movie.findById(id);
		if (Movie) {
			return res.status(200).json({ Movie });
		}
		return res
			.status(404)
			.send('Movie with the specified ID does not exists');
	} catch (error) {
		return res.status(500).send(error.message);
	}
}; 

//  get random movie or show/series 

const getRandom = async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
}


// Get All Movies BASIC

const getAllMovies = async (req, res) => {
	try {
		const movies = await Movie.find();
		return res.status(200).json({ movies });
	} catch (error) {
		return res.status(500).send(error.message);
	}
}; 

// Get all Movies to filter 

// const getAllMoviesAndFilter = async (req, res) => {
// 	const qNew = req.query.new;
//   const qCategory = req.query.category;
// 	try {
//     let movies;

//     if (qNew) {
//       movies = await Movie.find().sort({ createdAt: -1 }).limit(1);
//     } else if (qCategory) {
//       movies = await Movie.find({
//         categories: {
//           $in: [qCategory],
//         },
//       });
//     } else {
//       movies = await Movie.find().sort({ _id: -1 });
//     }

//     res.status(200).json(movies);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

module.exports ={
  addMovie,
  updateMovie,
  deleteMovie,
  getAllMovies,
  getMovieById,
  getRandom
}