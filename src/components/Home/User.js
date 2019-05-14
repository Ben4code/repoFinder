import React from 'react';

export default function User({ userData }) {

    const userDetail = () =>{
        console.log("Clicked");
    }

    const getUser = (userData) => {
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
                        <button className="btn btn-link" onClick={()=> userDetail()}>
                             View Profile    
                        </button>
                    </div>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href={userData.html_url} className="btn btn-link link">View on Github</a>
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
