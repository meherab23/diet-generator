import React from 'react';
import "./dietplan.css";

const diet = () => {
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="diet_form">
                            <h2>Generate Your Diet Plan</h2>
                            <form action="">
                                <select name="gender">
                                    <option value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="others">Others</option>
                                </select>
                                <input type="number" placeholder='Age'/>
                                <input type="number" placeholder='Height (cm)'/>
                                <input type="number" placeholder='Weight (kg)'/>
                                <input type="number" placeholder='Target Weight (kg)'/>
                                <select name="diabetics">
                                    <option value="">Diabetics</option>
                                    <option value="type_1">Type 1 Diabetic</option>
                                    <option value="type_2">Type 2 Diabetic</option>
                                    <option value="pre_diabetic">Pre-Diabetic</option>
                                    <option value="none">None</option>
                                </select>
                                <div className='d-flex justify-content-end w-100'>
                                    <div className="btn btn-warning">
                                        Generate
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default diet