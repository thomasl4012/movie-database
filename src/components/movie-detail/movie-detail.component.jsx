import React, { useState, useEffect, Fragment } from "react";
import Loader from "../../assets/loading.gif";

const MovieDetail = (props) => {
  const [movie, setMovie] = useState();
  const [loading, setloading] = useState(true);

  const id = props.match.params.id;
  const movies = props.movies;

  useEffect(() => {
    setMovie(movies.find((item) => String(id) === String(item.id)));
    setloading(false);
  }, [movie, id, movies]);

  return (
    <Fragment>
      {loading ? (
        Loader
      ) : (
        <div className="container">
          <div class="row justify-content-md-center">
            <div class="col-4 mb-4 text-center">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="movie poster"
                className="img-thumbnail rounded mx-auto d-block "
              ></img>
            </div>
            <div class="col-4 mt-4 mb-4 text-center">
              <h2 className>{movie.original_title}</h2>

              <div> User score : {movie.vote_average}</div>
            </div>
          </div>
          <div class=" text-center">{movie.overview}</div>
        </div>
      )}
    </Fragment>
  );
};

export default MovieDetail;
