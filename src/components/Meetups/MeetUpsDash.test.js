import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
// import { render } from "@testing-library/react";

import MeetUpDash from './MeetUpsDash';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<MeetUpDash />);
  expect(wrapper).toBeTruthy();
  // console.log(wrapper.debug());
  // expect(wrapper).toBeFalsy();
});