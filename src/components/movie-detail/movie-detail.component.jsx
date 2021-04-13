import React, { useState, useEffect, Fragment } from "react";

const MovieDetail = ({ movies, id }) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    setMovie(movies.find((item) => String(id) === String(item.id)));
  }, [movie, id, movies]);

  return (
    <Fragment>
      {movie !== undefined ? (
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-6 mb-4 text-center">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="movie poster"
                className="img-thumbnail rounded mx-auto d-block "
              ></img>
            </div>
            <div className="col-6 mt-4 mb-4 text-center">
              <h2>{movie.original_title}</h2>

              <div> User score : {movie.vote_average}</div>
            </div>
          </div>
          <div className=" text-center">{movie.overview}</div>
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};

export default MovieDetail;
