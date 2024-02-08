import React from 'react'
import "./login.css"
export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Local Connect</h3>
                <span className="loginDescription">“One of the marvelous things about community is that it enables us to welcome and help people in a way we couldn't as individuals.” – Jean Vanier.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <label className='loginLabel'>Email</label>
                 <input placeholder='' className='loginInput'/>
                 <label className='loginLabel'>Password</label>
                 <input placeholder='' className='loginInput'/>
                 <button className="loginButton">Log In</button>
                 <span className="loginForgot">Forgot Password?</span>
                 <button className='createButton'>Create a new account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
