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
  meetupTitle: "",
  meetupImg: "",
  meetupDate: "",
  meetupDescription: "",
  meetupStreet: "",
  meetupCity: "",
  meetupState: "",
  meetupZipcode: "",
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
const MEETUP_TITLE = "MEETUP_TITLE";
const MEETUP_IMG = "MEETUP_IMG";
const MEETUP_DATE = "MEETUP_DATE";
const MEETUP_DESCRIPTION = "MEETUP_DESCRIPTION";
const MEETUP_STREET = "MEETUP_STREET";
const MEETUP_CITY = "MEETUP_CITY";
const MEETUP_STATE = "MEETUP_STATE";
const MEETUP_ZIPCODE = "MEETUP_ZIPCODE";
const MEETUP_POST = "MEETUP_POST";

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
    case MEETUP_TITLE:
      return Object.assign({}, state, { meetupTitle: action.payload });

    case MEETUP_IMG:
      return Object.assign({}, state, { meetupImg: action.payload });

    case MEETUP_DATE:
      return Object.assign({}, state, { meetupDate: action.payload });

    case MEETUP_DESCRIPTION:
      return Object.assign({}, state, { meetupDescription: action.payload });

    case MEETUP_STREET:
      return Object.assign({}, state, { meetupStreet: action.payload });

    case MEETUP_CITY:
      return Object.assign({}, state, { meetupCity: action.payload });

    case MEETUP_STATE:
      return Object.assign({}, state, { meetupState: action.payload });

    case MEETUP_ZIPCODE:
      return Object.assign({}, state, { meetupZipcode: action.payload });

    case MEETUP_POST:
      return Object.assign({}, state, { meetupPosts: action.payload });

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
export function meetupTitle(createMeetupTitle) {
  return {
    type: MEETUP_TITLE,
    payload: createMeetupTitle
  };
}
export function meetupImg(createMeetupImg) {
  return {
    type: MEETUP_IMG,
    payload: createMeetupImg
  };
}
export function meetupDate(createMeetupDate) {
  return {
    type: MEETUP_DATE,
    payload: createMeetupDate
  };
}
export function meetupDescription(createMeetupDescription) {
  return {
    type: MEETUP_DESCRIPTION,
    payload: createMeetupDescription
  };
}
export function meetupStreet(createMeetupStreet) {
  return {
    type: MEETUP_STREET,
    payload: createMeetupStreet
  };
}
export function meetupCity(createMeetupCity) {
  return {
    type: MEETUP_CITY,
    payload: createMeetupCity
  };
}
export function meetupState(createMeetupState) {
  return {
    type: MEETUP_STATE,
    payload: createMeetupState
  };
}
export function meetupZipcode(createMeetupZipcode) {
  return {
    type: MEETUP_ZIPCODE,
    payload: createMeetupZipcode
  };
}
export function updateMeetupPosts(createMeetupPosts) {
  return {
    type: MEETUP_POST,
    payload: createMeetupPosts
  };
}
//!--------

export default reducer;
