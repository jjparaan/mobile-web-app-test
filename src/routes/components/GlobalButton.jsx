import React from 'react'
import './GlobalButton.scss'
import { Link } from 'react-router-dom'

const GlobalButton = ({ children }) => {
  return (
    <section className='button-container'>
      <Link to={children?.dir}>
        <button className='global-button'>
          {children?.name}
        </button>
      </Link>
    </section>
  )
}

export default GlobalButton