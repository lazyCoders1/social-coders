const initialState = {
  //!USER_INFO
  email: "",
  name: "",
  id: "",
  profile_pic: "",
  //!CREATE_POST
  createInput: "",
  createTitle: "",
  createComment: ""
};

// ACTION CONSTANTS
const UPDATE_USER_INFO = "UPDATE_USER_INFO";
const UPDATE_POST_INPUT = "UPDATE_POST_INPUT";
const UPDATE_POST_TITLE = "UPDATE_POST_TITLE";
const UPDATE_COMMENT = "UPDATE_COMMENT";
const CLEAR_STATE = "CLEAR_STATE";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_INFO:
      return { ...state, ...action.payload };

    //!PROFILE_IMG
    //!---------
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
  }
}

//? ACTION CREATOR
export function updateUserInfo(userObj) {
  return {
    type: UPDATE_USER_INFO,
    payload: userObj
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
export default reducer;
