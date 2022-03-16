import React from "react";
import { connect } from "react-redux";
import $api from "../../Http/index.js";
import { setUser } from "../../Redux/Reducers/userReducer.js";
import { loading, setStatusCode } from "../../Redux/Reducers/loadingReducer.js";
import Authentication from "./Authentication.jsx";
import Preloader from "../../Assets/Preloader/PreloaderPage.jsx";

class AuthenticationContainer extends React.Component {
  registration = ({ username, password, email }) => {
    // this.props.loading(true);
    $api
      .post("/registration", { email, password, username })
      .then((response) => {
        console.log(response);
        /* let user = {
            token: response.data.accessToken,
            username: response.data.user.username,
          };
          props.setUser(user);*/
        // this.props.setStatusCode(response.status);
        window.open(response.data.url, "payment_page", [
          "popup=yes",
          "height=600",
          "width=600",
          "left=300",
          "top=20",
        ]);
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
          <Authentication
            state={this.props.state}
            registration={this.registration}
          />
        )}
      </div>
    );
  }
}
//console.log(AuthenticationContainer);
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
    loading: (isLoading) => dispatch(loading(isLoading)),
    setStatusCode: (value) => dispatch(setStatusCode(value)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationContainer);
