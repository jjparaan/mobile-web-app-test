import React from 'react'
import GlobalNavbar from '../../components/GlobalNavbar'
import GlobalSidebar from '../../components/GlobalSidebar'
import GlobalToolbar from '../../components/GlobalToolbar'
import Chart from './components/Chart'
import Stats from './components/Stats'
import { useSelector } from 'react-redux'
import './View.scss'
import Credits from './components/Credits'
import Payments from './components/Payments'

const View = () => {
  const darkModeValue = useSelector((state) => state.darkMode.value)
  const hamburgerValue = useSelector((state) => state.hamburger.value)
  const classValue = useSelector((state) => state.hamburger.classValue)
  
  return (
    <div className={!darkModeValue ? 'statisticsView' : 'statisticsView dark'}>
      <GlobalNavbar darkModeValue={darkModeValue} hamburgerValue={hamburgerValue}/>
      <Chart />
      <Stats />
      <Credits />
      <Payments />

      
      <GlobalToolbar darkModeValue={darkModeValue}/>
      {hamburgerValue && <GlobalSidebar classValue={classValue}/>}
    </div>
  )
}

export default View