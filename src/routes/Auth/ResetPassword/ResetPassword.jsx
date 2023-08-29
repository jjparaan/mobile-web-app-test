import React, { useState } from 'react'
import './ResetPassword.scss'
import Navbar from '../../components/Navbar'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import GlobalButton from '../../components/GlobalButton';

const ResetPassword = () => {
    const [localState, setLocalState] = useState({
        signIn: {
            name: "Sign in",
            dir: '/sign-in'
        },
        successfullyUpdate: {
            name: "Update",
            dir: '/successfully-updated'
        },
        newPassword: '',
        confirmPassword: '',
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
        if (!localState.newPassword && !localState.confirmPassword) {
            setLocalState((prevState) => ({
                ...prevState,
                isFormValid: false
            }))
            return alert("Please provide a valid input credentials")
        }
    }
    return (
        <main className='reset-password'>
            <Navbar children={localState.signIn} />
            <section className="rp-content">
                <h1>Change your <span>password</span></h1>
                <div className="form">
                    <p>Thank you for confirming your email address. You're almost there</p>
                    <TextField id="standard-basic" name='newPassword' value={localState.newPassword} onChange={handleInputChange} label="New Password" variant="standard" type='password' fullWidth />
                    <TextField id="standard-basic" name='confirmPassword' value={localState.confirmPassword} onChange={handleInputChange} label="Confirm Password" variant="standard" type='password' fullWidth />
                </div>
            </section>
            {localState.isFormValid ? (
                <GlobalButton children={localState.successfullyUpdate} />
            ) : (
                <section className="button-container">
                    <button className="btn" onClick={handleOnSubmit}>Update</button>
                </section>
            )}
        </main>
    )
}

export default ResetPassword