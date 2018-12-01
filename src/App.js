import React, { Component } from "react";
import Header from "./common/header";
import { Provider } from "react-redux";
import GlobalStyleFont from "./statics/iconfont/iconfont";
import GlobalStyle from "./style";
import store from "./store";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <GlobalStyleFont />
        <Provider store={store}>
          <Header />
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
