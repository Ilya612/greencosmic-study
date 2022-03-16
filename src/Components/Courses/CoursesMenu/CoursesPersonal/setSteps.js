import store from "../../../../Redux/reduxStore.js";
import $api from "../../../../Http/index.js";

import { setSteps } from "../../../../Redux/Reducers/coursesReducer.js";
function changeStepsArray(courseName, lessonName) {
  console.log("Внутри API");
  console.log(courseName);
  console.log(lessonName);
  console.log("Внутри API");
  $api
    .post("/course/steps", {
      courseName,
      lessonName,
    })
    .then((response) => {
      console.log(response);
      store.dispatch(setSteps(response.data.steps));
    })
    .catch((error) => {
      console.log("req error");
      console.log(error);
    });
}
export default changeStepsArray;
