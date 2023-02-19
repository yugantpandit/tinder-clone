import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import "./Header.css"
import MessageIcon from '@mui/icons-material/Message';

function Header() {
  return (
    <div className='header'>
     <IconButton>
      <PersonIcon/>
      </IconButton>
      <img className="header__logo"
      src='https://1000logos.net/wp-content/uploads/2018/07/tinder-app-logo.jpg'
      alt=''/>
      <IconButton>
      <MessageIcon/>
      </IconButton>
    </div>
  )
}

export default Header
