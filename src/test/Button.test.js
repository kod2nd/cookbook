import React from "react";
import { shallowRender } from "./helper/testHelper";
import Button from "../component/Button";
import { shallow } from "enzyme";

describe("<Button />", () => {
  const mockClickHandler = jest.fn();

  const wrapper = shallow(
    <Button
      className="test-button"
      content="test"
      onClick={mockClickHandler}
    />
  );

  it("should call mockClickHandler when clicked", () => {
    wrapper.find(".test-button").simulate("click");
    expect(mockClickHandler).toBeCalled();
  });
  
  it('should have content matched passed content ', () => {
    expect(wrapper.props().children).toEqual("test")
  });

  it('should have className match passed className ', () => {
    expect(wrapper.props().className).toEqual("test-button")
  });
});
