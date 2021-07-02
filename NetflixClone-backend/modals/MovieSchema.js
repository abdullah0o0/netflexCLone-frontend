const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  adult: { type: Boolean },
  backdrop_path: { type: String || null },
  id: { type: Number, required: true },
  original_language: { type: String, required: true },
  original_title: { type: String, required: true },
  overview: { type: String, required: true },
  poster_path: { type: String, required: true },
  release_date: { type: String, required: true },
  vote_average: { type: Number, required: true },
  vote_count: { type: Number },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

const MovieModel = mongoose.model("movies", MovieSchema);

module.exports = MovieModel;
