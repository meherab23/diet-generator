import React from 'react';
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footer = () => {
    let iconStyles = { color: "white", fontSize: "20px", marginLeft: "15px"};
    return (
     <>
     <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="wrap">
                        <div className="logo">
                            <Link className="navbar-brand" to="/home">
                                DIET GENERATOR
                            </Link>
                        </div>
                        <div className="links">
                            <TiSocialFacebook style={iconStyles} />
                            <FaInstagram style={iconStyles}/>
                            <FaWhatsapp style={iconStyles}/>
                            <FaXTwitter style={iconStyles}/>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="cc text-center">
                    © 2024 | Health Goal | All Rights Reserved
                    </div>
                </div>
            </div>
        </div>
      </div>
      </>
  
    )
  }
  
  export default footer