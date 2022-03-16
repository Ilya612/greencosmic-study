import { combineReducers, createStore } from "redux";
import userReducer from "./Reducers/userReducer.js";
import coursesReducer from "./Reducers/coursesReducer.js";
import loadingReducer from "./Reducers/loadingReducer.js";

let reducers = combineReducers({
  courses: coursesReducer,
  user: userReducer,
  isLoading: loadingReducer,
});
let store = createStore(reducers);

//window.store = store;

export default store;
