import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "../assets/Home.scss";

export default function Home() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  return (
    <div
      class="page"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="hero">
        <h1 style={{ marginBottom: "0.6rem" }}>
          Unlimited movies, TV shows, and more.
        </h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h2>Ready to watch? Enter your email to create a membership</h2>
        <input type="email" placeholder="Email address" className="emailBox" />
        <button type="submit" className="startBtn">
          <span>Get Started</span>
        </button>
      </div>
    </div>
  );
}
