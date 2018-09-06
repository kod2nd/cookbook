import React from "react";
import Body from "../component/Body";
import { shallowRender } from "./helper/testHelper";
import { shallow } from "enzyme";
import SideBar from "../component/SideBar";
import Display from "../component/Display";
import { URL, API_KEY } from "../utils/getHelper";

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
    const body = wrapper.instance();
    it("setSelectedRecipe is called with an id, it should set the state of selectedRecipe with the appropriate recipe", () => {
      const TEST_RECIPE_ID = "12345";

      const testData = [
        {
          title: "test-meal1",
          recipe_id: "12345"
        },
        {
          title: "test-meal2",
          recipe_id: "54321"
        }
      ];

      wrapper.setState({ data: testData });
      body.setSelectedRecipe(TEST_RECIPE_ID);
      expect(wrapper.state("selectedRecipe")).toMatchObject(testData[0]);
    });

    it("userInputEventLister should set this.userInput based on event.target.value", () => {
      const MOCK_INPUT = "mock input";
      const mockUserInput = {
        target: { value: MOCK_INPUT }
      };
      body.userInputEventListener(mockUserInput);
      expect(body.userInput).toBe(MOCK_INPUT);
    });

    it("searchClickHandler should fetch data and setState", async () => {
      const mockFetchData = [{ name: "name1" }, { name: "name2" }];
      fetch.resetMocks();
      fetch.mockResponseOnce(JSON.stringify(mockFetchData));
      const newWrapper = shallow(<Body />);
      const newBody = newWrapper.instance();
      await newBody.searchClickHandler();

      const url = URL(API_KEY, newBody.userInput);

      expect(fetch).toBeCalledWith(url);
      expect(newWrapper.state("data")).toEqual(mockFetchData);
    });
  });

  describe("Snapshot", () => {
    const result = shallowRender(Body);
    it("should match", () => {
      expect(result.props).toMatchSnapshot();
    });
  });
});
