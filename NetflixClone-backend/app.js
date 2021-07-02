const express = require("express");
const port = 4000;
const createError = require("http-errors");
const cors = require("cors");
// const { auth } = require("./middlewares/Auth");

const moviesRoutes = require("./routes/movieRoutes");
const userRoutes = require("./routes/userRoutes");

const URL =
  "https://api.themoviedb.org/3/movie/550?api_key=50f93e496bf76e936aa17eb412121ee7";

require("./mongooseConnection");
const app = express();

// cors middleware
app.use(cors({ origin: "*", exposedHeaders: "x-auth" }));

app.use(express.json());

app.use("/users", userRoutes);
app.use("/movies", moviesRoutes);

app.listen(port, () =>
  console.log(`express server is running on port: ${port}`)
);

app.use((req, res, next) => {
  let err = createError(404, "pagenotfound");
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ success: false, message: err.message });
});
