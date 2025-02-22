import React, { useState } from "react";
import "./dashboard.css";
import { useEffect } from "react";
import img1 from "../../assests/images/meal-list-1.png";
import img2 from "../../assests/images/meal-list-2.png";
import img3 from "../../assests/images/meal-list-3.png";
import img4 from "../../assests/images/meal-list-1.png";
import img5 from "../../assests/images/meal-list-2.png";
import img6 from "../../assests/images/meal-list-3.png";
import img7 from "../../assests/images/meal-list-1.png";
import axios from "axios";

function WeeklyList() {
    const userInfo = JSON.parse(localStorage.getItem('userinfo')) || {};
    if (!userInfo) {
        window.location.href = "/login";
    }
    const [plan, setPlan] = useState(null);
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
    }, []);

    const updateMealStatus = async (day) => {
        try {
            const response = await axios.patch("http://localhost:3000/api/diet/updatestatus", {
                dietid: plan._id,
                day: day
            });
            if (response.status === 200) {
                console.log("Meal status updated successfully");
                window.location.href = "/weeklylist";
            }
        } catch (error) {
            console.error("Error updating meal status:", error);
        }
    };
    return (
        <>
            <div className="container">
                <div className="weeky-list">
                    <h4>Weekly Meal Plan</h4>
                    <div className="row">
                        {plan && plan.routine && plan.routine.map((dayPlan, index) => (
                            <div className="col-12" key={index}>
                                <div className="wrap">
                                    <div className="meal-plan">
                                        <h5>{dayPlan.day}</h5>
                                        <p><strong>{dayPlan.breakfast.charAt(0).toUpperCase() + dayPlan.breakfast.slice(1).split(' ')[0]}</strong> {dayPlan.breakfast.split(' ').slice(1).join(' ')}</p>
                                        <p><strong>{dayPlan.lunch.charAt(0).toUpperCase() + dayPlan.lunch.slice(1).split(' ')[0]}</strong> {dayPlan.lunch.split(' ').slice(1).join(' ')}</p>
                                        <p><strong>{dayPlan.dinner.charAt(0).toUpperCase() + dayPlan.dinner.slice(1).split(' ')[0]}</strong> {dayPlan.dinner.split(' ').slice(1).join(' ')}</p>
                                        {dayPlan.status === true ? (
                                            <button className="button" disabled>Completed</button>
                                        ) : (
                                            <button className="button" onClick={() => updateMealStatus(dayPlan.day)}>Update Status</button>
                                        )}
                                    </div>
                                    <div>
                                        <img src={[img1, img2, img3, img4, img5, img6, img7][index % 7]} alt={`Meal ${index + 1}`} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default WeeklyList;