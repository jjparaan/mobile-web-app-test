import React from 'react'
import NavBar from './components/NavBar'
import Stats from './components/Stats'
import Features from './components/Features'
import People from './components/People'
import Companies from './components/Companies'
import Cards from './components/Cards'
import Ads from './components/Ads'
import Transactions from './components/Transactions'
import News from './components/News'
import ToolBar from './components/ToolBar'
import DarkMode from './components/DarkMode'
import './View.scss'
import { useSelector } from 'react-redux'
import SideBar from './components/SideBar'

const View = () => {
  const darkModeValue = useSelector((state) => state.darkMode.value)
  const hamburgerValue = useSelector((state) => state.hamburger.value)
  const classValue = useSelector((state) => state.hamburger.classValue)

  return (
    <div className={!darkModeValue ? 'view' : 'view dark'}>
      <NavBar darkModeValue={darkModeValue} hamburgerValue={hamburgerValue}/>
      <Stats />
      <Features />
      <People />
      <Companies />
      <Cards />
      <DarkMode />
      <Ads />
      <Transactions />
      <News />
      <ToolBar darkModeValue={darkModeValue}/>
      {hamburgerValue && <SideBar classValue={classValue}/>}
    </div>
  )
}

export default View