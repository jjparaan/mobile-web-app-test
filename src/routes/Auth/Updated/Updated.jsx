import React, { useState } from 'react'
import './Updated.scss'
import AuthGlobalNavbar from '../../components/AuthGlobalNavbar'
import { Link } from 'react-router-dom'
import GlobalButton from '../../components/GlobalButton'

const Updated = () => {
    const [localState, setLocalState] = useState({
        signIn: {
            name: "Sign in",
            dir: '/sign-in'
        },

    })
    return (
        <main className='updated'>
            <AuthGlobalNavbar />
            <section className="up-content">
                <svg
                    id="sw-js-blob-svg"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                >
                    <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                            <stop id="stop1" stopColor="rgba(0, 25, 82, 1)" offset="0%" />
                            <stop id="stop2" stopColor="rgba(143, 179, 255, 1)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#sw-gradient)"
                        d="M16.5,-23.4C22.5,-18.3,29.4,-15,30.9,-10.1C32.3,-5.2,28.4,1.4,26.1,8.5C23.9,15.6,23.2,23.3,19.1,26.9C15,30.5,7.5,30,2.3,26.9C-2.9,23.7,-5.9,17.9,-11.2,14.7C-16.6,11.6,-24.5,11,-28.8,7.1C-33.1,3.2,-33.9,-4,-31,-9.2C-28.1,-14.3,-21.5,-17.4,-15.7,-22.5C-9.9,-27.7,-5,-34.9,0.1,-35.1C5.2,-35.3,10.5,-28.4,16.5,-23.4Z"
                        width="100%"
                        height="100%"
                        transform="translate(50 50)"
                        strokeWidth="0"
                        style={{ transition: 'all 0.3s ease 0s' }}
                        stroke="url(#sw-gradient)"
                    />
                </svg>
                <h1>Successfully <span>updated!</span></h1>
                <p>Your account has been successfully updated and all set. You can now login with your new credentials.</p>
            </section>
            <GlobalButton children={localState.signIn}/>
        </main>
    )
}

export default Updated