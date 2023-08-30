import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = ({ darkModeValue }) => {
  return (
    <nav className={!darkModeValue ? 'navbar' : 'navbar dark'}>
      <MenuIcon />
      <div className="logo">
        <img src="../../../../public/blob.svg" alt="logo" />
        <h1>Finance <span>Wallet</span></h1>
      </div>
      <AccountCircleIcon />
    </nav>
  )
}

export default NavBar