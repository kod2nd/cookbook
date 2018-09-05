import React, { Component } from "react";
import List from './List'
import Search from './Search'
import Display from './Display'
import Help from './Help'

class Body extends Component {
  constructor() {
    super();
    this.state = {
      isHelpClicked: false
    };
  }

  render() {
    return (
      <div>
          <Search />
          <Help />
          <List />
          <Display />
      </div>
    );
  }
}

export default Body;
