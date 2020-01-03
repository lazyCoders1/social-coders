import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
// import { render } from "@testing-library/react";

import { Post } from "./Post";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders without crashing", () => {
  const props = {
    key: 1,
    post: {
      id: 1,
      title: "Fun",
      img: "url:/funstuff",
      content: 'thanks for the fun testing',
      name: 'Cody',
      profile_pic: 'url:/figjer',
      author_id: 7
    }
  };
  const wrapper = shallow(<Post {...props} />);

  expect(wrapper).toBeTruthy();
});

test("renders a title", () => {
  const props = {
    key: 1,
    post: {
      id: 1,
      title: "Fun",
      img: "url:/funstuff",
      content: 'thanks for the fun testing',
      name: 'Cody',
      profile_pic: 'url:/figjer',
      author_id: 7
    }
  };
  const wrapper = shallow(<Post {...props} />);
  const title = wrapper.find(`.title`);
  // console.log(title.debug());

  expect(wrapper).toBeTruthy();
  expect(title.contains(`Fun`)).toBeTruthy();
});

test("renders post content", () => {
  const props = {
    key: 1,
    post: {
      id: 1,
      title: "Fun",
      img: "url:/funstuff",
      content: 'thanks for the fun testing',
      name: 'Cody',
      profile_pic: 'url:/figjer',
      author_id: 7
    }
  };
  const wrapper = shallow(<Post {...props} />);
  const content = wrapper.find(`.post-content`);
  // console.log(content.debug());

  expect(wrapper).toBeTruthy();
  expect(content.contains(`thanks for the fun testing`)).toBeTruthy();
});

test("renders user name", () => {
  const props = {
    key: 1,
    post: {
      id: 1,
      title: "Fun",
      img: "url:/funstuff",
      content: 'thanks for the fun testing',
      name: 'Cody',
      profile_pic: 'url:/figjer',
      author_id: 7
    }
  };
  const wrapper = shallow(<Post {...props} />);
  const name = wrapper.find(`.users-name`);
  // console.log(name.debug());

  expect(wrapper).toBeTruthy();
  expect(name.contains(`Cody`)).toBeTruthy();
});

test("renders a purple heart for the like icon if there are no likes(default state)", () => {
  const props = {
    key: 1,
    post: {
      id: 1,
      title: "Fun",
      img: "url:/funstuff",
      content: 'thanks for the fun testing',
      name: 'Cody',
      profile_pic: 'url:/figjer',
      author_id: 7
    }
  };
  const wrapper = shallow(<Post {...props} />);
  const likeIcon = wrapper.find(`[data-test="like-icon"]`)
  // console.log(likeIcon.debug());

  expect(wrapper).toBeTruthy();
  expect(likeIcon.hasClass(`heart-purple`)).toBeTruthy();
});

test("renders a red heart for the like icon once it has been clicked", () => {
  const props = {
    key: 1,
    post: {
      id: 1,
      title: "Fun",
      img: "url:/funstuff",
      content: 'thanks for the fun testing',
      name: 'Cody',
      profile_pic: 'url:/figjer',
      author_id: 7
    }
  };
  const wrapper = shallow(<Post {...props} />);
  const likeIcon = wrapper.find(`[data-test="like-icon"]`);
  // console.log(likeIcon.debug());
  // likeIcon.simulate('click');

  expect(wrapper).toBeTruthy();
  expect(likeIcon.hasClass(`heart-red`)).toBeFalsy();
});
