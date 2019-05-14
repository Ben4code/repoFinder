import React, { Component } from 'react'
import axios from 'axios';


export default class Index extends Component {
  state={
    userData: ''
  }

  componentDidMount(){
    const userLogin = this.props.match.params.userId;
    axios.get(userLogin)
  }


  getUser = (userData) => {
    if (userData !== null) {
      return (
        <div className="users__card">
          <div className="users__avatar">
            <img src={userData.avatar_url} alt="User Avatar" />
          </div>
          <div className="users__name">
            {userData.login}
          </div>
          <div className=" users__desc">
            {userData.userDesc.length > 140 ? userData.userDesc.substr(0, 140) + "..." : userData.userDesc}
          </div>
          <div className="tab users__stars">
            <i className="fa fa-star"></i>
            {userData.userStars}
          </div>
          <div className="tab users__followers">
            <i className="fa fa-users"></i> {userData.userFollowers}
          </div>
          <div>
            <button className="btn btn-link">View on Github</button>
          </div>
        </div>
      )
    }
  }


  render() {
    return (
      <div>
        {/* {this.getUser(userData)} */}
      </div>
    )
  }
}
