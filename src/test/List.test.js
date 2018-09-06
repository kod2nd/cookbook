import React from "react";
import List from "../component/List";
import { shallow } from "enzyme";

describe("<List />", () => {
  const mockClickHandler = jest.fn();
  const mockData = [
    {
      name: "test-data1",
      recipe_id: 1
    },
    {
        name: "test-data2",
        recipe_id: 2
      },
  ];

  const wrapper = shallow(<List data={mockData} />);

  it("should return an array of length equal to the length of the input data ", () => {
    expect(wrapper.props().children).toHaveLength(2);
  });

});
