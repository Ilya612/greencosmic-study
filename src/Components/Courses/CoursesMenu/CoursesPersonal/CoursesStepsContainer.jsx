import React from "react";
import { connect } from "react-redux";

import CoursesSteps from "./CoursesSteps.jsx";
import { loading } from "../../../../Redux/Reducers/loadingReducer.js";
import { isAuth } from "../../../../Redux/Reducers/userReducer.js";
import {
  setLessons,
  setOneStep,
  setCurrentLessonNumber,
  setCurrentLessonName,
  setSteps,
  setCurrentCourseName,
} from "../../../../Redux/Reducers/coursesReducer.js";

import Preloader from "../../../../Assets/Preloader/PreloaderPage.jsx";

class CoursesStepsContainer extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (
      this.props.state?.courses?.steps[0] !==
        nextProps.state?.courses?.steps[0] ||
      this.props.state?.courses?.currentLessonName !==
        nextProps.state?.courses?.steps[0] ||
      this.props.state?.courses?.currentLessonNumber !==
        nextProps.state?.courses?.currentLessonNumber
    ) {
      return true;
    } else return false;
  }

  onPageChanged = () => {
    if (
      this.props.state.courses.currentLessonNumber !==
      this.props.state.courses.lessons.length - 1
    ) {
      let num;
      if (this?.props?.state?.courses?.lessons) {
        this?.props?.state?.courses?.lessons.map((lesson, index) => {
          if (
            lesson.lessonName === this.props.state.courses.currentLessonName
          ) {
            num = index + 1;
          }
        });
      }

      this.props.setCurrentLessonName(
        this.props.state.courses.lessons[num].lessonName
      );
    }
  };
  render() {
    console.log("ВЫЗВАЛСЯ РЕРЕНДЕР");

    return (
      <div>
        {this.props.state.isLoading.isLoading ? (
          <Preloader />
        ) : (
          <CoursesSteps
            setSteps={this.props.setSteps}
            setCurrentLessonName={this.props.setCurrentLessonName}
            setCurrentCourseName={this.props.setCurrentCourseName}
            setCurrentLessonNumber={this.props.setCurrentLessonNumber}
            setLessons={this.props.setLessons}
            onPageChanged={this.onPageChanged}
            lessons={this.props.state.courses.lessons}
            currentCourseName={this.props.state.courses.currentCourseName}
            currentLessonName={this.props.state.courses.currentLessonName}
            currentLessonNumber={this.props.state.courses.currentLessonNumber}
            steps={this.props.state.courses.steps}
            auth={this.props.state.user.isAuth}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loading: (isLoading) => dispatch(loading(isLoading)),
    isAuth: (value) => dispatch(isAuth(value)),
    setLessons: (value) => dispatch(setLessons(value)),
    setSteps: (value) => dispatch(setSteps(value)),
    setCurrentCourseName: (value) => dispatch(setCurrentCourseName(value)),
    setCurrentLessonName: (value) => dispatch(setCurrentLessonName(value)),
    setCurrentLessonNumber: (value) => dispatch(setCurrentLessonNumber(value)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesStepsContainer);
