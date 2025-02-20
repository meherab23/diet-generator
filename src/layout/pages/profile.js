import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineEdit } from "react-icons/md";
import user from "../../assests/images/user.png";
import "./profile.css";

function Profile() {
  const userInfo = JSON.parse(localStorage.getItem('userinfo')) || {};
    if (!userInfo) {
        window.location.href = "/login";
    }

  const { name, username, email, phone, password, image } = userInfo;
  return (
    <>
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title">
                <div className="wrap">
                  <h2>Personal Information</h2>
                  <div></div>
                </div>
                <Link className="btn" to="/editprofile">
                  <span><MdOutlineEdit /></span>
                  Edit</Link>
              </div>
            </div>
            <div className="col-12">
              <div className="row align-items-center">
                <div className="col-4">
                  <div className='image-wrap'>
                    <div className="image">
                      <img src={`http://localhost:3000${image}`} alt="Goal 4" width='100%'/>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <div className="info">
                    <label htmlFor="">Name</label>
                    <input type="text"  value={name} disabled/>
                    <label htmlFor="">Username</label>
                    <input type="text"  value={username} disabled/>
                    <label htmlFor="">Email</label>
                    <input type="text"  value={email} disabled/>
                    <label htmlFor="">Phone</label>
                    <input type="text"  value={phone} disabled/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;