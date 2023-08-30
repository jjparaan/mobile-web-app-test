import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useSelector, useDispatch } from 'react-redux';
import { doToggleDarkMode } from '../../../../redux/features/darkMode/darkModeSlice';

const DarkMode = () => {
  const darkModeValue = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();

  return (
    <section className='darkMode' onClick={() => dispatch(doToggleDarkMode())}>
      {!darkModeValue ? (
        <>
          <DarkModeIcon />
          <p>Dark Mode</p>
        </>
      ) : (
        <>
          <LightModeIcon />
          <p>Light Mode</p>
        </>
      )}
    </section>
  )
}

export default DarkMode