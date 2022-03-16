import React from "react";
import { connect } from "react-redux";
import { loading } from "../../../Redux/Reducers/loadingReducer.js";
import NameHeader from "./NameHeader.jsx";
class NameHeaderContainer extends React.Component {
  render() {
    console.log(this.props.state);
    return (
      <NameHeader
        username={this.props.state.username}
        isAuth={this.props.state.isAuth}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.user,
  };
};

export default connect(mapStateToProps)(NameHeaderContainer);
