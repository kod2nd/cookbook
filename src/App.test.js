import React from "react";
import ReactDOM from "react-dom";
import ShallowRenderer from "react-test-renderer/shallow";
import App from "./App";

const renderer = new ShallowRenderer();
renderer.render(<App />);
const result = renderer.getRenderOutput();

const isInArray = (element, array) => {
  if (array.indexOf(element) > -1) {
    return true;
  }
  return false;
};

describe('<App />', () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it("Has Header and Body Components", () => {
    const components = result.props.children.map(obj => {
      return obj.type.name;
    });
  expect(isInArray("Header", components)).toBe(true)
  expect(isInArray("Body", components)).toBe(true)
  });
});
