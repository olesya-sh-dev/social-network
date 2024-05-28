import React from "react";
import axios from "axios";
import { UsersMapPropsType } from "./UsersContainer";
import { UsersFunc } from "./UsersFunc";

class UsersAPIComponent extends React.Component<UsersMapPropsType> {
  // если кроме super в конструкторе ничего нет, то можно не писать, он идет по умолчанию
  // constructor(props: UsersMapPropsType) {
  //   super(props);
  // }
  componentDidMount() {
    console.log(this.props.currentPage);
    console.log(this.props.pageSize);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
     
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
   
    return <UsersFunc totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} users={this.props.users} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} follow={this.props.follow} unfollow={this.props.unfollow}/>

 
  }
}

export default UsersAPIComponent;
