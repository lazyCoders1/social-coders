const initialState = {
  //!USER_INFO
  email: "",
  name: "",
  id: "",
  profile_pic: "",
  posts: [],
  //!CREATE_POST
  createInput: "",
  createTitle: "",
  createComment: "",
  //!MEETUPS

  meetupPosts: []
};

//?ACTION CONSTANTS
const UPDATE_USER_INFO = "UPDATE_USER_INFO";
const UPDATE_POSTS = "UPDATE_POSTS";
const UPDATE_POST_INPUT = "UPDATE_POST_INPUT";
const UPDATE_POST_TITLE = "UPDATE_POST_TITLE";
const UPDATE_COMMENT = "UPDATE_COMMENT";
const CLEAR_STATE = "CLEAR_STATE";
//!MEETUPS

const GET_MEETUP_POSTS = "GET_MEETUP_POSTS";
const GET_MEETUP_POST_FOR_ID = "GET_MEETUP_POST_FOR_ID";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return { ...state, ...action.payload };

    //!PROFILE_IMG
    //!---------
    case UPDATE_POSTS:
      return Object.assign({}, state, { posts: action.payload });
    //!CREATE_POST

    case UPDATE_POST_INPUT:
      return Object.assign({}, state, { createInput: action.payload });

    case UPDATE_POST_TITLE:
      return Object.assign({}, state, { createTitle: action.payload });

    case CLEAR_STATE:
      return initialState;
    //!---------

    //!COMMENTS
    case UPDATE_COMMENT:
      return Object.assign({}, state, { createComment: action.payload });
    //!--------
    default:
      return state;
    //!MEETUPS

    case GET_MEETUP_POSTS:
      return state.meetupPosts;

    case GET_MEETUP_POST_FOR_ID:
      return state.meetupPosts.filter(meetup => meetup.id == action.payload.id);

    //!--------
  }
}

//? ACTION CREATOR
export function updateUserInfo(userObj) {
  return {
    type: UPDATE_USER_INFO,
    payload: userObj
  };
}
// GET DASHBOARD POSTS//
export function updatePosts(postObj) {
  return {
    type: UPDATE_POSTS,
    payload: postObj
  };
}
//!CREATE_POST
export function updatePostInput(createInput) {
  return {
    type: UPDATE_POST_INPUT,
    payload: createInput
  };
}
export function updatePostTitle(createTitle) {
  return {
    type: UPDATE_POST_TITLE,
    payload: createTitle
  };
}
export function clearState() {
  return {
    type: CLEAR_STATE
  };
}
//!---------
//!COMMENT
export function updateComment(createComment) {
  return {
    type: UPDATE_COMMENT,
    payload: createComment
  };
}
//!--------

//!MEETUPS

export function getMeetupPosts() {
  return {
    type: GET_MEETUP_POSTS
  };
}
export function getMeetupPostsForId(id) {
  return {
    type: GET_MEETUP_POST_FOR_ID,
    payload: id
  };
}

//!--------

export default reducer;
