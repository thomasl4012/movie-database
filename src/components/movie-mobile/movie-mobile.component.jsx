import React from "react";

const MoviesMobile = ({ movies }) => {
  return (
    <div>
      <div class="accordion" id={`accordion-container`}>
        {movies.map((movie, index) => {
          return (
            <div class="accordion-item">
              <h2 class="accordion-header" id={`heading${index}`}>
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {movie.title}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                class="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent={`#accordion${index}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt="movie poster"
                  className="img-thumbnail mt-4 h-50 w-50 rounded mx-auto d-block"
                ></img>
                <div class="accordion-body text-center">
                  User score : {movie.vote_average}
                </div>
                <div class="accordion-body text-center">{movie.overview}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesMobile;
