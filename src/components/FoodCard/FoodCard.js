import React from "react";
import style from "./FoodCard.module.css";

const FoodCard = ({ foodTitle, foodDesc, price }) => {
    return (
        <>
            <div className={style.container}>
                <h2 className={style.foodTitle}>{foodTitle}</h2>
                <p className={style.foodDesc}>{foodDesc}</p>
                <div className={style.priceBox}>
                    <p className={style.price}>£{price}</p>
                </div>
            </div>
        </>
    );
};

export default FoodCard;
