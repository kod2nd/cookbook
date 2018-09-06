import React from "react";
import Body from "../component/Body";
import { shallowRender } from "./helper/testHelper";
import { shallow } from "enzyme";
import SideBar from "../component/SideBar";
import Display from "../component/Display";

const wrapper = shallow(<Body />);

describe("<Body />", () => {
  describe("renders component", () => {
    it("<SideBar />", () => {
      expect(wrapper.find(SideBar)).toHaveLength(1);
    });
    it("<Display />", () => {
      expect(wrapper.find(Display)).toHaveLength(1);
    });
  });

  describe("Methods", () => {
    it("setSelectedItem should set the state of selectedItem with the argument that is passed into it", () => {
      const TEST_RECIPE_ID = 12345;
      wrapper.instance().setSelectedItem(TEST_RECIPE_ID);
      expect(wrapper.state("selectedItem")).toEqual(12345);
    });
  });

  describe("Snapshot", () => {
    const result = shallowRender(Body);
    it("should match", () => {
      expect(result.props).toMatchSnapshot();
    });
  });
});
