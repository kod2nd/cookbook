import React, { Component } from "react";

class Help extends Component {
    constructor() {
        super()
        this.state = {
            isHelpTextShown: false
        }
    }

  render() {
      console.log(this.state.isHelpTextShown)
    return (
      <div>
        <div className="help-text">
          Multiple Ingredients should be Seperate by commas. E.g. onion,
          mushroom, rice
        </div>
      </div>
    );
  }
}

export default Help;
