import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import MovieDetail from "./components/movie-detail/Movie-detail.component";
import SearchBar from "./components/searchbar/Searchbar.component";
import axios from "axios";
import Loader from "./assets/loading.gif";
import MoviesList from "./components/movie-list/Movie-list.component";
import MoviesMobile from "./components/movie-mobile/Movie-mobile.component";

export class App extends Component {
  apiKey = "d724349c02790ae2f347ffae502596a1";

  baseUrl = "https://api.themoviedb.org/3";

  state = {
    movies: [],
    loading: true,
    search: "",
    width: 0,
    searchState: false,
  };

  componentDidMount() {
    this.setState({ width: window.innerWidth });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`
      )
      .then((apiResponse) => {
        this.setState({
          movies: apiResponse.data.results,

          loading: false,
        });
      })
      .catch((error) => console.log(error));
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.search}&page=1&include_adult=false`
      )
      .then((apiResponse) => {
        this.setState({ movies: apiResponse.data.results, searchState: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { movies, loading, searchState, search } = this.state;

    let display;
    if (this.state.width > 575) {
      display = (
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
      );
    } else {
      display = (
        <div>
          <MoviesMobile movies={movies} />
        </div>
      );
    }

    return (
      <div className="App">
        <SearchBar
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
          searchState={searchState}
          value={search}
        />
        {display}
      </div>
    );
  }
}
export default App;
