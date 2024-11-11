import React from 'react';
import { Link } from "react-router-dom";
import "./home.css";
import goal_2 from "../../assests/images/goal 2.png";
import goal_3 from "../../assests/images/goal 3.png";
import goal_4 from "../../assests/images/goal 4.png";
import goal_5 from "../../assests/images/goal 5.png";

function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header">
                <div className="bg">
                  <div className="contents">
                    <h2>Let's Build Your Ideal Diet</h2>
                    <p>
                      Achieve your health goals with a customized diet plan that
                      fits your lifestyle. Our expert guidance makes healthy
                      eating simple and enjoyable!
                    </p>
                    <div className="wrap">
                      <Link className="started nav-link" to="/diet">
                        Start Your Journey
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
                    <img src={goal_5} alt="Goal 5" />
                    <div className="content">
                      <h4>Analiyse Your Information</h4>
                      <p>
                      Your diet analysis provides an overview of your nutrient intake, identifying areas of strength and areas where you may need improvement to meet health goals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="single_card">
                    <img src={goal_2} alt="Goal 2" />
                    <div className="content">
                      <h4>Create Diet Plan</h4>
                      <p>
                      Eat balanced meals with lean proteins, whole grains, plenty of vegetables, healthy fats, and stay hydrated while minimizing sugar and processed foods.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="single_card">
                    <img src={goal_3} alt="Goal 3" />
                    <div className="content">
                      <h4>Track Your diet</h4>
                      <p>
                      Log your meals daily to stay mindful of your nutrition and reach your health goals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="single_card">
                    <img src={goal_4} alt="Goal 4" />
                    <div className="content">
                      <h4>Achieve Your target</h4>
                      <p>
                      Set clear goals, stay focused, take consistent action, and adapt as needed.
                      </p>
                    </div>
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

export default Home;