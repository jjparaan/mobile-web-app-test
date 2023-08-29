import React, { useState } from "react";
import "./SignIn.scss";
import Navbar from "../../components/Navbar";
import GlobalButton from "../../components/GlobalButton";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [localState, setLocalState] = useState({
    signUp: {
      name: "Sign up",
      dir: "/sign-up",
    },
    signIn: {
      name: "Sign in",
      dir: "/home",
    },
    username: "",
    password: "",
    isFormValid: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalState((prevState) => ({
      ...prevState,
      [name]: value,
      isFormValid: true,
    }));
  };

  const handleOnSubmit = () => {
    if (!localState.username && !localState.password) {
      return alert("Please provide a valid input credentials");
    }
  };

  return (
    <main className="sign-in">
      <Navbar children={localState.signUp} />
      <section className="si-content">
        <h1>
          Sign in to <span>your account</span>
        </h1>
        <div className="form">
          <TextField
            id="standard-basic"
            name="username"
            value={localState.username}
            onChange={handleInputChange}
            label="Username"
            variant="standard"
            fullWidth
          />
          <TextField
            id="standard-basic"
            name="password"
            value={localState.password}
            onChange={handleInputChange}
            label="Password"
            variant="standard"
            type="password"
            fullWidth
          />
          <Link to="/forgot-password">Forgot your password?</Link>
        </div>
      </section>
      {localState.isFormValid ? (
        <GlobalButton children={localState.signIn} />
      ) : (
        <section className="button-container">
          <button className="btn" onClick={handleOnSubmit}>Sign in</button>
        </section>
      )}
    </main>
  );
};

export default SignIn;
