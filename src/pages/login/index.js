import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { actionCreators } from "./store";
class Login extends PureComponent {
  render() {
    const { loginStates } = this.props;
    if (!loginStates) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="帳號"
              innerRef={input => {
                this.accout = input;
              }}
            />
            <Input
              placeholder="密碼"
              type="password"
              innerRef={input => {
                this.password = input;
              }}
            />
            <Button
              onClick={() => this.props.login(this.accout, this.password)}
            >
              登入
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => ({
  loginStates: state.getIn(["login", "login"])
});

const mapDispathToProps = dispatch => ({
  login(accout, password) {
    dispatch(actionCreators.login(accout, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Login);
