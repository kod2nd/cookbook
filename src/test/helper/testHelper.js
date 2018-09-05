import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";


export const shallowRender = (ComponentToShallowRender) => {
    const renderer = new ShallowRenderer();
    renderer.render(<ComponentToShallowRender />);
    return renderer.getRenderOutput();
  };

 export const isInArray = (element, array) => {
    if (array.indexOf(element) > -1) {
      return true;
    }
    return false;
  };