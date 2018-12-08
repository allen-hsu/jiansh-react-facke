import React, { Component } from "react";
import Header from "./common/header";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from "./pages/login";
import Write from "./pages/write";
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
          <BrowserRouter>
            <div>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/write" exact component={Write} />
              <Route path="/detail/:id" exact component={Detail} />
            </div>
          </BrowserRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
