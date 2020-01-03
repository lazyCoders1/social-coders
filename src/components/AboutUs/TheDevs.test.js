import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
// import { render } from "@testing-library/react";

import TheDevs from "./TheDevs";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<TheDevs />);
  expect(wrapper).toBeTruthy();
  // console.log(wrapper.debug());
});
