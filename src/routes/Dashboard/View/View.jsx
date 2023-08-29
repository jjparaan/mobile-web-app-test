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
import './View.scss'
import DarkMode from './components/DarkMode'

const View = () => {
  return (
    <div className='view'>
        <NavBar />
        <Stats />
        <Features />
        <People />
        <Companies />
        <Cards />
        <DarkMode />
        <Ads />
        <Transactions />
        <News />
        <ToolBar />
    </div>
  )
}

export default View