const express = require("express");

const Route = express.Router();

// const { postVS } = require("../middlewares/validation-sanitization"); // see if valid when u post it

const { getMovies } = require("../controllers/movieControllers");

Route.route("/").get(getMovies);

module.exports = Route;
