import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";


export const shallowRender = (ComponentToShallowRender) => {
    const renderer = new ShallowRenderer();
    renderer.render(<ComponentToShallowRender />);
    return renderer.getRenderOutput();
  };