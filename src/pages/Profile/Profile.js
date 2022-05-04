import React from 'react'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import './Profile.css'

const Profile = () => {
  const user = useSelector(state=>state.user.userData)
  console.log(user)
  return (
    <div className='profileContainer'>
      <Typography variant='h1'>Welcome {user.name}</Typography>
    </div>
  )
}

export default Profile