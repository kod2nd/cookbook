import React from "react";
import Search from "../component/Search";
import Button from "../component/Button"
import { shallow } from "enzyme";

const wrapper = shallow(<Search />);
describe("<Search /> should have", () => {

  it("An Input Field", () => {
    expect(wrapper.find(".search-input")).toHaveLength(1);
  });
  
  it("A Button Component", () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
