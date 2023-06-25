import React from "react";
import style from "./AppStrikedTitle.module.css";

const AppStrikedTitle = ({ text, variant }) => {
    var userAgent = navigator.userAgent;

    return (
        <div className={style.container}>
            <h2
                className={`${
                    userAgent.match(/Win/i) ? style.titleText : style.titleText
                } ${style[variant]}`}
            >
                {text}
            </h2>
        </div>
    );
};

export default AppStrikedTitle;
