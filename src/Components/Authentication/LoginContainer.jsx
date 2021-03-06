import React from "react";
import { connect } from "react-redux";
import $api from "../../Http/index.js";
import { setUser, isAuth } from "../../Redux/Reducers/userReducer.js";
import { loading, setWrongAuth } from "../../Redux/Reducers/loadingReducer.js";
import Login from "./Login.jsx";
import Preloader from "../../Assets/Preloader/PreloaderPage.jsx";
import { Redirect } from "react-router-dom";

class LoginContainer extends React.Component {
  login = ({ password, email }) => {
    console.log(password);
    console.log(email);
    this.props.loading(true);
    $api
      .post("/login", { email, password })
      .then((response) => {
        console.log(response);
        let user = {
          token: response.data.accessToken,
          username: response.data.user.username,
          _id: response.data.user.id,
          role: response.data.user.roles,
          isAuth: true,
        };
        this.props.setUser(user);
        this.props.loading(false);
        localStorage.setItem("username", user.username);
        localStorage.setItem("isAuth", user.isAuth);
        this.props.isAuth(true);
        localStorage.setItem("token", response.data.accessToken);
      })
      .catch((error) => {
        this.props.setWrongAuth(true);
        this.props.loading(false);
        console.log("wrong auth");
        console.log(error);
      });
  };
  render() {
    if (this.props.state.user.isAuth === true) {
      if (
        this.props.state.user.role[1] &&
        this.props.state.user.role[1] === "ADMIN"
      ) {
        return <Redirect to="/admin" />;
      }
      return <Redirect to="/courses" />;
    }

    return (
      <div>
        {this.props.state.isLoading.isLoading ? (
          <Preloader />
        ) : (
          <Login
            wrongAuth={this.props.state.isLoading.wrongAuth}
            state={this.props.state}
            login={this.login}
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
    setUser: (user) => dispatch(setUser(user)),
    loading: (isLoading) => dispatch(loading(isLoading)),
    isAuth: (value) => dispatch(isAuth(value)),
    setWrongAuth: (value) => dispatch(setWrongAuth(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
