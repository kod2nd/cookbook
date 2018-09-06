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
      selectedRecipe: null
    };
  }

  
  componentDidMount() {
    this.setState({ data: seedData });
  }

  userInputEventListener = (event) => {
    console.log(event.target.value)
  }
  
  setSelectedRecipe = id => {
    console.log("here", id)
    const selectedRecipe = this.state.data.find(recipe => {
      if (recipe.recipe_id === id) {
        return recipe;
      }
    });
    this.setState({ selectedRecipe: selectedRecipe });
  };

  render() {
    const { data, selectedRecipe } = this.state;
    console.log("body", selectedRecipe)
    return (
      <div className="body">
        <SideBar
          className="side-bar"
          data={data}
          handleClick={this.setSelectedRecipe}
          handleUserInput={this.userInputEventListener}
        />
        <Display className="display" selectedRecipe={selectedRecipe} />
      </div>
    );
  }
}

export default Body;
