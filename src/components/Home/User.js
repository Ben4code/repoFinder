import React, { Component } from 'react';
import axios from 'axios';
import './Modal.css';


export default class User extends Component {

    state = { user: '', followerCount: '', starsCount: 0, modalState: false }

    getProfile = (url) => {
        axios.get(url)
            .then(response => {
                axios.get(`${response.data.followers_url}?&per_page=100`)
                    .then((res) => {
                        const followers = res.data.length;
                        this.setState({ user: response.data, followerCount: followers, modalState: true });
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
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
                    <div>
                        <button className="btn btn-link link" onClick={() => { this.getProfile(userData.url) }}>View Profile</button>
                    </div>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href={userData.html_url} className="btn btn-link link">View on Github</a>
                    </div>
                </div>
            )
        }
    }

    closeModal = () => {
        this.setState({ modalState: false })   
    }

    getModal = (user) => {
            return (
                <div>
                    <input className= "modal-state" id="modal-1" type="checkbox" checked={this.state.modalState} />
                    <div className="modal" style={{ zIndex: 40000 }} >
                        <div className="modal__bg" htmlFor="modal-1" onClick={() => this.closeModal()}></div>
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
                                    <p>Followers: {this.state.followerCount}</p>
                                    <p>Stars: {this.state.starsCount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        
    }

    render() {
        return (
            <div className="loading">
                {this.getUser(this.props.userData)}
                {this.getModal(this.state.user)}
            </div>
        )
    }
}


