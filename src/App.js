import React, { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import MovieDetail from "./components/movie-detail/Movie-detail.component";
import SearchBar from "./components/searchbar/Searchbar.component";
import axios from "axios";
import Loader from "./assets/loading.gif";
import MoviesList from "./components/movie-list/Movie-list.component";
import MoviesMobile from "./components/movie-mobile/Movie-mobile.component";

export default function App() {
  const apiKey = "d724349c02790ae2f347ffae502596a1";

  const baseUrl = "https://api.themoviedb.org/3";

  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (search !== "") {
      axios
        .get(
          `${baseUrl}/search/movie?api_key=${apiKey}&query=${search}&page=1&include_adult=false`
        )
        .then((apiResponse) => {
          setMovie(apiResponse.data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then((apiResponse) => {
          setMovie(apiResponse.data.results);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <SearchBar handleChange={handleChange} value={search} />

      {windowSize > 575 ? (
        <div className="container mt-4">
          {loading ? (
            <img src={Loader} alt="loading..." className="loader" />
          ) : (
            <div className="row">
              <div className="col-sm-4">
                <MoviesList movies={movies} />
              </div>
              <div className="col-sm-8">
                <Route
                  path="/movie/:id"
                  render={(props) => (
                    <MovieDetail id={props.match.params.id} movies={movies} />
                  )}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <MoviesMobile movies={movies} />
        </div>
      )}
    </div>
  );
}
