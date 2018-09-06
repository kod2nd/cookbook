import React from "react"
import SideBar from "../component/SideBar";
import List from "../component/List"
import Search from "../component/Search"
import { shallowRender } from "./helper/testHelper";
import { shallow } from "enzyme";

const wrapper = shallow(<SideBar />);

describe("renders component", () => {
  it("<Search />", () => {
    expect(wrapper.find(Search)).toHaveLength(1);
  });
  it("<List />", () => {
    expect(wrapper.find(List)).toHaveLength(1);
  });
});

describe("Snapshot", () => {
  const result = shallowRender(SideBar);
  it("should match", () => {
    expect(result.props).toMatchSnapshot();
  });
});
