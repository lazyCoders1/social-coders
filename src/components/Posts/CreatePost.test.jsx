import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
// import { render } from "@testing-library/react";

import { CreatePost } from "./CreatePost";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const props = {
    location: {
      pathname: '/javascript'
    }
  };
  const wrapper = shallow(<CreatePost {...props} />);
  expect(wrapper).toBeTruthy();
  // console.log(wrapper.debug());
});
