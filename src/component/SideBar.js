import React from "react";
import List from "./List";
import Search from "./Search";
import "../style/SideBar.css";

const SideBar = props => {
  const { data, handleClick, handleUserInput, handleSearchClick } = props;
  return (
    <div className="sidebar">
      <Search
        handleUserInput={handleUserInput}
        handleSearchClick={handleSearchClick}
      />
      <List data={data} handleClick={handleClick} />
    </div>
  );
};

export default SideBar;
