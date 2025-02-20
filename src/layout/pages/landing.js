import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";
import goal_1 from "../../assests/images/goal 1.png";
import goal_2 from "../../assests/images/goal 2.png";
import goal_3 from "../../assests/images/goal 3.png";
import goal_4 from "../../assests/images/goal 4.png";

import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export const landing = () => {
    let iconStyles = { color: "white", fontSize: "20px", marginLeft: "15px"};
    const userInfo = JSON.parse(localStorage.getItem('userinfo')) || {};
    if (!userInfo) {
        window.location.href = "/login";
    }
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
                <Link className="signin nav-link" to="/login">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="started nav-link" to="/register">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header">
              <div className="bg">
                <div className="content">
                  <h2>Let's Build Your Ideal Diet</h2>
                  <p>
                    Achieve your health goals with a customized diet plan that
                    fits your lifestyle. Our expert guidance makes healthy
                    eating simple and enjoyable!
                  </p>
                  <div className="wrap">
                    <Link className="signin nav-link" to="/register">
                      Sign In
                    </Link>
                    <Link className="started nav-link" to="/register">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title_content">
              <h2>How Health Goal Works</h2>
              <p>
                Start by selecting your health goals—whether it's weight loss,
                muscle gain, or balanced eating. Our platform then creates a
                personalized meal plan based on your preferences, dietary needs,
                and lifestyle. Track your progress, adjust your meals, and get
                expert tips to keep you motivated on your journey to better
                health!
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="row">
              <div className="col-3">
                <div className="single_card">
                  <img src={goal_1} alt="Goal 1" />
                  <div className="content">
                    <h4>Personalized Meal plan</h4>
                    <p>
                      Get a meal plan designed just for you, tailored to fit
                      your unique goals and lifestyle!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="single_card">
                  <img src={goal_2} alt="Goal 2" />
                  <div className="content">
                    <h4>Track Your Progress</h4>
                    <p>
                      Monitor your journey and celebrate every milestone with
                      easy progress tracking!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="single_card">
                  <img src={goal_3} alt="Goal 3" />
                  <div className="content">
                    <h4>Expert Advice</h4>
                    <p>
                      Get insights and tips from nutrition experts to keep you
                      on track and motivated!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="single_card">
                  <img src={goal_4} alt="Goal 4" />
                  <div className="content">
                    <h4>Mindful Eating</h4>
                    <p>
                      Embrace mindful eating—savor each bite, nourish your body,
                      and connect with your health goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  );
};
export default landing;
