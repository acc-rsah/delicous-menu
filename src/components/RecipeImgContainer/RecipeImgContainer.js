import React from "react";
import style from "./RecipeImgContainer.module.css";
import goBtn from "../../assets/icons/go-btn.png";
import checkStamp from "../../assets/icons/chef-stamp.png";

const RecipeImgContainer = ({
    cardSize,
    chefChoice,
    picName,
    picPath,
    serving,
}) => {
    return (
        <div
            className={`${
                cardSize === "big" ? style.bigContainer : style.smallContainer
            } ${style.container}`}
        >
            {chefChoice ? (
                <img
                    className={style.chefStamp}
                    src={checkStamp}
                    loading="lazy"
                    alt="Chef Choice"
                />
            ) : null}
            <div className={style.servingBox}>
                <h3 className={style.servingCount}>{serving}</h3>
                <h4 className={style.servingTitle}>SERVINGS</h4>
            </div>
            <img
                className={style.goBtn}
                src={goBtn}
                alt="Go Btn"
                loading="lazy"
            />
            <img
                className={style.menuPic}
                src={require(`../../assets/images/${picPath}`)}
                alt={picName}
                loading="lazy"
            />
        </div>
    );
};

export default RecipeImgContainer;
