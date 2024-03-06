import React, { useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@mui/material';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {isFetching,  dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  // Retrieve email and password from localStorage during component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');

    if (savedEmail) {
      email.current.value = savedEmail;
    }

    if (savedPassword) {
      password.current.value = savedPassword;
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const userEmail = email.current.value;
    const userPassword = password.current.value;

    // Save email and password to localStorage
    localStorage.setItem('savedEmail', userEmail);
    localStorage.setItem('savedPassword', userPassword);

    loginCall({ email: userEmail, password: userPassword }, dispatch);
  };

  const navigateToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Local Connect</h3>
          <span className="loginDescription">“One of the marvelous things about community is that it enables us to welcome and help people in a way we couldn't as individuals.” – Jean Vanier.</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <label className='loginLabel'>Email</label>
            <input placeholder='' type="email"className='loginInput' required ref={email} />
            <label className='loginLabel'>Password</label>
            <input placeholder='' type="password" className='loginInput' required minLength="5" ref={password} />
            <button className="loginButton">{isFetching ? <CircularProgress size={'20px'} /> : "Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className='createButton' onClick={navigateToSignUp}>Create a new account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
