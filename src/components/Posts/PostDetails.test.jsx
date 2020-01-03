import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
// import { render } from "@testing-library/react";

import { PostDetails } from "./PostDetails";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const props = {
    match: {
      params: {id: 1}
    }
  };
  const wrapper = shallow(<PostDetails {...props} />);
  expect(wrapper).toBeTruthy();
  // console.log(wrapper.debug());
});
