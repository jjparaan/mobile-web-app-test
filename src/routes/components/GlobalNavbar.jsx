import React from 'react'
import './GlobalNavbar.scss'
import { Link, } from 'react-router-dom'

const GlobalNavbar = ({ children }) => {
  return (
    <section className='nav-container'>
      <nav>
        <div className="left">logo</div>
        {children && <ul>
          <li>
            <Link to={children.dir}>{children.name}</Link>
          </li>
        </ul>}
      </nav>
    </section>
  )
}

export default GlobalNavbar