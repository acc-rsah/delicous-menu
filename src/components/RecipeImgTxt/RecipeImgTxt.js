import React from "react";
import RecipeImgContainer from "../RecipeImgContainer/RecipeImgContainer";
import RecipeCardContainer from "../RecipeCardContainer/RecipeCardContainer";
import style from "./RecipeImgTxt.module.css";

const RecipeImgTxt = ({ recipe }) => {
    let {
        cardSize,
        chefChoice,
        picName,
        picPath,
        serving,
        cardDetail,
        chefName,
        cardPosition,
    } = recipe;

    //const position = cardPosition === "bottom" ? {justifyContent: flex-end;}

    return (
        <div
            className={`${
                cardSize === "big" ? style.bigContainer : style.smallContainer
            } ${
                cardPosition === "bottom" ? style.postionEnd : style.postionTop
            } ${style.container}`}
        >
            <div className={style.recipeImgContainer}>
                <RecipeImgContainer
                    cardSize={cardSize}
                    chefChoice={chefChoice}
                    picName={picName}
                    picPath={picPath}
                    serving={serving}
                />
                <RecipeCardContainer
                    cardDetail={cardDetail}
                    cardSize={cardSize}
                />
            </div>
            <p className={style.chefName}>{chefName}</p>
        </div>
    );
};

export default RecipeImgTxt;
