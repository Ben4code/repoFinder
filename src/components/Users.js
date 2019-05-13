import React, { Component } from 'react'
import {users} from './Data';
import User from './User';



export default class Users extends Component {
  
  state = {
    resData: false,
    users: null
  }
  
  componentDidMount(){
    this.setState({users: users})
  }
  
  getUsers = (users) => {
    if(users !== null){
      return users.map(user => (
        <User key={user.id} userData={user}/>
      ))
    }
  }

  render() {
    return (
      <div className="users">
        {this.getUsers(this.state.users)}
      </div>
    )
  }
}
