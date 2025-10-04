import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContext);
  if(!user) return <div>please login </div>

  return <div>Hi {user.username}, Your password is {user.password}</div>
  
}

export default Profile