import React, { useEffect, useState } from "react";
import "./dietplan.css";
import Papa from "papaparse";
import axios from "axios";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const Diet = () => {
  const [csvData, setCsvData] = useState(null);
  const [response, setResponse] = useState("");
  const [showdelayedtext,setShowDelayedText]=useState(false)
  const genAI = new GoogleGenerativeAI(
    "AIzaSyDWHdv51u0gIjFVA_D8WZze9pWSbxQFrBM"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

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

    // day 1 details
    console.log("DAY 1")
    const day1breakfast= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
    Give me a Proper Plan of diet meal for day 1 breakfast. Do not give any options!!
    Also say about the calories and amount food I need to intake. Do not say anything extra. 
    Start it From day 1.(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..Dont say anything extra like Okay, here's a day 1 breakfast plan:
    **day 1**.directly give me the information! Just say it like this... " breakfast: oatmeals and nuts. Do not have to say day 1.just give me the breakfast."`)
    const day1bk=await day1breakfast.response.text()
    console.log(day1bk);

    const day1lunch= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
      Give me a Proper Plan of diet meal for day 1 Lunch. Do not give any options!!
      Also say about amount food I need to intake. Do not say anything extra. 
      .(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..Dont say anything extra like Okay, here's a day 1 lunch plan:
      **day 1**.directly give me the information! Just say it like this... " Lunch: oatmeals and nuts. Do not have to say day 1.just give me the Lunch."`)
      const day1lch=await day1lunch.response.text()
      console.log(day1lch);

      const day1dinner= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
        Give me a Proper Plan of diet meal for day 1 dinner. Do not give any options!!
        Also say about the  amount food I need to intake. Do not say anything extra. 
        .(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..Dont say anything extra like Okay, here's a day 1 dinner plan:
        **day 1**.directly give me the information! Just say it like this... " dinner: oatmeals and nuts. Do not have to say day 1.just give me the dinner."`)
        const day1dnr=await day1dinner.response.text()
        console.log(day1dnr);

        setTimeout(() => {
          setShowDelayedText(true);
      }, 3000);
        //day 2 details
        console.log("DAY 2")
        const day2breakfast= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
          Give me a Proper Plan of diet meal for day 2 breakfast. Do not give any options!!
          Also say about the  amount food I need to intake. Do not say anything extra I have day 1 breakfast meal plan. Start it From day 2.(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..Dont say anything extra like Okay, here's a day 1 breakfast plan:
          **day 2**.directly give me the information! Just say it like this... " breakfast: oatmeals and nuts. Do not have to say day 2.just give me the breakfast."`)
          const day2bk=await day2breakfast.response.text()
          console.log(day2bk);
      
          const day2lunch= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
            Give me a Proper Plan of diet meal for day 2 Lunch. Do not give any options!!
            Also say about the amount food I need to intake. Do not say anything extra. 
            .(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..I have day 1 Lunch meal plan. Dont say anything extra like Okay, here's a day 2 lunch plan:
            **day 2**.directly give me the information! Just say it like this... " Lunch: oatmeals and nuts. calories:170cal. Do not have to say day 2.just give me the Lunch."`)
            const day2lch=await day2lunch.response.text()
            console.log(day2lch);
      
            const day2dinner= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
              Give me a Proper Plan of diet meal for day 2 dinner. Do not give any options!!
              Also say about the amount food I need to intake. Do not say anything extra. I have day 1 dinner meal plan.
              .(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..Dont say anything extra like Okay, here's a day 2 dinner plan:
              **day 2**.directly give me the information! Just say it like this... " dinner: oatmeals and nuts. calories:170cal. Do not have to say day 1.just give me the dinner."`)
              const day2dnr=await day2dinner.response.text()
              console.log(day2dnr);

              setTimeout(() => {
                setShowDelayedText(true);
            }, 3000);
              
        //day 3 details
        console.log("DAY 3")
        const day3breakfast= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
          Give me a Proper Plan of diet meal for day 3 breakfast. Do not give any options!!
          Also say about the  amount food I need to intake. Do not say anything extra I have day 2 breakfast meal plan. Start it From day 3.(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..Dont say anything extra like Okay, here's a day 1 breakfast plan:
          **day 3**.directly give me the information! Just say it like this... " breakfast: oatmeals and nuts. Do not have to say day 3.just give me the breakfast."`)
          const day3bk=await day3breakfast.response.text()
          console.log(day3bk);
      
          const day3lunch= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
            Give me a Proper Plan of diet meal for day 3 Lunch. Do not give any options!!
            Also say about the amount food I need to intake. Do not say anything extra. 
            .(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..I have day 2 Lunch meal plan. Dont say anything extra like Okay, here's a day 3 lunch plan:
            **day 3**.directly give me the information! Just say it like this... " Lunch: oatmeals and nuts. calories:170cal. Do not have to say day 3.just give me the Lunch."`)
            const day3lch=await day3lunch.response.text()
            console.log(day3lch);
      
            const day3dinner= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
              Give me a Proper Plan of diet meal for day 3 dinner. Do not give any options!!
              Also say about the amount food I need to intake. Do not say anything extra. I have day 2 dinner meal plan.
              .(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..Dont say anything extra like Okay, here's a day 3 dinner plan:
              **day 3**.directly give me the information! Just say it like this... " dinner: oatmeals and nuts. calories:170cal. Do not have to say day 3.just give me the dinner."`)
              const day3dnr=await day3dinner.response.text()
              console.log(day3dnr);

              setTimeout(() => {
                setShowDelayedText(true);
            }, 3000);
        //////////////////////////////////////////             
        //day 4 details//////////////////////////
        /////////////////////////////////////////
        console.log("DAY 4")
        const day4breakfast= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
          Give me a Proper Plan of diet meal for day 3 breakfast. Do not give any options!!
          Also say about the  amount food I need to intake. Do not say anything extra. Start it From day 4.(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..I have day 3 breakfast meal plan. Dont say anything extra like Okay, here's a day 1 breakfast plan:
          **day 4**.directly give me the information! Just say it like this... " breakfast: oatmeals and nuts. Do not have to say day 4.just give me the breakfast."`)
          const day4bk=await day4breakfast.response.text()
          console.log(day4bk);
      
          const day4lunch= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
            Give me a Proper Plan of diet meal for day 3 Lunch. Do not give any options!!
            Also say about the amount food I need to intake. Do not say anything extra. 
            .(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..I have day 3 Lunch meal plan. Dont say anything extra like Okay, here's a day 3 lunch plan:
            **day 4**.directly give me the information! Just say it like this... " Lunch: oatmeals and nuts. calories:170cal. Do not have to say day 4.just give me the Lunch."`)
            const day4lch=await day4lunch.response.text()
            console.log(day4lch);
      
            const day4dinner= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
              Give me a Proper Plan of diet meal for day 4 dinner. Do not give any options!!
              Also say about the amount food I need to intake. Do not say anything extra. I have day 3 dinner meal plan.
              .(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..Dont say anything extra like Okay, here's a day 4 dinner plan:
              **day 4**.directly give me the information! Just say it like this... " dinner: oatmeals and nuts. calories:170cal. Do not have to say day 4.just give me the dinner."`)
              const day4dnr=await day4dinner.response.text()
              console.log(day4dnr);
              setTimeout(() => {
                setShowDelayedText(true);
            }, 3000);
              
        //////////////////////////////////////////             
        //day 5 details//////////////////////////
        /////////////////////////////////////////
        console.log("DAY 5")
        const day5breakfast= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
          Give me a Proper Plan of diet meal for day 5 breakfast. Do not give any options!!
          Also say about the  amount food I need to intake. Do not say anything extra I have day 4 breakfast meal plan. Start it From day 5.(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..Dont say anything extra like Okay, here's a day 1 breakfast plan:
          **day 5**.directly give me the information! Just say it like this... " breakfast: oatmeals and nuts. Do not have to say day 5.just give me the breakfast."`)
          const day5bk=await day5breakfast.response.text()
          console.log(day5bk);
      
          const day5lunch= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
            Give me a Proper Plan of diet meal for day 5 Lunch. Do not give any options!!
            Also say about the amount food I need to intake. Do not say anything extra. 
            .(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..I have day 4 Lunch meal plan. Dont say anything extra like Okay, here's a day 3 lunch plan:
            **day 5**.directly give me the information! Just say it like this... " Lunch: oatmeals and nuts. calories:170cal. Do not have to say day 5.just give me the Lunch."`)
            const day5lch=await day5lunch.response.text()
            console.log(day5lch);
      
            const day5dinner= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
              Give me a Proper Plan of diet meal for day 5 dinner. Do not give any options!!
              Also say about the amount food I need to intake. Do not say anything extra. I have day 4 dinner meal plan.
              .(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..Dont say anything extra like Okay, here's a day 5 dinner plan:
              **day 5**.directly give me the information! Just say it like this... " dinner: oatmeals and nuts. calories:170cal. Do not have to say day 5.just give me the dinner."`)
              const day5dnr=await day5dinner.response.text()
              console.log(day5dnr);


              setTimeout(() => {
                setShowDelayedText(true);
            }, 3000);
        //////////////////////////////////////////             
        //day 6 details//////////////////////////
        /////////////////////////////////////////
        // console.log("DAY 6")
        // const day6breakfast= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
        //   Give me a Proper Plan of diet meal for day 3 breakfast. 
        //   Also say about the  amount food I need to intake. Do not say anything extra I have day 5 breakfast meal plan. Start it From day 6.(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..Dont say anything extra like Okay, here's a day 1 breakfast plan:
        //   **day 6**.directly give me the information! Just say it like this... " breakfast: oatmeals and nuts. Do not have to say day 6.just give me the breakfast."`)
        //   const day6bk=await day6breakfast.response.text()
        //   console.log(day6bk);
      
        //   const day6lunch= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
        //     Give me a Proper Plan of diet meal for day 3 Lunch. 
        //     Also say about the amount food I need to intake. Do not say anything extra. 
        //     .(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..I have day 5 Lunch meal plan. Dont say anything extra like Okay, here's a day 3 lunch plan:
        //     **day 6**.directly give me the information! Just say it like this... " Lunch: oatmeals and nuts. calories:170cal. Do not have to say day 6.just give me the Lunch."`)
        //     const day6lch=await day6lunch.response.text()
        //     console.log(day6lch);
      
        //     const day6dinner= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
        //       Give me a Proper Plan of diet meal for day 6 dinner. 
        //       Also say about the amount food I need to intake. Do not say anything extra. I have day 5 dinner meal plan.
        //       .(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..Dont say anything extra like Okay, here's a day 6 dinner plan:
        //       **day 6**.directly give me the information! Just say it like this... " dinner: oatmeals and nuts. calories:170cal. Do not have to say day 6.just give me the dinner."`)
        //       const day6dnr=await day6dinner.response.text()
        //       console.log(day6dnr);
              
        //         setTimeout(() => {
        //         setShowDelayedText(true);
        //       }, 2000);
        //       //////////////////////////////////////////             
        // //day 7 details//////////////////////////
        // /////////////////////////////////////////
        // console.log("DAY 7")
        // const day7breakfast= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
        //   Give me a Proper Plan of diet meal for day 3 breakfast. 
        //   Also say about the  amount food I need to intake. Do not say anything extra I have day 6 breakfast meal plan. Start it From day 7.(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..Dont say anything extra like Okay, here's a day 1 breakfast plan:
        //   **day 7**.directly give me the information! Just say it like this... " breakfast: oatmeals and nuts. Do not have to say day 7.just give me the breakfast."`)
        //   const day7bk=await day7breakfast.response.text()
        //   console.log(day7bk);
      
        //   const day7lunch= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
        //     Give me a Proper Plan of diet meal for day 3 Lunch. 
        //     Also say about the amount food I need to intake. Do not say anything extra. 
        //     .(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..I have day 6 Lunch meal plan. Dont say anything extra like Okay, here's a day 3 lunch plan:
        //     **day 7**.directly give me the information! Just say it like this... " Lunch: oatmeals and nuts. calories:170cal. Do not have to say day 7.just give me the Lunch."`)
        //     const day7lch=await day7lunch.response.text()
        //     console.log(day7lch);
      
        //     const day7dinner= await model.generateContent(`I am age ${age}, gender ${gender}, height ${height}cm, weight ${weight}kg, target weight ${targetWeight}. 
        //       Give me a Proper Plan of diet meal for day 7 dinner. 
        //       Also say about the amount food I need to intake. Do not say anything extra. I have day 6 dinner meal plan.
        //       .(age ${age}, ${gender}, ${height}cm, ${weight}kg, target ${targetWeight}kg) also I am ${diabetics}..Dont say anything extra like Okay, here's a day 7 dinner plan:
        //       **day 7**.directly give me the information! Just say it like this... " dinner: oatmeals and nuts. calories:170cal. Do not have to say day 7.just give me the dinner."`)
        //       const day7dnr=await day7dinner.response.text()
        //       console.log(day7dnr);
    const formData = {
      userid: userInfo._id,
      age,
      gender,
      height,
      weight,
      targetWeight,
      diabetics,
      routine: [
        {
          day:"Day 1",
          breakfast:day1bk,
          lunch:day1lch,
          dinner:day1dnr
        },
        {
          day:"Day 2",
          breakfast:day2bk,
          lunch:day2lch,
          dinner:day2dnr
        },
        {
          day:"Day 3",
          breakfast:day3bk,
          lunch:day3lch,
          dinner:day3dnr
        },
        {
          day:"Day 4",
          breakfast:day4bk,
          lunch:day4lch,
          dinner:day4dnr
        },
        {
          day:"Day 5",
          breakfast:day5bk,
          lunch:day5lch,
          dinner:day5dnr
        },
        {
          day:"Day 6",
          breakfast:day1bk,
          lunch:day3lch,
          dinner:day2dnr
        },
        {
          day:"Day 7",
          breakfast:day4bk,
          lunch:day2lch,
          dinner:day1dnr
        },
      ],
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
        routine: [
          {
            day:"Day 1",
            breakfast:day1bk,
            lunch:day1lch,
            dinner:day1dnr
          },
          {
            day:"Day 2",
            breakfast:day2bk,
            lunch:day2lch,
            dinner:day2dnr
          },
          {
            day:"Day 3",
            breakfast:day3bk,
            lunch:day3lch,
            dinner:day3dnr
          },
          {
            day:"Day 4",
            breakfast:day4bk,
            lunch:day4lch,
            dinner:day4dnr
          },
          {
            day:"Day 5",
            breakfast:day5bk,
            lunch:day5lch,
            dinner:day5dnr
          },
          {
            day:"Day 6",
            breakfast:day1bk,
            lunch:day3lch,
            dinner:day2dnr
          },
          {
            day:"Day 7",
            breakfast:day4bk,
            lunch:day2lch,
            dinner:day1dnr
          },
        ],
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
        routine: [
          {
            day:"Day 1",
            breakfast:day1bk,
            lunch:day1lch,
            dinner:day1dnr
          },
          {
            day:"Day 2",
            breakfast:day2bk,
            lunch:day2lch,
            dinner:day2dnr
          },
          {
            day:"Day 3",
            breakfast:day3bk,
            lunch:day3lch,
            dinner:day3dnr
          },
          {
            day:"Day 4",
            breakfast:day4bk,
            lunch:day4lch,
            dinner:day4dnr
          },
          {
            day:"Day 5",
            breakfast:day5bk,
            lunch:day5lch,
            dinner:day5dnr
          },
          {
            day:"Day 6",
            breakfast:day1bk,
            lunch:day3lch,
            dinner:day2dnr
          },
          {
            day:"Day 7",
            breakfast:day4bk,
            lunch:day2lch,
            dinner:day1dnr
          },
        ],
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
