import React from "react";
import Button from "./Button";
import '../style/Search.css'
const INPUT_PLACEHOLDER = "Ingredients e.g. chicken, carrot, pasta...";
const SEARCH_BUTTON_TEXT = "Find Recipe";

const Search = props => {
  const { handleUserInput, handleSearchClick } = props;
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder={INPUT_PLACEHOLDER}
        onChange={event => handleUserInput(event)}
      />
      <Button
        className="search-button"
        content={SEARCH_BUTTON_TEXT}
        handleClick={handleSearchClick}
      />
    </div>
  );
};

export default Search;
