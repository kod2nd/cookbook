import React, { Component } from "react";

class Help extends Component {
  constructor() {
    super();
    (this.state = {
      isHelpTextVisible: false
    }),
      (this.helpText =
        "Multiple Ingredients should be Seperate by commas. E.g. onion, mushroom, rice");
  }

  toggleHelpText = () => {
    this.setState({
      isHelpTextVisible: this.state.isHelpTextVisible ? false : true,
    });
  };

  render() {
    const createButton = (className, content, onClick) => {
      return (
        <button className={className} onClick={onClick}>
          {content}
        </button>
      );
    };

    if (this.state.isHelpTextVisible) {
      return (
        <div>
          {createButton("button", "?", this.toggleHelpText)}
          <div className="help-text">{this.helpText}</div>
        </div>
      );
    }
    return createButton("button", "?", this.toggleHelpText);
  }
}

export default Help;
