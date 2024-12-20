// import { Fragment, Component } from "react";

// import Users from "./Users";
// import classes from "./UserFinder.module.css";
// import UsersContext from "../store/users-context";

// // const DUMMY_USERS = [
// //   { id: "u1", name: "Max" },
// //   { id: "u2", name: "Manuel" },
// //   { id: "u3", name: "Julie" },
// // ];

// class UserFinder extends Component {
//   static contextType = UsersContext;

//   constructor() {
//     super();
//     this.state = {
//       filteredUsers: [],
//       searchTerm: "",
//     };
//   }

//   // HTTP 요청 보내기
//   componentDidMount() {
//     this.setState({ filteredUsers: this.contextType });
//   }

//   // useEffect 대체
//   componentDidUpdate(prevProps, prevState) {
//     // 상태변화로 리렌더링 시 호출
//     if (prevState.searchTerm !== this.state.searchTerm) {
//       // 의존성을 if문 조건검사로 대체
//       this.setState({
//         filteredUsers: this.contextType.filter((user) =>
//           user.name.includes(this.state.searchTerm)
//         ),
//       });
//     }
//   }

//   searchChangeHandler(event) {
//     this.setState({ searchTerm: event.target.value });
//   }

//   render() {
//     return (
//       <Fragment>
//         <div className={classes.finder}>
//           <input type="search" onChange={this.searchChangeHandler.bind(this)} />
//         </div>
//         <Users users={this.state.filteredUsers} />
//       </Fragment>
//     );
//   }
// }

// // const UserFinder = () => {
// //   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
// //   const [searchTerm, setSearchTerm] = useState("");

// //   useEffect(() => {
// //     setFilteredUsers(
// //       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
// //     );
// //   }, [searchTerm]);

// //   const searchChangeHandler = (event) => {
// //     setSearchTerm(event.target.value);
// //   };

// //   return (
// //     <Fragment>
// //       <div className={classes.finder}>
// //         <input type="search" onChange={searchChangeHandler} />
// //       </div>
// //       <Users users={filteredUsers} />
// //     </Fragment>
// //   );
// // };

// export default UserFinder;

import { Fragment, useState, useEffect, Component } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary.jsx";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
