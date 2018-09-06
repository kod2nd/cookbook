import React from "react"
import Body from "../component/Body";
import { shallowRender } from "./helper/testHelper";
import { shallow } from "enzyme";
import SideBar from "../component/SideBar";
import Display from "../component/Display"

describe("<Body />", () => {
  const wrapper = shallow(<Body />)
  describe('renders component', () => {
    it('<SideBar />', () => {
      expect(wrapper.find(SideBar)).toHaveLength(1)
    });
    it('<Display />', () => {
      expect(wrapper.find(Display)).toHaveLength(1)
    });
    
  });
  describe("Snapshot", () => {
    const result = shallowRender(Body);
    it("should match", () => {
      expect(result.props).toMatchSnapshot();
    });
  });
});
