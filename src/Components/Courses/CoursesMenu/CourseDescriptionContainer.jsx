import React from "react";
import { connect } from "react-redux";
import $api from "../../../Http/index.js";
import CourseDescription from "./CourseDescription.jsx";
import { loading } from "../../../Redux/Reducers/loadingReducer.js";
import { isAuth } from "../../../Redux/Reducers/userReducer.js";
import { setCourseDescription } from "../../../Redux/Reducers/coursesReducer.js";
import Preloader from "../../../Assets/Preloader/PreloaderPage.jsx";
import { Redirect } from "react-router-dom";
import style from "./Courses.module.css";

class CourseDescriptionContainer extends React.Component {
  componentDidMount() {
    this.props.loading(true);

    $api
      .post("/course/description", {
        courseName: this.props.state.courses.currentCourseName,
      })
      .then((response) => {
        this.props.loading(false);
        this.props.setCourseDescription(response.data);
      })
      .catch((error) => {
        this.props.loading(false);
        console.log("user unauthorized");
        console.log(error);
      });
  }
  render() {
    console.log(this.props.state.courses.currentCourseName === "");
    if (this.props.state.courses.currentCourseName === "") {
      return <Redirect to="/courses/" />;
    }

    return (
      <div className={style.container}>
        {this.props.state.isLoading.isLoading ? (
          <Preloader />
        ) : (
          <CourseDescription
            courseDescription={this.props.state.courses.courseDescription}
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
    setCourseDescription: (value) => dispatch(setCourseDescription(value)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseDescriptionContainer);
