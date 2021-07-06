import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "../axios";
import requests from "../requests";
import "../assets/Home.scss";
import MyContext from "../context/MyContext";

export default function Home(props) {
  const [movie, setMovie] = useState([]);
  const { setUserEmail } = useContext(MyContext);

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
 

  const inputVal = useRef("");

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return (
    <div
      className="homepage"
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
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            ref={inputVal}
            placeholder="Email address"
            className="emailBox"
            required
          />
          <button
            type="submit"
            onClick={() => {
              const email = inputVal.current.value;
              if (validateEmail(email)) {
                setUserEmail(email);
                props.history.push("/signup");
              } else {
                alert("enter a valid email - example@example.example");
              }
            }}
            className="startBtn"
          >
            <span>Get Started</span>
          </button>
        </form>
      </div>
      <h6 className="captionTitle">
        <span style={{ color: "rgb(172, 172, 172)" }}>Movie Caption </span>
        {movie?.original_title|| "" || movie?.original_name}
      </h6>
    </div>
  );
}
