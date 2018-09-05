import React, { Component } from "react";

const INPUT_PLACEHOLDER = "e.g. chicken, carrot, pasta...";
const SEARCH_BUTTON_TEXT = "Find Recipes"

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
        <div className="help">
          Multiple Ingredients should be Seperate by commas. E.g. onion,
          mushroom, rice
        </div>

        <div>Enter Ingredients</div>
        <input type="text" placeholder={INPUT_PLACEHOLDER} />
        <button>{SEARCH_BUTTON_TEXT}</button>
      </div>
    );
  }
}

export default Body;
