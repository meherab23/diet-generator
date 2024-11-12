import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineEdit } from "react-icons/md";
import user from "../../assests/images/user.png";
import "./profile.css";

function Profile() {
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
                <img src={user} alt="Goal 4" />
                </div>
                <div className="col-8">
                  <div className="info">
                    <label htmlFor="">Name</label>
                    <input type="text"  value={"John Doe"} disabled/>
                    <label htmlFor="">Email</label>
                    <input type="text"  value={"John@gmail.com"} disabled/>
                    <label htmlFor="">Phone</label>
                    <input type="text"  value={"0123456789"} disabled/>
                    <label htmlFor="">Password</label>
                    <input type="password"  value={"123456789"} disabled/>
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