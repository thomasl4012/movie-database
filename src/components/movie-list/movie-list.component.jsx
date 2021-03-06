import React from "react";
import { Link } from "react-router-dom";
import "./movie-list.style.css";
const MoviesList = (props) => {
  const { movies } = props;

  return (
    <div className="list-group list-group-scroll">
      {movies ? (
        <div>
          {movies.map(({ title, id }) => {
            return (
              <Link
                to={`/movie/${id}`}
                key={id}
                className="list-group-item list-group-item-action text-left"
              >
                {title}
              </Link>
            );
          })}
        </div>
      ) : (
        "Error"
      )}
    </div>
  );
};

export default MoviesList;
