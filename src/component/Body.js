import React, { Component } from "react";
import SideBar from "./SideBar";
import Display from "./Display";
import seedData from "../utils/seedData"
import "../style/Body.css";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      isHelpClicked: false,
      data: []
    };
  }

  componentDidMount() {
      this.setState({data: seedData})
  }

  render() {
      console.log(this.state.data)
    return (
      <div className="body">
        <SideBar className="side-bar" />
        <Display className="display" />
      </div>
    );
  }
}

export default Body;
