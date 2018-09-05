import React, { Component } from "react";
import Button from "./Button";

class Help extends Component {
  constructor() {
    super();
    this.state = {
      isHelpTextVisible: false
    };
    this.helpText =
      "Multiple Ingredients should be Seperate by commas. E.g. onion, mushroom, rice";
  }

  toggleHelpText = () => {
    this.setState({
      isHelpTextVisible: this.state.isHelpTextVisible ? false : true
    });
  };

  render() {
    if (this.state.isHelpTextVisible) {
      return (
        <div>
          <Button
            className="button"
            onClick={this.toggleHelpText}
            content="?"
          />
          <div className="help-text">{this.helpText}</div>
        </div>
      );
    }
    return (
      <Button className="button" onClick={this.toggleHelpText} content="?" />
    );
  }
}

export default Help;
