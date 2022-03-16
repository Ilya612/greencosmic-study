const SET_COURSES = "SET_COURSES";
const ADD_STEP = "ADD_STEP";
const CREATE_COURSE = "CREATE_COURSE";
const UPDATE_COURSE = "UPDATE_COURSE";
const PUSH_COURSE = "PUSH_COURSE";
const COURSE_TITLE = "COURSE_TITLE";
const SET_PERSONAL_COURSE = "SET_PERSONAL_COURSE";
const SET_TOTAL_PAGES_COUNT = "SET_TOTAL_PAGES_COUNT";
const SET_COURSE_ID = "SET_COURSE_ID";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_PERSONAL_PROGRESS = "SET_PERSONAL_PROGRESS";
const SET_CURRENT_COURSE_NAME = "SET_CURRENT_COURSE_NAME";
const SET_LESSONS = "SET_LESSONS";
const SET_CURRENT_LESSON_NAME = "SET_CURRENT_LESSON";
const SET_STEPS = "SET_STEPS";
const SET_CURRENT_STEP_NAME = "SET_CURRENT_STEP_NAME";
const SET_COURSE_DESCRIPTION = "SET_COURSE_DESCRIPTION";
const SET_ONE_STEP = "SET_ONE_STEP";
const SET_CURRENT_LESSON_NUMBER = "SET_CURRENT_LESSON_NUMBER";

let initialState = {
  courses: [{ id: 0 }, { id: 1 }],
  courseTitle: "",
  stepsLength: [],
  userCourses: "",
  personalCourse: "",
  currentPage: 0,
  totalPagesCount: 0,
  courseDescription: "",
  currentCourseName: "",

  lessons: "",
  currentLessonName: "",
  currentLessonNumber: "",
  steps: [],
  oneStep: "",
  currentStepName: "",
  ////////////////////
  courseId: "",
  personalProgress: "",
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LESSON_NUMBER:
      return {
        ...state,
        currentLessonNumber: action.value,
      };
    case SET_ONE_STEP:
      return {
        ...state,
        oneStep: action.value,
      };
    case SET_COURSE_DESCRIPTION:
      return {
        ...state,
        courseDescription: action.value,
      };
    case SET_STEPS:
      return {
        ...state,
        steps: action.value,
      };
    case SET_CURRENT_STEP_NAME:
      return {
        ...state,
        currentStepName: action.value,
      };
    case SET_CURRENT_LESSON_NAME:
      return {
        ...state,
        currentLessonName: action.value,
      };
    case SET_LESSONS:
      return {
        ...state,
        lessons: action.value,
      };
    case SET_CURRENT_COURSE_NAME:
      return {
        ...state,
        currentCourseName: action.value,
      };
    case SET_COURSES:
      return {
        ...state,
        userCourses: action.value,
      };
    case ADD_STEP:
      let stepsLength = state.stepsLength;
      stepsLength.push(action.value);
      return {
        ...state,
        stepsLength: stepsLength,
      };
    case CREATE_COURSE:
      return {
        ...state,
        courses: action.value,
      };
    case COURSE_TITLE:
      return {
        ...state,
        courseTitle: action.value,
      };
    case UPDATE_COURSE:
      let array = state.courses;
      let i = 0;
      if (array.length === 0) {
        array.splice(array.length, 0, action.value);
        pushCourse(array);
        break;
      } else {
        while (i < array.length) {
          if (array[i].id === action.value.id) {
            array.splice(i, 1, action.value);
            pushCourse(array);
            break;
          }
          if (i === array.length - 1) {
            array.splice(array.length + 1, 0, action.value);
            console.log(array);
            pushCourse(array);
            break;
          }
          i++;
        }
      }

      return state;
    case PUSH_COURSE:
      return {
        ...state,
        courses: action.array,
      };
    case SET_PERSONAL_COURSE:
      return {
        ...state,
        personalCourse: action.value,
      };
    case SET_TOTAL_PAGES_COUNT:
      return {
        ...state,
        totalPagesCount: action.value,
      };
    case SET_COURSE_ID:
      return {
        ...state,
        courseId: action.value,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.value,
      };
    case SET_PERSONAL_PROGRESS:
      return {
        ...state,
        personalProgress: action.value,
      };
    default:
      return state;
  }
};

export default courseReducer;
export const setCurrentLessonNumber = (value) => ({
  type: SET_CURRENT_LESSON_NUMBER,
  value,
});
export const setOneStep = (value) => ({
  type: SET_ONE_STEP,
  value,
});
export const setCourseDescription = (value) => ({
  type: SET_COURSE_DESCRIPTION,
  value,
});
export const setCurrentStepName = (value) => ({
  type: SET_CURRENT_STEP_NAME,
  value,
});
export const setSteps = (value) => ({
  type: SET_STEPS,
  value,
});
export const setCurrentLessonName = (value) => ({
  type: SET_CURRENT_LESSON_NAME,
  value,
});
export const setLessons = (value) => ({
  type: SET_LESSONS,
  value,
});
export const setCurrentCourseName = (value) => ({
  type: SET_CURRENT_COURSE_NAME,
  value,
});
const pushCourse = (value) => ({
  type: PUSH_COURSE,
  value,
});
export const setCourseTitle = (value) => ({
  type: COURSE_TITLE,
  value,
});
export const setCourses = (value) => ({
  type: SET_COURSES,
  value,
});
export const addStep = (value) => ({
  type: ADD_STEP,
  value,
});
export const createCourse = (value) => ({
  type: CREATE_COURSE,
  value,
});
export const updateCourse = (value) => ({
  type: UPDATE_COURSE,
  value,
});
export const setPersonalCourse = (value) => ({
  type: SET_PERSONAL_COURSE,
  value,
});
export const setTotalPagesCount = (value) => ({
  type: SET_TOTAL_PAGES_COUNT,
  value,
});
export const setCourseId = (value) => ({
  type: SET_COURSE_ID,
  value,
});
export const setCurrentPage = (value) => ({
  type: SET_CURRENT_PAGE,
  value,
});
export const setPersonalProgress = (value) => ({
  type: SET_PERSONAL_PROGRESS,
  value,
});
