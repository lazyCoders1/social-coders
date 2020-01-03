import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
// import { render } from "@testing-library/react";

import { Comment } from "./Comment";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const props = {
    comment: {
      id: 1,
      content: "stuff and stuff",
      name: "donald duck",
      profile_pic: "url:image/blah/ducks"
    }
  };
  const wrapper = shallow(<Comment {...props} />);
  expect(wrapper).toBeTruthy();
  // console.log(wrapper.debug());
});
