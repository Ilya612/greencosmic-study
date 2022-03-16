import React from "react";
import { connect } from "react-redux";
import { loading } from "../../../Redux/Reducers/loadingReducer.js";
import NameMain from "./NameMain.jsx";
class NameMainContainer extends React.Component {
  render() {
    return (
      <NameMain
        username={this.props.state.user.username}
        isAuth={this.props.state.user.isAuth}
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
    loading: (isLoading) => dispatch(loading(isLoading)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NameMainContainer);
