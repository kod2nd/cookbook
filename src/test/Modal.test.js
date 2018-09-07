import React from "react";
import Modal from "../component/Modal";
import { shallowRender } from "./helper/testHelper";
import { shallow } from "enzyme";
import testData from "./helper/testData"

const wrapper = shallow(<Modal selectedRecipe={testData} />);

describe("<Modal /> has", () => {
    it("view-recipe", () => {
      expect(wrapper.find(".view-recipe")).toHaveLength(1);
    });
  it("modalDialog", () => {
    expect(wrapper.find(".modal-popup")).toHaveLength(1);
  });
//   it("<Display />", () => {
//     expect(wrapper.find(Display)).toHaveLength(1);
//   });
});
