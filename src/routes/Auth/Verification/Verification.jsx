import React, { useState } from 'react'
import './Verification.scss'
import AuthGlobalNavbar from '../../components/AuthGlobalNavbar'
import GlobalButton from '../../components/GlobalButton';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const Verification = () => {
    const [localState, setLocalState] = useState({
        signIn: {
            name: "Sign in",
            dir: '/sign-in'
        },
        successfullyUpdated: {
            name: "Verify Account",
            dir: '/successfully-updated'
        },
        email: '',
        isFormValid: false,
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLocalState((prevState) => ({
            ...prevState,
            [name]: value,
            isFormValid: true
        }))
    }

    const handleOnSubmit = () => {
        if (!localState.email) {
            setLocalState((prevState) => ({
                ...prevState,
                isFormValid: false
            }))
            return alert("Please provide a valid input credentials")
        }
    }

    return (
        <main className='verification'>
            <AuthGlobalNavbar children={localState.signIn} />
            <section className="v-content">
                <h1>Verify your <span>Email address</span></h1>
                <p>Please check your email and look for the OTP verification code.</p>
                <TextField id="standard-basic" name='email' value={localState.email} onChange={handleInputChange} label="Email" variant="standard" fullWidth />
            </section>
            <div className="loader">
                <CircularProgress style={{ textAlign: 'center' }} />
                <p style={{ textAlign: 'center' }}>Didn't received it yet? <Link to="/verification">Resend OTP</Link></p>
            </div>
            {localState.isFormValid ? (
                <GlobalButton children={localState.successfullyUpdated} />
            ) : (
                <section className="button-container">
                    <button className="btn" onClick={handleOnSubmit}>Verify Account</button>
                </section>
            )}
        </main>
    )
}

export default Verification