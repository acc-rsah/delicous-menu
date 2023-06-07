import React from "react";
import styles from "./MenuTitle.module.css";

const MenuTitle = ({ titleText }) => {
    titleText = titleText.split("_").join(" ");
    return (
        <div className={styles.container}>
            <h2 className={styles.titleText}>{titleText}</h2>
        </div>
    );
};

export default MenuTitle;
