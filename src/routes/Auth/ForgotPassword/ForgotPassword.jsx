import React, { useState } from 'react'
import './ForgotPassword.scss'
import AuthGlobalNavbar from '../../components/AuthGlobalNavbar'
import TextField from '@mui/material/TextField';
import GlobalButton from '../../components/GlobalButton';

const ForgotPassword = () => {
  const [localState, setLocalState] = useState({
    signIn: {
      name: "Sign in",
      dir: '/sign-in'
    },
    resetPassword: {
      name: "Reset Password",
      dir: '/reset-password'
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
    <main className='forgot-password'>
      <AuthGlobalNavbar children={localState.signIn} />
      <section className="fp-content">
        <h1>Forget your <span>password?</span></h1>
        <p>Provide your valid email address to change password</p>
        <TextField id="standard-basic" name='email' value={localState.email} onChange={handleInputChange} label="Email" variant="standard" fullWidth />
      </section>
      {localState.isFormValid ? (
        <GlobalButton children={localState.resetPassword} />
      ) : (
        <section className="button-container">
          <button className="btn" onClick={handleOnSubmit}>Reset Password</button>
        </section>
      )}
    </main>
  )
}

export default ForgotPassword