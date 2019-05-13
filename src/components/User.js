import React from 'react'

export default function User({ userData }) {


    const getUser = (userData) => {
        if (userData !== null) {
            return (
                <div className="users__card">
                    <div className="users__avatar">
                        <img src={`./img/users/${userData.userAvatar}`} alt="User Avatar" />
                    </div>
                    <div className="users__name">{userData.userName}</div>
                    <div className="users__desc">{userData.userDesc}</div>
                    <div className="users__stars">{userData.userStars}</div>
                    <div className="users__followers">{userData.userFollowers}</div>
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
