import React from "react";
import App from "./App";
import Header from "./component/Header";
import Body from "./component/Body";
import { shallow } from "enzyme";

describe("<App />", () => {
  const wrapper = shallow(<App />);
  describe("renders", () => {
    it("<Header />", () => {
      expect(wrapper.find(Header)).toHaveLength(1);
    });
    it("<Body />", () => {
      expect(wrapper.find(Body)).toHaveLength(1);
    });
  });
});
