import * as constants from "./constants";
import { fromJS } from "immutable";
const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社會熱點",
      imgUrl:
        "http://upload-images.jianshu.io/upload_images/11899212-bb3bc053d689da5b"
    },
    {
      id: 2,
      title: "手繪",
      imgUrl:
        "http://upload-images.jianshu.io/upload_images/11899212-bb3bc053d689da5b"
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
