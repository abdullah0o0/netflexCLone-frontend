const MovieModel = require("../modals/MovieSchema");
const createError = require("http-errors");

exports.getMovies = async (req, res, next) => {
  try {
    let movies = await MovieModel.find({}).select("-__v");
    res.json({ success: true, data: movies });
  } catch (err) {
    next(err);
  }
};
