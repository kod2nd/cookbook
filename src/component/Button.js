import React from "react";

const Button = props => {
  return (
    <button className={props.className} onClick={props.handleClick}>
      {props.content}
    </button>
  );
};

export default Button;
