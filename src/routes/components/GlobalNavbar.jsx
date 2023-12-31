import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { doToggleHamburgerBtn } from '../../redux/features/hamburger/hamburgerSlice';
import './GlobalNavbar.scss'

const GlobalNavbar = ({ darkModeValue, hamburgerValue }) => {
  const dispatch = useDispatch()
  return (
    <nav className={!darkModeValue ? 'navbar' : 'navbar dark'}>
      <div className="menu-btn" onClick={() => dispatch(doToggleHamburgerBtn())}>
        <MenuIcon />
      </div>
      <div className="logo">
        <img src="../../../../public/blob.svg" alt="logo" />
        <h1>Finance <span>Wallet</span></h1>
      </div>
      <AccountCircleIcon />
    </nav>
  )
}

export default GlobalNavbar