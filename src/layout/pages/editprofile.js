import React from 'react';
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
                  <h2>Update Profile Information</h2>
                  <div></div>
                </div>
                
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
                    <input type="text"  placeholder='John Doe'/>
                    <label htmlFor="">Email</label>
                    <input type="text"  placeholder='John@gmail.com'/>
                    <label htmlFor="">Phone</label>
                    <input type="text"  placeholder='0123456789'/>
                    <label htmlFor="">Password</label>
                    <input type="password"  value={"123456789"} />
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="btn btn-success">Update</div>
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