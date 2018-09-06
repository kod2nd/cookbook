import Body from "../component/Body";
import {shallowRender, isInArray} from "./helper/testHelper"

const result = shallowRender(Body)
const components = result.props.children.map(child => {
  return child.type.name;
});

describe("<Body /> Components are", () => {
  it("Display", () => {
    expect(isInArray("Display", components)).toBe(true);
  });
  it("SideBar", () => {
    expect(isInArray("SideBar", components)).toBe(true);
  });
  it("SideBar", () => {
    expect(isInArray("SideBar", components)).toBe(true);
  });

});

describe('Snapshot', () => {
  it('should match', () => {
    expect(result.props).toMatchSnapshot()
  });
});
