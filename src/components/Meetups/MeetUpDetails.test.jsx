import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
// import { render } from "@testing-library/react";

import MeetUpDetails from './MeetUpDetails';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const wrapper = shallow(<MeetUpDetails />);
  const MeetUpDetailsComp = wrapper.find("[data-test='component-meet-up-details']");
  expect(wrapper).toBeTruthy();
  expect(MeetUpDetailsComp.length).toBe(1);
  // console.log(wrapper.debug());
  // expect(wrapper).toBeFalsy();
});

test("renders edit button", () => {

});

test("clicking button allows you to edit Meetup post", () => {

});




// !REF
// import React from "react";
// import { MeetUpDetails } from "./MeetUpDetails";
// import { shallow } from "enzyme";

// describe("<MeetUpDetails />", () => {
//   it("it renders an edit button", () => {
//     const props = { match: { params: { id: 1 } } };
//     const wrapper = shallow(<MeetUpDetails {...props} />);
//     const editButton = wrapper.find(".edit-btn");

//     expect(editButton.contains("Edit")).toEqual(true);
//   });

//   it("it renders edit inputs on edit button click", () => {
//     // const updatePostInput = jest.fn(); //!this is a fake fn called "updatePostInput"
//     const props = {
//       updatePostInput: jest.fn(),
//       updatePostTitle: jest.fn(),
//       match: { params: { id: 1 } },
//       createTitle: "fun"
//     };
//     const wrapper = shallow(<PostDetails {...props} />);
//     const editButton = wrapper.find(".edit-btn");

//     editButton.simulate("click");

//     const editTitle = wrapper.find(".edit-title");
//     expect(editTitle.name()).toEqual("input");

//     const editContent = wrapper.find(".edit-content");
//     expect(editContent.name()).toEqual("Input");

//     // expect(props.updatePostInput).toBeCalled();
//     // expect(editTitle.get(0).value('fun')).toEqual(true);
//     // expect(editTitle.props().value('fun')).toEqual(true);
//   });

//   it("invokes edit functions on edit button click", () => {
//     const props = {
//       updatePostInput: jest.fn(),
//       updatePostTitle: jest.fn(),
//       match: { params: { id: 1 } },
//       createTitle: "fun"
//     };
//     const wrapper = shallow(<PostDetails {...props} />);
//     const editButton = wrapper.find(".edit-btn");

//     editButton.simulate("click");

//     expect(props.updatePostInput).toBeCalled();
//     expect(props.updatePostTitle).toBeCalled();
//   });
// });
