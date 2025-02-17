import React, { useEffect, useState } from "react";
import "./dietplan.css";
import Papa from "papaparse";
import axios from "axios";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const Diet = () => {
  const [csvData, setCsvData] = useState(null);
  const [response, setResponse] = useState("");
  const genAI = new GoogleGenerativeAI(
    "AIzaSyDWHdv51u0gIjFVA_D8WZze9pWSbxQFrBM"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  // const prompt = "I am age 26, gender Male, height 164cm, weight 75kg, target weight 62. Give me a Proper Plan of diet meal for 7 days. 3 times food with snacks and also adding some details from a file.. Check that and get ideas from it. Also say about the calories and  amount food I need to intake. Do not say anything extra. Just give me the information for the diet of 7 days. Start it From Day 1. here is a sample 7-day diet plan based on your provided information (age 26, male, 164cm, 75kg, target 62kg). This is a sample and should be adjusted based on your individual needs and preferences. **Consult with a doctor or registered dietitian for personalized guidance.** The calorie target is approximately 1500-1700 calories per day to promote weight loss. These are extra talks. No suggestions too. No star Marks or anything! Just me give info like this, Day 1 Breakfast:this this, Lunch: this this, Dinner This this."

  useEffect(() => {
    fetch("/data.csv") // Fetch from public folder
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          complete: (result) => setCsvData(result.data),
          header: true, // Parse as array of objects
        });
      })
      .catch((error) => console.error("Error loading CSV:", error));
  }, []);

  //    const handleGenerate= async ()=>{
  //     const result = await model.generateContent(prompt);//+ JSON.stringify(csvData)
  //     console.log(result.response.text());
  //     console.log(await result.response.text());
  //    }
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [diabetics, setDiabetics] = useState("");

  const userInfo = JSON.parse(localStorage.getItem("userinfo")) || {};
  //   const { name, username, email, phone, password } = userInfo;
  // useEffect(() => {
  //   setUserid(userInfo._id);
  // }, [userInfo._id]);

  const handleGenerate = async () => {
    const userPrompt = `I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
    Give me a Proper Plan of diet meal for 7 days. 3 times food with snacks and also adding some details from a file.. Check that and get ideas from it. 
    Also say about the calories and amount food I need to intake. Do not say anything extra. Just give me the information for the diet of 7 days. 
    Start it From Day 1. here is a sample 7-day diet plan based on your provided information 
    (age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}. 
    This is a sample and should be adjusted based on your individual needs and preferences. 
    **Consult with a doctor or registered dietitian for personalized guidance.** 
    The calorie target is approximately 1500-1700 calories per day to promote weight loss. 
    These are extra talks. No suggestions too. No star Marks or anything! Just me give info like this, Day 1 Breakfast:this this, 
    Lunch: this this, Dinner This this. Do not give any Important notes or anything extra for lines or anything`;
    const result = await model.generateContent(userPrompt);
    console.log(await result.response.text());

    const generatedText = await result.response.text();
    console.log(generatedText);

    const formData = {
      userid: userInfo._id,
      age,
      gender,
      height,
      weight,
      targetWeight,
      diabetics,
      routine: generatedText,
    };

    console.log(formData);

    try {
      const datas = await axios.get("http://localhost:3000/api/diet/get");

      console.log(datas.data);

      const userDiet = datas.data.find(diet => diet.userid === userInfo._id);
      console.log("adasdad" , userDiet);

      let response;
      if (userDiet) {
        response = await axios.patch(
          `http://localhost:3000/api/diet/update/`,
          {
        dietid: userDiet._id,
        userid: userInfo._id,
        age,
        gender,
        height,
        weight,
        targetWeight,
        diabetics,
        routine: generatedText,
          }
        );
        if (response.status === 201) {
          console.log("Diet plan saved successfully");
        } else {
          console.error("Failed to save diet plan", response.data);
        }
      } else {
        response = await axios.post(
          "http://localhost:3000/api/diet/create",
          {
        userid: userInfo._id,
        age,
        gender,
        height,
        weight,
        targetWeight,
        diabetics,
        routine: generatedText,
          }
        );
        if (response.status === 201) {
          console.log("Diet plan saved successfully");
        } else {
          console.error("Failed to save diet plan", response.data);
        }
      }

      // if (response.status === 201) {
      //   console.log("Diet plan saved successfully");
      // } else {
      //   console.error("Failed to save diet plan", response.data);
      // }
    } catch (error) {
      if (error.response) {
        console.error("Error saving diet plan", error.response.data);
      } else {
        console.error("Error saving diet plan", error.message);
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="diet_form">
              <h2>Generate Your Diet Plan</h2>
              <form action="">
                <select
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
                <input
                  type="number"
                  placeholder="Age"
                  onChange={(e) => setAge(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Height (cm)"
                  onChange={(e) => setHeight(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Weight (kg)"
                  onChange={(e) => setWeight(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Target Weight (kg)"
                  onChange={(e) => setTargetWeight(e.target.value)}
                />
                <select
                  name="diabetics"
                  onChange={(e) => setDiabetics(e.target.value)}
                >
                  <option value="">Diabetics</option>
                  <option value="type_1">Type 1 Diabetic</option>
                  <option value="type_2">Type 2 Diabetic</option>
                  <option value="pre_diabetic">Pre-Diabetic</option>
                  <option value="none">None</option>
                </select>
                <div className="d-flex justify-content-end w-100">
                  <div className="btn btn-warning" onClick={handleGenerate}>
                    Generate
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Diet;
