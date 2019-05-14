import React from 'react'
import User from './User';


export default function Users({users}) {
  
  const getUsers = (users) => {
    if(users !== ''){
      console.log(users);
      return users.map(user => (
        <User key={user.id} userData={user}/>
      ))
    }
  }
    
  return (
    <div className="users">
      {getUsers(users)}
    </div>
  )
}
