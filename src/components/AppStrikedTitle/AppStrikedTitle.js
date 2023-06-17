import React from "react";
import style from "./AppStrikedTitle.module.css";

const AppStrikedTitle = ({ text, variant }) => {
    return (
        <div className={style.container}>
            <h2 className={`${style.titleText} ${style[variant]}`}>{text}</h2>
        </div>
    );
};

export default AppStrikedTitle;
