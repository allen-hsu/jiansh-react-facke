import * as constants from "./constants";
import { fromJS } from "immutable";
const defaultState = fromJS({
  title: "",
  content: ""
  // title: "废柴的选择|140字微小说",
  // content:
  //   '<img src="https://upload-images.jianshu.io/upload_images/2185953-48243709793c4b2a.jpg\n"' +
  //   'alt=""/><p>' +
  //   "夜深人静时，总有一个声音在训诫：“废柴，不惑之年已过，你还整天懵懵懂懂，浑浑噩噩，去死吧！”“我每天勤奋学习，努力工作，任劳任怨，你还这样数落我，还有良心吗？”“假勤奋，伪努力！你十八年前已死了，只剩择日埋葬而已。”我狂吼一声，一把匕首刺入左胸。血泊中，我耳根清静了，嘴角微微笑…</p>"
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      });
    default:
      return state;
  }
};
