import React, { Component } from "react";
import Topic from "./component/Topic";
import List from "./component/List";
import Recommed from "./component/Recommed";
import Writer from "./component/Writer";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4581/af5d55e899ff5e06b90fee32c5403772cc9f6e04.jpg"
            alt="540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommed />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    );
  }
}

export default Home;
