const SET_USER = "SET_USER";
const GET_USER = "GET_USER";
const REFRESH_TOKEN = "REFRESH_TOKEN";
const SET_BIRTHDAY = "SET_BIRTHDAY";
const SET_PHONE_NUMBER = "SET_PHONE_NUMBER";
const SET_CITY = "SET_CITY";
const SET_LINK_INST = "SET_LINK_INST";
const SET_LINK_LINKEDIN = "SET_LINK_LINKEDIN";
const SET_LINK_FACEBOOK = "SET_LINK_FACEBOOK";
const CLIENT_SECRET = "CLIENT_SECRET";

const IS_AUTH = "IS_AUTH";

let initialState = {
  client_secret: "",
  token: "",
  username: "",
  _id: "",
  role: "",
  isAuth: false,
  birthday: "",
  phoneNumber: "",
  city: "",
  linkToInstagram: "",
  linkToFacebook: "",
  linkToLinkedIn: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_SECRET:
      return {
        ...state,
        client_secret: action.value,
      };
    case SET_BIRTHDAY:
      return {
        ...state,
        birthday: action.value,
      };
    case SET_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.value,
      };
    case SET_CITY:
      return {
        ...state,
        city: action.value,
      };
    case SET_LINK_INST:
      return {
        ...state,
        linkToInstagram: action.value,
      };
    case SET_LINK_LINKEDIN:
      return {
        ...state,
        linkToLinkedIn: action.value,
      };
    case SET_LINK_FACEBOOK:
      return {
        ...state,
        linkToFacebook: action.value,
      };
    case SET_USER:
      return {
        ...state,
        token: action.user.token,
        username: action.user.username,
        _id: action.user._id,
        role: action.user.role,
      };
    case GET_USER:
      debugger;
      console.log(state);
      break;
    case IS_AUTH:
      return {
        ...state,
        isAuth: action.value,
      };
    case REFRESH_TOKEN:
      return {
        ...state,
        token: action.value.accessToken,
        username: action.value.user.username,
        _id: action.value.user.id,
        role: action.value.user.roles,
      };

    default:
      return state;
  }
};

export default userReducer;
export const setClientSecret = (value) => ({
  type: CLIENT_SECRET,
  value,
});
export const setBirthday = (value) => ({
  type: SET_BIRTHDAY,
  value,
});
export const setPhoneNumber = (value) => ({
  type: SET_PHONE_NUMBER,
  value,
});
export const setCity = (value) => ({
  type: SET_CITY,
  value,
});
export const setLinkFacebook = (value) => ({
  type: SET_LINK_FACEBOOK,
  value,
});
export const setLinkLinkedIn = (value) => ({
  type: SET_LINK_LINKEDIN,
  value,
});
export const setLinkInstagram = (value) => ({
  type: SET_LINK_INST,
  value,
});
export const setUser = (user) => ({
  type: SET_USER,
  user,
});
export const getUser = () => ({
  type: GET_USER,
});

export const isAuth = (value) => ({
  type: IS_AUTH,
  value,
});
export const refreshToken = (value) => ({
  type: REFRESH_TOKEN,
  value,
});
