import React from "react";
import { connect } from "react-redux";
import Payment from "./Payment.jsx";
class PaymentContainer extends React.Component {
  render() {
    return <Payment client_secret={this.props.state.user.client_secret} />;
  }
}
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(PaymentContainer);
