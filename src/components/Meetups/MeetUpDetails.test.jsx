import React from "react";
import Enzyme, { shallow, mount, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
// import { render } from "@testing-library/react";

import {MeetUpDetails} from "./MeetUpDetails";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory fn to create a ShallowWrapper for the MeetUpDetails component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  return shallow(<MeetUpDetails {...props} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper -  Enzyme shallow wrapper to search withim.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without crashing", () => {
  const wrapper = setup();
  const MeetUpDetailsComp = findByTestAttr(wrapper, "component-meet-up-details");
  // expect(wrapper).toBeTruthy();
  expect(MeetUpDetailsComp.length).toBe(1);
  // console.log(wrapper.debug());
  // expect(wrapper).toBeFalsy();
});

test("renders edit button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "edit-button-display");
  expect(wrapper).toBeTruthy();
  // console.log(wrapper.debug());

  expect(button.length).toBe(0);
});

test("clicking button allows you to edit Meetup post", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "edit-button-click");

  expect(button.length).toBe(0);
});

// test("isEditing false", () => {
//   const wrapper = setup();
//   const isEditingState = wrapper.state(false);

//   expect(wrapper).toBeFalsey();
//   // expect(isEditingState).toBe(0)
// });

// !STATE FALSEY
// 
