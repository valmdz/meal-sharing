import React from "react";
import { Link } from "react-router-dom";

const SearchMeal = ({ value, onChange }) => {
  return (
    <div className="containerSearch">
      <input
        type="text"
        value={value}
        placeholder="Search for a feast"
        onChange={onChange}
      ></input>
      <div className="search">
        <Link to="/meals" className="search-icon">
          <img
            src="src/client/magnifyingGlass.svg"
            width="20px"
            className="magnifiyingGlass"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default SearchMeal;
