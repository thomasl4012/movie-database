import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import MovieDetail from "./components/movie-detail/movie-detail.component";
import SearchBar from "./components/searchbar/searchbar.component";
import axios from "axios";
import Loader from "./assets/loading.gif";
import MoviesList from "./components/movie-list/movie-list.component";
import MoviesMobile from "./components/movie-mobile/movie-mobile.component";

export class App extends Component {
  apiKey = "d724349c02790ae2f347ffae502596a1";

  baseUrl = "https://api.themoviedb.org/3";

  state = {
    movies: [],
    loading: true,
    search: "",
    width: 0,
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
    axios
      .get(`${this.baseUrl}/list/7091212?api_key=${this.apiKey}`)
      .then((apiResponse) => {
        this.setState({
          movies: apiResponse.data.items,

          loading: false,
        });
      })
      .catch((error) => console.log(error));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { movies, loading, search } = this.state;
    const filteredMovie = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

    if (this.state.width > 575) {
      return (
        <div className="App">
          <SearchBar handleChange={this.handleChange} />
          <div className="container mt-4">
            {loading ? (
              <img src={Loader} alt="loading..." className="loader" />
            ) : (
              <div className="row">
                <div className="col-sm-4">
                  <MoviesList movies={filteredMovie} />
                </div>
                <div className="col-sm-8">
                  <Route
                    path="/movie/:id"
                    component={(props) => (
                      <MovieDetail {...props} movies={movies} />
                    )}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <SearchBar handleChange={this.handleChange} />
          <MoviesMobile movies={filteredMovie} />
        </div>
      );
    }
  }
}
export default App;
