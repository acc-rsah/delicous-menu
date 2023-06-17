import React from "react";
import style from "./RecipeCardContainer.module.css";

const RecipeCardContainer = ({ cardDetail, cardSize }) => {
    let { level, dishName, dishDesc } = cardDetail;
    return (
        <div
            className={`${
                cardSize === "big" ? style.bigContainer : style.smallContainer
            } ${style.container}`}
        >
            <h4 className={style.level}>{level}</h4>
            <h2 className={style.dishName}>{dishName}</h2>
            <p className={style.dishDesc}>{dishDesc}</p>
        </div>
    );
};

export default RecipeCardContainer;
