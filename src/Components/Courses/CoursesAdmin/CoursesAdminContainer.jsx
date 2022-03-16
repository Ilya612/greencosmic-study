import React from "react";
import { connect } from "react-redux";
import $api from "../../../Http/index.js";
import CoursesAdmin from "./CoursesCreate/CoursesAdmin.jsx";
import { loading } from "../../../Redux/Reducers/loadingReducer.js";
import Preloader from "../../../Assets/Preloader/PreloaderPage.jsx";

import {
  setCourses,
  addStep,
  updateCourse,
  setCourseTitle,
} from "../../../Redux/Reducers/coursesReducer.js";

class CoursesAdminContainer extends React.Component {
  /*componentDidMount() {
    this.props.loading(true);

    $api
      .get("/course/all")
      .then((response) => {
        console.log(response);
        this.props.loading(false);
        console.log("Vse zaebcom");
      })
      .catch((error) => {
        this.props.loading(false);
        console.log("user unauthorized");
        console.log(error);
      });
  }*/
  change = () => {
    this.props.addStep(this.props.state.courses.stepsLength.length);
  };
  createCourse = (value) => {
    this.props.loading(true);
    let course = {
      courseName: value.courseName,
      steps: this.props.state.courses.courses,
      id: this.props.state.user._id,
    };
    $api
      .post("/admin/course/create", course)
      .then((response) => {
        console.log(response);
        this.props.loading(false);
      })
      .catch((error) => {
        this.props.loading(false);
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.props.state.isLoading.isLoading ? (
          <Preloader />
        ) : (
          <div>
            <CoursesAdmin
              state={this.props.state}
              loading={this.props.loading}
              change={this.change}
              courses={this.props.state.courses.courses}
              stepsLength={this.props.state.courses.stepsLength}
              updateCourse={this.props.updateCourse}
              createCourse={this.createCourse}
            />
          </div>
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
    setCourses: (value) => dispatch(setCourses(value)),
    addStep: (value) => dispatch(addStep(value)),

    updateCourse: (value) => dispatch(updateCourse(value)),
    setCourseTitle: (value) => dispatch(setCourseTitle(value)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesAdminContainer);
