import React, { useState } from "react";
import "./dashboard.css";
import meal1 from "../../assests/images/meal-list-1.png";
import meal2 from "../../assests/images/meal-list-2.png";
import meal3 from "../../assests/images/meal-list-3.png";
import meal4 from "../../assests/images/meal-list-4.png";
import { useEffect } from "react";
import axios from "axios";

function Dashboard() {
    const [activePlan, setActivePlan] = useState(null);
    const [plan, setPlan] = useState(null);
    const userInfo = JSON.parse(localStorage.getItem("userinfo")) || {};
    useEffect(() => {
        const fetchDietData = async () => {
            try {
            const response = await axios.get("http://localhost:3000/api/diet/get");
            const userId = userInfo._id; // Replace with actual user ID
            const userDiet = response.data.find(diet => diet.userid === userId);
            console.log(userDiet);
            if (userDiet) {
                // Process and display the userDiet data as needed
                console.log(userDiet);
                setPlan(userDiet); // Set the latest data to activePlan
            }
            } catch (error) {
            console.error("Error fetching diet data:", error);
            }
        };

        fetchDietData();

        fetchDietData();
    }, []);
    const handleWeeklyClick = () => {
        window.location.href = "/weeklylist";
    };

    return (
        <>
            <div className="container">
                <h3>Meal Plan</h3>
                {/* Weekly Section */}
                <div className="weekly">
                    <div className="day" onClick={handleWeeklyClick}>
                        <div className="bg">
                            <h4>Weekly</h4>
                        </div>
                    </div>
                </div>
                {activePlan === "weekly" && plan && (
                    <div>
                        <h4>Weekly Meal Plan</h4>
                        <div className="row">
                            {plan.routine.map((dayPlan, index) => (
                                <div className="col-12" key={index}>
                                    <div className="meal-plan">
                                        <h5>{dayPlan.day}</h5>
                                        <p><strong>{dayPlan.breakfast.charAt(0).toUpperCase() + dayPlan.breakfast.slice(1).split(' ')[0]}</strong> {dayPlan.breakfast.split(' ').slice(1).join(' ')}</p>
                                        <p><strong>{dayPlan.lunch.charAt(0).toUpperCase() + dayPlan.lunch.slice(1).split(' ')[0]}</strong> {dayPlan.lunch.split(' ').slice(1).join(' ')}</p>
                                        <p><strong>{dayPlan.dinner.charAt(0).toUpperCase() + dayPlan.dinner.slice(1).split(' ')[0]}</strong> {dayPlan.dinner.split(' ').slice(1).join(' ')}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Dashboard;