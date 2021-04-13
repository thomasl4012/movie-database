import React from "react";
import HomeButton from "../buttons/Home-button.component";

const SearchBar = (props) => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-dark bg-info mb-3">
        <div className="container">
          <form onSubmit={props.onSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              onChange={props.handleChange}
              aria-label="Search"
              value={props.value}
            ></input>
          </form>

          {props.searchState ? (
            <HomeButton className={"btn btn-secondary mt-2 mb-2"}>
              Go Home
            </HomeButton>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
