import React from 'react'
import GlobalNavbar from '../../components/GlobalNavbar'
import GlobalToolbar from '../../components/GlobalToolbar'
import GlobalSidebar from '../../components/GlobalSidebar'
import Stats from './components/Stats'
import Features from './components/Features'
import People from './components/People'
import Companies from './components/Companies'
import Cards from './components/Cards'
import Ads from './components/Ads'
import Transactions from './components/Transactions'
import News from './components/News'
import DarkMode from './components/DarkMode'
import './View.scss'
import { useSelector } from 'react-redux'

const View = () => {
  const darkModeValue = useSelector((state) => state.darkMode.value)
  const hamburgerValue = useSelector((state) => state.hamburger.value)
  const classValue = useSelector((state) => state.hamburger.classValue)

  return (
    <div className={!darkModeValue ? 'dbView' : 'dbView dark'}>
      <GlobalNavbar darkModeValue={darkModeValue} hamburgerValue={hamburgerValue}/>
      <Stats />
      <Features />
      <People />
      <Companies />
      <Cards />
      <DarkMode />
      <Ads />
      <Transactions />
      <News />
      <GlobalToolbar darkModeValue={darkModeValue}/>
      {hamburgerValue && <GlobalSidebar classValue={classValue}/>}
    </div>
  )
}

export default View