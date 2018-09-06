import React from "react";
import { shallowRender } from "./helper/testHelper";
import { shallow } from "enzyme";
import Display from "../component/Display";

const testData = {
  publisher: "test publisher",
  f2f_url: "f2f.test.meal/view",
  title: "test meal",
  source_url: "source.test.meal/test-meal",
  recipe_id: "54321",
  image_url: "test.image/test-meal",
  social_rank: 50,
  publisher_url: "test.publisher"
};

const wrapper = shallow(
  <Display selectedRecipe={testData} />
);

describe("<Display />", () => {
  describe("should have", () => {
    it("title", () => {
      expect(wrapper.find(".title")).toHaveLength(1);
    });
    it("image", () => {
      expect(wrapper.find(".display-image")).toHaveLength(1);
    });
    it("recipe link", () => {
      expect(wrapper.find(".recipe-link")).toHaveLength(1);
    });
    it("link text", () => {
      expect(wrapper.find(".popularity")).toHaveLength(1);
    });
    it("link url", () => {
      expect(wrapper.find(".link-url")).toHaveLength(1);
    });
  });

  describe("Snapshot", () => {
    const result = shallowRender(Display);
    it("should match", () => {
      expect(result.props).toMatchSnapshot();
    });
  });
});
