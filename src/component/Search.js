import React from "react";

const Search = () => {
  const INPUT_PLACEHOLDER = "e.g. chicken, carrot, pasta...";
  const SEARCH_BUTTON_TEXT = "Find Recipes";
  return (
    <div>
      <div>Enter Ingredients</div>
      <input type="text" placeholder={INPUT_PLACEHOLDER} />
      <button>{SEARCH_BUTTON_TEXT}</button>
    </div>
  );
};

export default Search;
