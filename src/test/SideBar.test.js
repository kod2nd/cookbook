import SideBar from "../component/SideBar";
import {shallowRender, isInArray} from "./helper/testHelper"

const result = shallowRender(SideBar)
const components = result.props.children.map(child => {
  return child.type.name;
});

describe("<SideBar /> Components are", () => {
  it("List", () => {
    expect(isInArray("List", components)).toBe(true);;
  });
  it("Search", () => {
    expect(isInArray("Search", components)).toBe(true);
  });
  it("Help", () => {
    expect(isInArray("Help", components)).toBe(true);
  });
});