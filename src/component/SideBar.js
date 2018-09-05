import React from "react";
import List from "./List";
import Search from "./Search";
import Help from "./Help";
import '../style/SideBar.css'

const SideBar = (props) => {
    const {data} = props
  return (
    <div className="sidebar">
      <Search />
      <Help />
      <List data={data}/>
    </div>
  );
};

export default SideBar;
