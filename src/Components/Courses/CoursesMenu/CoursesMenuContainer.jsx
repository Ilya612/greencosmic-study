import React from "react";
import { connect } from "react-redux";
import $api from "../../../Http/index.js";
import CoursesMenu from "./CoursesMenu.jsx";
import { loading } from "../../../Redux/Reducers/loadingReducer.js";
import { isAuth } from "../../../Redux/Reducers/userReducer.js";
import {
  setCourses,
  setCurrentCourseName,
} from "../../../Redux/Reducers/coursesReducer.js";
import Preloader from "../../../Assets/Preloader/PreloaderPage.jsx";
import style from "./Courses.module.css";
import { Redirect } from "react-router-dom";
class CoursesMenuContainer extends React.Component {
  componentDidMount() {
    this.props.loading(true);
    console.log("zapros");
    $api
      .get("/course/all")
      .then((response) => {
        this.props.loading(false);
        this.props.setCourses(response.data);
      })
      .catch((error) => {
        this.props.loading(false);
        console.log("user unauthorized");
        console.log(error);
      });
  }

  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className={style.container}>
        {this.props.state.isLoading.isLoading ? (
          <Preloader />
        ) : (
          <CoursesMenu
            userCourses={this.props.state.courses.userCourses}
            loading={this.props.loading}
            username={this.props.state.user.username}
            setCurrentCourseName={this.props.setCurrentCourseName}
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
    setCurrentCourseName: (value) => dispatch(setCurrentCourseName(value)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesMenuContainer);
