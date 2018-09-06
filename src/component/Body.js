import React, { Component } from "react";
import SideBar from "./SideBar";
import Display from "./Display";
import seedData from "../utils/seedData";
import "../style/Body.css";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      isHelpClicked: false,
      data: [],
      selectedItem: null
    };
  }

  componentDidMount() {
    this.setState({ data: seedData });
  }

  setSelectedItem = id => {
    this.setState({ selectedItem: id });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="body">
        <SideBar className="side-bar" data={data} handleClick={this.setSelectedItem}/>
        <Display className="display" />
      </div>
    );
  }
}

export default Body;
