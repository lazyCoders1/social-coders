import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
// import { render } from "@testing-library/react";

import { CreateMeetUps } from './MeetUpsDash';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<CreateMeetUps />);
  expect(wrapper).toBeTruthy();
  // console.log(wrapper.debug());
});

test("renders a post meetup form when the post meetup button is clicked", () => {
  const wrapper = shallow(<CreateMeetUps />);
  const postMeetupBtn = wrapper.find(`.post-meetup-btn`);
  const newPostForm = wrapper.find(`.newPost`);

  expect(wrapper).toBeTruthy();
  // console.log(newPostForm.debug());

  expect(newPostForm.exists()).toBeFalsy();

  postMeetupBtn.simulate('click');

  expect(newPostForm).toBeTruthy();
});


