import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {shallowRender, isInArray} from "./test/helper/testHelper"

const result = shallowRender(App)

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Has Header and Body Components", () => {
    const components = result.props.children.map(child => {
      return child.type.name;
    });
    expect(isInArray("Header", components)).toBe(true);
    expect(isInArray("Body", components)).toBe(true);
  });
});
