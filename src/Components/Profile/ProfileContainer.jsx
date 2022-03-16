import React from "react";
import $api from "../../Http/index.js";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { loading } from "../../Redux/Reducers/loadingReducer.js";
import {
  setBirthday,
  setPhoneNumber,
  setCity,
  setLinkFacebook,
  setLinkLinkedIn,
  setLinkInstagram,
} from "../../Redux/Reducers/userReducer.js";
class ProfileContainer extends React.Component {
  componentDidMount() {
    loading(true);
    $api
      .post("/user-information")
      .then((res) => {
        if (res.data?.birthday) {
          this.props.setBirthday(res.data.birthday);
        }
        if (res.data?.phoneNumber) {
          this.props.setPhoneNumber(res.data.phoneNumber);
        }
        if (res.data?.city) {
          this.props.setCity(res.data.city);
        }
        if (res.data?.linkFacebook) {
          this.props.setLinkFacebook(res.data.linkFacebook);
        }
        if (res.data?.linkLinkedIn) {
          this.props.setLinkLinkedIn(res.data.linkLinkedIn);
        }
        if (res.data?.linkInstagram) {
          this.props.setLinkInstagram(res.data.linkInstagram);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  saveChanges = () => {};
  render() {
    return (
      <Profile
        username={this.props.state.user.username}
        birthday={this.props.state.user.birthday}
        phoneNumber={this.props.state.user.phoneNumber}
        city={this.props.state.user.city}
        linkFacebook={this.props.state.user.linkFacebook}
        linkLinkedIn={this.props.state.user.linkLinkedIn}
        linkInstagram={this.props.state.user.linkInstagram}
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
    setBirthday: (value) => dispatch(setBirthday(value)),
    setPhoneNumber: (value) => dispatch(setPhoneNumber(value)),
    setCity: (value) => dispatch(setCity(value)),
    setLinkFacebook: (value) => dispatch(setLinkFacebook(value)),
    setLinkLinkedIn: (value) => dispatch(setLinkLinkedIn(value)),
    setLinkInstagram: (value) => dispatch(setLinkInstagram(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
