const LOADING = "LOADING";
const SET_STATUS_CODE = "SET_STATUS_CODE";

let initialState = {
  isLoading: false,
  statusCode: "",
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
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

export const loading = (isLoading) => ({
  type: LOADING,
  isLoading,
});
export const setStatusCode = (value) => ({
  type: SET_STATUS_CODE,
  value,
});
