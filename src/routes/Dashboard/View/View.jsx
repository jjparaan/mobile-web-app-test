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

const View = () => {
  const darkModeValue = useSelector((state) => state.darkMode.value)

  return (
    <div className={!darkModeValue ? 'view' : 'view dark'}>
      <NavBar darkModeValue={darkModeValue}/>
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
    </div>
  )
}

export default View