import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
// import { render } from "@testing-library/react";

import { Landing } from "./Landing";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const props = {
    posts: []
  };
  const wrapper = shallow(<Landing {...props} />);
  expect(wrapper).toBeTruthy();
  // console.log(wrapper.debug());
});
