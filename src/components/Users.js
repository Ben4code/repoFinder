import React, { Component } from 'react'
//import {users} from './Data';
import User from './User';
// import Pagination from './Pagination';


export default class Users extends Component {
  
  // state = {
    
  //   users: null
  // }
  
  // componentDidMount(){
  //   this.setState({users: this.props.users})
  // }
  
  getUsers = (users) => {
    if(users !== ''){
      return users.map(user => (
        <User key={user.id} userData={user}/>
      ))
    }
  }

  render() {
    return (
      <div className="users">
        {this.getUsers(this.props.users)}
      </div>
    )
  }
}
