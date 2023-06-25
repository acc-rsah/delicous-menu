import React from "react";
import style from "./AppStrikedTitle.module.css";

const AppStrikedTitle = ({ text, variant }) => {
    return (
        <div className={`${style.container} ${style[variant]}`}>
            <h2 className={`${style.titleText} `}>{text}</h2>
        </div>
    );
};

export default AppStrikedTitle;
