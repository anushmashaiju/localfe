import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';  
import "./signup.css";
import axios from 'axios';


export default function SignUp() {
  const username = useRef();
  const email = useRef();
  const gender = useRef();
  const birthday = useRef();
  const mobile = useRef();
  const location = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const navigate = useNavigate();

const handleClick = async (e) => {
  e.preventDefault();
  console.log('confirmPassword.current:', confirmPassword.current);
  console.log('confirmPassword.current.value:', confirmPassword.current.value);

  if (confirmPassword.current && confirmPassword.current.value !== password.current.value) {
    confirmPassword.current.setCustomValidity("password doesn't match");
  } else {
    const user = {
      username: username.current.value,
      email: email.current.value,
      birthday: birthday.current.value,
      mobile: mobile.current.value,
      location: location.current.value,
      password: password.current.value,
      confirmpassword: password.current.value,
    };

    console.log("User data:", user);

    try {
      console.log("Sending signup request...");
      const response = await axios.post("/auth/SignUp", user);
      console.log("Signup request successful:", response.data);
      navigate("/login");
    } catch (err) {
      console.log("Signup request failed:", err);
    }
  }
};

  return (
    <div className='signup'>
      <div className="signupWrapper">
        <div className="signupLeft">
          <h3 className="signupLogo">Local Connect</h3>
          <span className="signupDescription">“One of the marvelous things about community is that it enables us to welcome and help people in a way we couldn't as individuals.” – Jean Vanier.</span>
        </div>
        <div className="signupRight">
          <form className="signup-box-container" onSubmit={handleClick}>
            <div className="signup-row">
              <div className="signup-item">
                <label>Username:</label>
                <input placeholder='' type="text" name="username" ref={username} required />
              </div>
              <div className="signup-item">
                <label>Email:</label>
                <input placeholder='' type="email" name="email" ref={email} required />
              </div>
            </div>

            <div className="signup-row">
              <div className="signup-item">
                <label>Gender:</label>
                <div className="radio-buttons">
                  <input type="radio" name="gender" value="male" id="male" ref={gender} required />
                  <label htmlFor="male">Male</label>
                  <input type="radio" name="gender" value="female" id="female" ref={gender} required />
                  <label htmlFor="female">Female</label>
                  <input type="radio" name="gender" value="Other" id="Other" ref={gender} required />
                  <label htmlFor="Other">Other</label>
                </div>
              </div>
              <div className="signup-item">
                <label>Birthday:</label>
                <input type="date" name="birthday" ref={birthday} required />
              </div>
            </div>

            <div className="signup-row">
              <div className="signup-item">
                <label>Mobile Number:</label>
                <input placeholder='' type="tel" name="mobile" ref={mobile} required />
              </div>
              <div className="signup-item">
                <label>Location:</label>
                <input placeholder='' type="text" name="location" ref={location} required />
              </div>
            </div>

            <div className="signup-row">
              <div className="signup-item">
                <label>Password:</label>
                <input type="password" name="password" ref={password} required />
              </div>
              <div className="signup-item">
                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" ref={confirmPassword} required minLength={5} />
              </div>
            </div>

            <button className='signupButton' type='submit'>Sign Up</button>
            <p className="login-link">
              <span>Already have an account?</span> <a href="#login"onClick={() => navigate("/login")}>Go to Login</a>
            </p>
          </form>
        </div>
      </div>
    </div>

  );
}
