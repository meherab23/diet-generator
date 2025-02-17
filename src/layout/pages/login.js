// src/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import "./login.css";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);  // Define showPassword state
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email: email,
        password: password
      });
      console.log(response.data.user);
      if (response.data.accessToken) {
        localStorage.setItem('userinfo', JSON.stringify(response.data.user));
        localStorage.setItem('authenticated', true);
        window.location.href = "/home";
      } else {
        setErrorMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
      console.error("Login failed", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="mainwrap">
            <h2>DIET GENERATOR</h2>
            <div className="login_area">
              <h4>SIGN IN</h4>
              <form onSubmit={handleLogin}>
                <div className="name mb-3 d-flex flex-row align-items-center">
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                  <FaUser />
                </div>
                
                <div className="password mb-3 mb-3 d-flex flex-row align-items-center">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  {showPassword ? (
                    <IoIosEye
                      onClick={togglePasswordVisibility}
                      
                    />
                  ) : (
                    <IoIosEyeOff
                      onClick={togglePasswordVisibility}
                      
                    />
                  )}
                </div>
                <div className="check">
                  <label className="remember" style={{ cursor: 'pointer' }}>
                    <input type="checkbox" />
                    <span>Remember Me</span>
                  </label>
                  <div className="forget">
                    Forget Password? <span>Reset</span>
                  </div>
                </div>
                <div className="wrap">
                  <button type="submit" className="btn submit_btn">Login</button>
                  <div className="register">
                    <span>Don't have an account? </span>
                    <Link className="nav-link" to="/register">Sign Up</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
