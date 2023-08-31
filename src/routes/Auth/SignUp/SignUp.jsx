import React, { useState } from 'react'
import './SignUp.scss'
import AuthGlobalNavbar from '../../components/AuthGlobalNavbar'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { Autocomplete } from '@mui/material';
import GlobalButton from '../../components/GlobalButton';


// * Autocomplete options
const countryCode = [
  { code: "United States (+1)" },
  { code: "Canada (+1)" },
  { code: "China (+86)" },
  { code: "India (+91)" },
  { code: "United Kingdom (+44)" },
  { code: "Australia (+61)" },
  { code: "Japan (+81)" },
];
const defaultProps = {
  options: countryCode,
  getOptionLabel: (option) => option.code,
};

const SignUp = () => {
  const [localState, setLocalState] = useState({
    signIn: {
      name: "Sign in",
      dir: '/sign-in'
    },
    signUp: {
      name: "Sign up",
      dir: '/verification'
    },
    country: null,
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    isFormValid: false,
  })
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalState((prevState) => ({
      ...prevState,
      [name]: value,
      isFormValid: true,
    }))
  }

  const handleOnSubmit = () => {
    if (!localState.country && !localState.email && !localState.username && !localState.password && !localState.confirmPassword) {
      return alert("Please provide a valid input credentials");
    }

    if (localState.password != localState.confirmPassword) {
      return alert("Password didn't match.");
    }
  }


  return (
    <main className='sign-up'>
      <AuthGlobalNavbar children={localState.signIn} />
      <section className="su-content">
        <h1>Create a <span>new account</span></h1>
        <div className="form">
          <Autocomplete
            {...defaultProps}
            value={localState.country}
            name="country"
            onChange={(event, newValue) => {
              setLocalState((prevValues) => ({
                ...prevValues,
                country: newValue,
              }));
            }}
            id="disable-close-on-select"
            renderInput={(params) => (
              <TextField {...params} label="Country" variant="standard" />
            )}
          />
          <TextField id="standard-basic" onChange={handleInputChange} name='email' label="Email" variant="standard" fullWidth />
          <TextField id="standard-basic" onChange={handleInputChange} name='username' label="Username" variant="standard" fullWidth />
          <TextField id="standard-basic" onChange={handleInputChange} name='password' label="Password" variant="standard" fullWidth type='password' />
          <TextField id="standard-basic" onChange={handleInputChange} name='confirmPassword' label="Confirm Password" variant="standard" fullWidth type='password' />
          <p>By clicking on <span>sign up</span> button, you are agreeing to our <Link to="/terms-conditions">terms and conditions</Link></p>
        </div>
      </section>
      {localState.isFormValid ? (
        <GlobalButton children={localState.signUp} />
      ) : (
        <section className="button-container">
          <button className='btn' onClick={handleOnSubmit}>Sign up</button>
        </section>
      )}
    </main>
  )
}

export default SignUp