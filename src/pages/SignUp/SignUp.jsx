import React from 'react';
import "./signup.css";

export default function SignUp() {
  return (
    <div className='signup'>
      <div className="signupWrapper">
        <div className="signupLeft">
          <h3 className="signupLogo">Local Connect</h3>
          <span className="signupDescription">“One of the marvelous things about community is that it enables us to welcome and help people in a way we couldn't as individuals.” – Jean Vanier.</span>
        </div>
        <div className="signupRight">
          <div className="signup-box-container">
            <div className="signup-row">
              <div className="signup-item">
                <label>Username:</label>
                <input placeholder='' type="text" name="username" />
              </div>
              <div className="signup-item">
                <label>Email:</label>
                <input placeholder=''type="email" name="email" />
              </div>
            </div>

            <div className="signup-row">
              <div className="signup-item">
                <label>Gender:</label>
                <div className="radio-buttons">
                  <input type="radio" name="gender" value="male" id="male" />
                  <label htmlFor="male">Male</label>
                  <input type="radio" name="gender" value="female" id="female" />
                  <label htmlFor="female">Female</label>
                  <input type="radio" name="gender" value="Other" id="Other" />
                  <label htmlFor="Other">Other</label>
                </div>
                </div>
                <div className="signup-item">
                  <label>Birthday:</label>
                  <input type="date" name="birthday" />
                </div>
             
            </div>
         

          <div className="signup-row">
            <div className="signup-item">
              <label>Mobile Number:</label>
              <input placeholder=''type="tel" name="mobile" />
            </div>
            <div className="signup-item">
              <label>Location:</label>
              <input placeholder=''type="text" name="location" />
            </div>
          </div>

          <div className="signup-row">
            <div className="signup-item">
              <label>Password:</label>
              <input type="password" name="password" />
            </div>
            <div className="signup-item">
              <label>Confirm Password:</label>
              <input type="password" name="confirmPassword" />
            </div>
          </div>

          <button className='signupButton' >Sign Up</button>
          <p className="login-link">
            <span>Already have an account?</span> <a href="#login">Go to Login</a>
          </p>

        </div>
      </div>
    </div>
    </div >
  );
}
