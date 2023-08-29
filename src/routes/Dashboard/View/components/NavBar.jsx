import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
  return (
    <nav className='navbar'>
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