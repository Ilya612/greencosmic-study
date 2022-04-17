import React from "react";
import $api from "../../Http/index.js";
import Profile from "./Profile.jsx";
import Preloader from "../../Assets/Preloader/PreloaderPage.jsx";
import { connect } from "react-redux";
import { loading } from "../../Redux/Reducers/loadingReducer.js";
import { Redirect } from "react-router-dom";
import {
  setBirthday,
  setPhoneNumber,
  setCity,
  setLinkFacebook,
  setLinkLinkedIn,
  setLinkInstagram,
  setUserName,
} from "../../Redux/Reducers/userReducer.js";
class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.loading(true);
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
        console.log(res);
      })
      .finally(() => {
        this.props.loading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  saveChanges = ({
    username,
    city,
    phoneNumber,
    birthday,
    linkFacebook,
    linkLinkedIn,
    linkInstagram,
  }) => {
    this.props.loading(true);
    $api
      .post("/set-user-information", {
        username,
        city,
        phoneNumber,
        birthday,
        linkFacebook,
        linkLinkedIn,
        linkInstagram,
      })
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
        console.log(res);
      })
      .finally(() => {
        this.props.loading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  logout = () => {
    console.log(this.props);
    this.props.loading(true);

    $api
      .post("/logout")
      .then((res) => {
        console.log(res);
        localStorage.clear();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.props.loading(false);
      });
  };
  render() {
    console.log(!localStorage.getItem("token"));
    if (!localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        {this.props.state.isLoading.isLoading ? (
          <Preloader />
        ) : (
          <Profile
            logout={this.logout}
            saveChanges={this.saveChanges}
            username={this.props.state.user.username}
            birthday={this.props.state.user.birthday}
            phoneNumber={this.props.state.user.phoneNumber}
            city={this.props.state.user.city}
            linkFacebook={this.props.state.user.linkFacebook}
            linkLinkedIn={this.props.state.user.linkLinkedIn}
            linkInstagram={this.props.state.user.linkInstagram}
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
    setBirthday: (value) => dispatch(setBirthday(value)),
    setPhoneNumber: (value) => dispatch(setPhoneNumber(value)),
    setCity: (value) => dispatch(setCity(value)),
    setLinkFacebook: (value) => dispatch(setLinkFacebook(value)),
    setLinkLinkedIn: (value) => dispatch(setLinkLinkedIn(value)),
    setLinkInstagram: (value) => dispatch(setLinkInstagram(value)),
    setUserName: (value) => dispatch(setUserName(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
