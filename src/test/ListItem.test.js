import React from "react";
import ListItem from "../component/ListItem";
import { shallow } from "enzyme";

const mockClickHandler = jest.fn(() => {});
const mockItem = {
  name: "mockFood",
  img: "mock.url.image",
  recipe_id: 12345
};

const wrapper = shallow(
  <ListItem item={mockItem} handleClick={mockClickHandler} />
);

describe("<List />", () => {
  describe("<ListItem /> should", () => {
    it("have an image", () => {
      expect(wrapper.find(".image")).toHaveLength(1);
    });
    it("have list content", () => {
      expect(wrapper.find(".list-content")).toHaveLength(1);
    });
    it("have a clickable div", () => {
      wrapper.find(".list-item").simulate("click");
      expect(mockClickHandler).toBeCalledWith(12345);
    });
  });
});
