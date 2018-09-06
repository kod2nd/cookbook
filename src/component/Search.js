import React from "react";
const INPUT_PLACEHOLDER = "Ingredients e.g. chicken, carrot, pasta...";
const SEARCH_BUTTON_TEXT = "Find Recipes";

const Search = () => {
  return (
    <div>
      <input type="text" placeholder={INPUT_PLACEHOLDER} />
      <button>{SEARCH_BUTTON_TEXT}</button>
    </div>
  );
};

export default Search;
