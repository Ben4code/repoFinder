import React, { Component } from 'react'
import './UserDetail.css';

export default class Index extends Component {

  state={
    user: ''
  }

  static getDerivedStateFromProps(props, state) {
    if (props.links !== state.links) {
      return { user: props.user };
    }
    else return null;
  }


  getModal = (user) => {
    if (user !== '') {
      return (
        <div>
          <input className="modal-state" id="modal-1" type="checkbox" />
          <div className="modal" style={{ zIndex: 40000 }}>
            <label className="modal__bg" htmlFor="modal-1"></label>
            <div className="modal__inner">
              <label className="modal__close" htmlFor="modal-1"></label>
              <div className="modal__content">
                <div className="modal__content-img">
                  <img src={this.state.user.avatar_url} alt="Profile avatar" />
                </div>
                <div className="modal__content-text">
                  <h2>{this.state.user.name}</h2>
                  <p>{this.state.user.bio}</p>
                  <p>{this.state.user.company}</p>
                  <p>{this.state.user.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <input className="modal-state" id="modal-1" type="checkbox" />
        <div className="modal" style={{ zIndex: 40000 }}>
          <label className="modal__bg" htmlFor="modal-1"></label>
          <div className="modal__inner">
            <label className="modal__close" htmlFor="modal-1"></label>
            <div className="modal__content">
              <div className="modal__content-img">
                <img src={this.state.user.avatar_url} alt="Profile avatar" />
              </div>
              <div className="modal__content-text">
                <h2>{this.state.user.name}</h2>
                <p>{this.state.user.bio}</p>
                <p>{this.state.user.company}</p>
                <p>{this.state.user.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
