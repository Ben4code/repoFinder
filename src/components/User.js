import React from 'react'

export default function User({ userData }) {


    const getUser = (userData) => {
        if (userData !== null) {
            return (
                <div className="users__card">
                    <div className="users__avatar">
                        <img src={`./img/users/${userData.userAvatar}`} alt="User Avatar" />
                    </div>
                    <div className="users__name">
                        {userData.userName}
                    </div>
                    <div className=" users__desc">
                        {userData.userDesc}
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


    return (
        <div>
            {getUser(userData)}
        </div>
    )
}
