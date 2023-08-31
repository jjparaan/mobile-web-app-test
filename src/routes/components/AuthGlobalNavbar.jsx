import React from 'react'
import './AuthGlobalNavbar.scss'
import { Link, } from 'react-router-dom'

const AuthGlobalNavbar = ({ children }) => {
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

export default AuthGlobalNavbar