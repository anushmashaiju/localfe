import React, { useContext, useRef } from 'react'
import "./login.css"
import { loginCall } from "../../apiCalls"
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@mui/material';


export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(email.current.value)
    loginCall({ email: email.current.value, password: password.current.value }, dispatch);
  };
  console.log(user)
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
            <input placeholder='' className='loginInput' required ref={email} />
            <label className='loginLabel'>Password</label>
            <input placeholder='' className='loginInput' required minLength="5" ref={password} />
            <button className="loginButton">{isFetching ? <CircularProgress size={'20px'} /> : "Log In"}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className='createButton'>Create a new account</button>
          </form>
        </div>
      </div>
    </div>


  )
}
