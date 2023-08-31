import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import WalletIcon from '@mui/icons-material/Wallet';
import { Link } from 'react-router-dom';
import './GlobalToolbar.scss'

const tabs = [
  {
    icon: <HomeIcon />,
    name: 'Home',
    className: 'tab home',
    to: '/dashboard'
  },
  {
    icon: <SignalCellularAltIcon />,
    name: 'Statistics',
    className: 'tab statistics',
    to: '/statistics'
  },
  {
    icon: <GridViewOutlinedIcon />,
    name: '',
    className: 'center',
  },
  {
    icon: <ShoppingBagIcon />,
    name: 'Shop',
    className: 'tab shop',
    to: '/dashboard'
  },
  {
    icon: <WalletIcon />,
    name: 'Wallet',
    className: 'tab wallet',
    to: '/dashboard'
  },
]

const GlobalToolbar = ({ darkModeValue }) => {
  const tab = tabs.map((tab, index) => (
    <Link to={tab.to} className={tab.className} key={index}>
      {tab.icon}
      <p>{tab.name}</p>
    </Link>
  ));

  return (
    <section className={!darkModeValue ? 'toolBar' : 'toolBar dark'}>
      {tab}
    </section>
  )
}

export default GlobalToolbar