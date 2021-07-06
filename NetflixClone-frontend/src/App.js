import React from "react";
import requests from "./requests";
import Row from "./components/Row";
import Banner from "./components/Banner";
import "./assets/App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Container from "./context/Container";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            {localStorage.getItem("x-auth") ? (
              <Route path="/movies">
                <Banner />
                <Row
                  title="NETFLIX ORIGINALS"
                  fetchUrl={requests.fetchNetflixOriginals}
                  isLargeRow
                />
                <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
                <Row
                  title="Action Movies"
                  fetchUrl={requests.fetchActionMovies}
                />
                <Row
                  title="Comedy Movies"
                  fetchUrl={requests.fetchComedyMovies}
                />
                <Row
                  title="Horror Movies"
                  fetchUrl={requests.fetchHerrorMovies}
                />
                <Row
                  title="Romance Movies"
                  fetchUrl={requests.fetchRomanceMovies}
                />
                <Row
                  title="Documentaries"
                  fetchUrl={requests.fetchDocumentaries}
                />
              </Route>
            ) : (
              <Redirect to="/login" />
            )}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
