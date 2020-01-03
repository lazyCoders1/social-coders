import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
// import { render } from "@testing-library/react";

import MeetUpsDash from "./MeetUp";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const props = {
    meetUpPost: {
      id: 1
    }
  };
  const wrapper = shallow(<MeetUpsDash {...props} />);
  expect(wrapper).toBeTruthy();
  // console.log(wrapper.debug());
});
