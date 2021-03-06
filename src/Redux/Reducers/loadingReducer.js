const LOADING = "LOADING";
const SET_STATUS_CODE = "SET_STATUS_CODE";
const WRONG_AUTH = "WRONG_AUTH";

let initialState = {
  isLoading: false,
  statusCode: "",
  wrongAuth: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRONG_AUTH:
      return {
        ...state,
        wrongAuth: action.value,
      };
    case LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_STATUS_CODE:
      return {
        ...state,
        statusCode: action.value,
      };
    default:
      return state;
  }
};

export default loadingReducer;

export const setWrongAuth = (value) => ({
  type: WRONG_AUTH,
  value,
});
export const loading = (isLoading) => ({
  type: LOADING,
  isLoading,
});
export const setStatusCode = (value) => ({
  type: SET_STATUS_CODE,
  value,
});
