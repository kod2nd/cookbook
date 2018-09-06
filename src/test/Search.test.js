import React from "react";
import Search from "../component/Search";
import Button from "../component/Button";
import { shallow } from "enzyme";

const mockEventHandler = jest.fn(() => {});

const wrapper = shallow(<Search handleUserInput={mockEventHandler} />);
const inputBox = wrapper.find(".search-input");
const button = wrapper.find(Button);

describe("<Search /> should have", () => {
  it("An Input Field", () => {
    expect(inputBox).toHaveLength(1);
  });

  it("A Button Component", () => {
    expect(button).toHaveLength(1);
  });
});

describe("search-input", () => {
  it("should handle input events", () => {
    const TEST_VALUE = "test value";
    inputBox.simulate("change", { target: { value: TEST_VALUE } });
    expect(mockEventHandler).toBeCalledWith({
      target: { value: TEST_VALUE }
    });
  });
});
