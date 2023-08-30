import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import WalletIcon from '@mui/icons-material/Wallet';

const tabs = [
  {
    icon: <HomeIcon />,
    name: 'Home',
    className: 'tab',
  },
  {
    icon: <SignalCellularAltIcon />,
    name: 'Statistics',
    className: 'tab',
  },
  {
    icon: <GridViewOutlinedIcon />,
    name: '',
    className: 'centerTab',
  },
  {
    icon: <ShoppingBagIcon />,
    name: 'Shop',
    className: 'tab',
  },
  {
    icon: <WalletIcon />,
    name: 'Wallet',
    className: 'tab',
  },
]

const ToolBar = ({ darkModeValue }) => {
  const tab = tabs.map((tab, index) => (
    <div className={tab.className} key={index}>
      {tab.icon}
      <p>{tab.name}</p>
    </div>
  ));

  return (
    <section className={!darkModeValue ? 'toolBar' : 'toolBar dark'}>
      {tab}
    </section>
  )
}

export default ToolBar