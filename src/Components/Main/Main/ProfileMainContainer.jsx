import React from "react";
import { connect } from "react-redux";
import { setCurrentLessonName } from "../../../Redux/Reducers/coursesReducer.js";

import ProfileMain from "./ProfileMain.jsx";
class ProfileMainContainer extends React.Component {
  render() {
    return (
      <ProfileMain
        currentCourseName={this.props.state.courses.currentCourseName}
        currentLessonName={this.props.state.courses.currentLessonName}
        lessons={this.props.state.courses.lessons}
        username={this.props.state.user.username}
        isAuth={this.props.state.user.isAuth}
        setCurrentLessonName={this.props.setCurrentLessonName}
      />
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
    setCurrentLessonName: (value) => dispatch(setCurrentLessonName(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileMainContainer);
