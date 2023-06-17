import React from "react";
import style from "./FooterSection.module.css";

const FooterSection = ({ title }) => {
    return (
        <div className={style.container}>
            <h2 className={style.title}>{title}</h2>
            <ul className={style.subSection}>
                <li>Subsection</li>
                <li>Subsection</li>
                <li>Subsection</li>
                <li>Subsection</li>
            </ul>
        </div>
    );
};

export default FooterSection;
