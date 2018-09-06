import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./component/Header"
import {shallowRender, isInArray} from "./test/helper/testHelper"
import { shallow, mount, render } from 'enzyme';

const result = shallowRender(App)

test('should ', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true)
});

test('Should render header', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.find(Header))
  expect(wrapper.find(Header)).toHaveLength(1)
});

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
