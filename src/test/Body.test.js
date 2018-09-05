import Body from "../component/Body";
import {shallowRender, isInArray} from "./helper/testHelper"

const result = shallowRender(Body)
const components = result.props.children.map(child => {
  return child.type.name;
});

describe("<Body /> Components are", () => {
  it("List", () => {
    expect(isInArray("List", components)).toBe(true);;
  });
  it("Search", () => {
    expect(isInArray("Search", components)).toBe(true);
  });
  it("Search", () => {
    expect(isInArray("Display", components)).toBe(true);
  });
  it("Help", () => {
    expect(isInArray("Help", components)).toBe(true);
  });
});
