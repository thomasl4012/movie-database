import React from "react";

const MoviesMobile = ({ movies }) => {
  return (
    <div>
      {movies.map((movie, index) => {
        return (
          <div
            key={movie.id}
            className="accordion"
            id={`accordion-container${index}`}
          >
            <div key={movie.id} className="accordion-item">
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="true"
                  aria-controls={`collapse${index}`}
                >
                  {movie.title}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent={`#accordion-container${index}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="movie poster"
                  className="img-thumbnail mt-4 h-50 w-50 rounded mx-auto d-block"
                ></img>
                <div className="accordion-body text-center">
                  User score : {movie.vote_average}
                </div>
                <div className="accordion-body text-center">
                  {movie.overview}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoviesMobile;
