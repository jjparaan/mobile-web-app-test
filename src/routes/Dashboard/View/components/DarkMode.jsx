import React from 'react'
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

const DarkMode = () => {
  return (
    <section className='darkMode'>
        <ToggleOffIcon />
        <p>Dark Mode</p>
    </section>
  )
}

export default DarkMode