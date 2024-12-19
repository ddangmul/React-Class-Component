import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  // class 예약어
  // construnctor() {
  //   // 메소드 - 초기화 작업이 필요없어서 삭제
  // }
  render() {
    // render는 props를 받지 않음. this를 통해 모든 props에 접근 가능.
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
