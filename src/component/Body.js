import React, { Component } from "react";
import SideBar from "./SideBar";
import Display from "./Display";
import seedData from "../utils/seedData";
import "../style/Body.css";
import { URL, API_KEY } from "../utils/getHelper";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      isHelpClicked: false,
      data: [],
      selectedRecipe: null
    };
    this.userInput = "";
  }

  // componentDidMount() {
  //   this.setState({ data: seedData });
  // }

  searchClickHandler = async () => {
    // const url = URL(API_KEY, this.userInput);
    // const response = await fetch(url);

    // if (response.status === 200) {
    //   const recipesData = await response.json();
    //   this.setState({ data: recipesData.recipes });
    // }
    this.setState({ data: seedData });
  };

  userInputEventListener = event => {
    this.userInput = event.target.value;
  };

  setSelectedRecipe = id => {
    const selectedRecipe = this.state.data.find(recipe => {
      if (recipe.recipe_id === id) {
        return recipe;
      }
    });
    this.setState({ selectedRecipe: selectedRecipe });
  };

  render() {
    const { data, selectedRecipe } = this.state;
    return (
      <div className="body">
        <Display className="display" selectedRecipe={selectedRecipe} />
        <SideBar
          className="side-bar"
          data={data}
          handleClick={this.setSelectedRecipe}
          handleUserInput={this.userInputEventListener}
          handleSearchClick={this.searchClickHandler}
        />
      </div>
    );
  }
}

export default Body;
