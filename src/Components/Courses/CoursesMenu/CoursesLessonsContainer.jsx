import React from "react";
import { connect } from "react-redux";
import $api from "../../../Http/index.js";
import CoursesLessons from "./CoursesLessons.jsx";
import { loading } from "../../../Redux/Reducers/loadingReducer.js";
import { isAuth } from "../../../Redux/Reducers/userReducer.js";
import {
  setCourses,
  setLessons,
  setSteps,
  setCurrentLessonName,
} from "../../../Redux/Reducers/coursesReducer.js";
import Preloader from "../../../Assets/Preloader/PreloaderPage.jsx";
import { Redirect } from "react-router-dom";
class CoursesLessonsContainer extends React.Component {
  componentDidMount() {
    this.props.loading(true);

    $api
      .post("/course/lessons", {
        courseName: this.props.state.courses.currentCourseName,
      })
      .then((response) => {
        this.props.loading(false);
        this.props.setLessons(response.data.lessons);
      })
      .catch((error) => {
        this.props.loading(false);
        console.log("user unauthorized");
        console.log(error);
      });
  }
  render() {
    if (this.props.state.courses.currentCourseName === "") {
      return <Redirect to="/courses" />;
    }
    return (
      <div>
        {this.props.state.isLoading.isLoading ? (
          <Preloader />
        ) : (
          <CoursesLessons
            courseName={this.props.state.courses.courseName}
            username={this.props.state.user.username}
            lessons={this.props.state.courses.lessons}
            setCurrentLessonName={this.props.setCurrentLessonName}
            setSteps={this.props.setSteps}
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
    setCourses: (value) => dispatch(setCourses(value)),
    setLessons: (value) => dispatch(setLessons(value)),
    setCurrentLessonName: (value) => dispatch(setCurrentLessonName(value)),
    setSteps: (value) => dispatch(setSteps(value)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesLessonsContainer);
