import React, { useState } from "react";
import "./dashboard.css";
import { useEffect } from "react";
import axios from "axios";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';


  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
function Dashboard() {
    const userInfo = JSON.parse(localStorage.getItem('userinfo')) || {};
    if (!userInfo) {
        window.location.href = "/login";
    }
    const [loss,setLoss]=useState('0')
    const [activePlan, setActivePlan] = useState(null);
    const [plan, setPlan] = useState(null);
    const [arr, setArr] = useState([]);
    const [inputWeight, setInputWeight] = useState("");

    const handleInputChange = (event) => {
        setInputWeight(event.target.value);
    }
    const handleWeightSubmit = async () => {
        const weight = inputWeight;
        const newWeight = [...arr, weight];
        setArr(newWeight);
        setInputWeight("");

        const targetWeight = plan.targetWeight; // Assuming targetWeight is part of the plan object
        if (weight <= targetWeight) {
            alert("Congratulations! You have reached your target weight.");
            try {
            const userId = userInfo._id; // Replace with actual user ID
            const response = await axios.get("http://localhost:3000/api/diet/get");
            const userDiet = response.data.find(diet => diet.userid === userId);
            if (userDiet) {
                await axios.delete(`http://localhost:3000/api/diet/delete`, {
                data: { dietid: userDiet._id }
                });
            }
            } catch (error) {
            console.error("Error deleting diet plan:", error);
            }
            window.location.href = "/home";
        }

        try {
            const userId = userInfo._id; // Replace with actual user ID
            const response = await axios.get("http://localhost:3000/api/diet/get");
            const userDiet = response.data.find(diet => diet.userid === userId);
            if (userDiet) {
                await axios.patch("http://localhost:3000/api/diet/weightupdate", {
                    dietid: userDiet._id,
                    weight: newWeight
                });
            }
        } catch (error) {
            console.error("Error updating weight data:", error);
        }
    }
    useEffect(() => {
        const fetchDietData = async () => {
            try {
            const response = await axios.get("http://localhost:3000/api/diet/get");
            const userId = userInfo._id; // Replace with actual user ID
            const userDiet = response.data.find(diet => diet.userid === userId);
            setArr(userDiet.weight);
            if (userDiet) {
                // Process and display the userDiet data as needed
                setPlan(userDiet); // Set the latest data to activePlan
            }
            } catch (error) {
            console.error("Error fetching diet data:", error);
            }
        };

        fetchDietData();

        fetchDietData();
    }, []);
    useEffect(() => {
        if (arr.length > 1) {
            const weightLoss = arr[0] - arr[arr.length - 1];
            setLoss(weightLoss);
        }
    }, [arr]);
    const handleWeeklyClick = () => {
        window.location.href = "/weeklylist";
    };
  
    const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Weight Dataset',
      },
    },
  };
    
  const labels = ['Day 0', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6','Day 7'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Weight Dataset',
        data: arr,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
    const handleRegenerate = async () => {
        window.location.href = "/diet";
    }
  
    return (
        <>
            <div className="container">
                <div>
                    <div>
                        <Line options={options} data={data} />
                    </div>
                    <div>
                        {arr.length < 8 && (
                            <>
                                <label htmlFor="weightInput">Enter Your Weight at the end of the day</label>
                                <input
                                 className="input-field"
                                    type="text"
                                    id="weightInput"
                                    value={inputWeight}
                                    onChange={handleInputChange}
                                />
                            </>
                        )}
                        
                        <button className="button" onClick={arr.length < 8 ? handleWeightSubmit : handleRegenerate}>
                            {arr.length < 8 ? "Enter" : "Regenerate"}
                        </button>
                    </div>
                    <div>
                        <p><b>Weight Loss </b> <span>{loss}KG</span></p>
                    </div>
                </div>
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