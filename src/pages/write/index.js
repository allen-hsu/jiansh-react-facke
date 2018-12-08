import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Write extends PureComponent {
  render() {
    const { loginStates } = this.props;
    if (loginStates) {
      return <div>寫文章</div>;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = state => ({
  loginStates: state.getIn(["login", "login"])
});

const mapDispathToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Write);
