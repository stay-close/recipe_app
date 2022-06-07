import React from "react";
import './Result.css';
const Result = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    
    return (
        <div className="card">
            <div className="img_box">
                <img
                    src={strMealThumb}
                    alt={strMeal}
                    className="card-image"
                />
           </div>
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Learn More</a>
            </div>
        </div>
    )
};

export default Result;