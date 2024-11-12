// src/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import "./login.css";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);  // Define showPassword state
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with actual login logic (e.g., API call)
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('authenticated', true);
      navigate('/home');  // Redirect to the Home page
    } else {
      alert('Invalid credentials');
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
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
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
