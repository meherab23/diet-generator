import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import "./navbar.css";




const nav = () => {
  let iconStyles = { color: "white", fontSize: "15px"};
  let iconStylesNotification = { color: "white", fontSize: "20px"};
  let iconStylesRed = { color: "#FE0000", fontSize: "15px"};
  return (
    <>

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            DIET GENERATOR
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/diet">
                  Diet Plan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  <FaUser style={iconStyles} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  <IoIosNotifications style={iconStylesNotification} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  <IoLogOutOutline style={iconStylesRed} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default nav