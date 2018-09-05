import React from "react";
import List from "./List";
import Search from "./Search";
import Help from "./Help";
import '../style/SideBar.css'

const SideBar = () => {
  return (
    <div className="sidebar">
      <Search />
      <Help />
      <List />
    </div>
  );
};

export default SideBar;
