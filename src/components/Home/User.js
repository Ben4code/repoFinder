import React, { Component } from 'react';
import axios from 'axios';
import UserDetail from '../UserDetail/Index'
import '../UserDetail/UserDetail.css';


export default class User extends Component {
    state = { user: '', followerCount:'', starsCount: '', modalState: false }

    getProfile = (url) => {
        axios.get(url)
            .then(response => {
                axios.get(`${response.data.followers_url}?&per_page=100`)
                .then((res) => {
                    const followers = res.data.length;
                    this.setState({ user: response.data, followerCount: followers, modalState: !this.state.modalState });
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
                        <p>
                            <label className="btn btn-link link" htmlFor="modal-1" onClick={() => { this.getProfile(userData.url) }}>View Profile</label>
                            
                        </p>
                    </div>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href={userData.html_url} className="btn btn-link link">View on Github</a>
                    </div>
                </div>
            )
        }
    }

    toggleModal = () => {
        
        this.setState({modalState: !this.state.modalState})
        
        if(this.state.modalState){
            console.log(this.state.modalState);
        }else{
            this.setState({user: ''})
            console.log(this.state.modalState);
        }
    }

    getModal = (user) => {
        if (user !== '') {
            return (
                <div>
                    <input className="modal-state" id="modal-1" type="checkbox"  onClick={() => { this.toggleModal() }}/>
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
                {this.getUser(this.props.userData)}
                {this.state.user === '' ? null : <UserDetail user={this.state.user}/> }
                {/* {this.getModal(this.state.user)} */}
                {/* <UserDetail user={this.state.user}/> */}
            </div>
        )
    }
}


