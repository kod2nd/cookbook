import React from "react";
import List from "./List";
import Search from "./Search";
import "../style/SideBar.css";

const SideBar = props => {
  const { data, handleClick, handleUserInput, handleSearchClick, selectedRecipe, handleKeyPress } = props;
  return (
    <div className="sidebar">
      <Search
        handleUserInput={handleUserInput}
        handleSearchClick={handleSearchClick}
        handleKeyPress={handleKeyPress}
      />
      <List data={data} handleClick={handleClick} selectedRecipe={selectedRecipe} />
    </div>
  );
};

export default SideBar;
