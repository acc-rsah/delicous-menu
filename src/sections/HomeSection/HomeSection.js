import React from "react";
import style from "./HomeSection.module.css";
import dishLogo from "../../assets/images/landing_page.png";
import appLogo from "../../assets/icons/stamp.png";

const HomeSection = () => {
    return (
        <section className={style.container} id="homesection">
            <img className={style.appLogo} src={appLogo} alt="AppLogo" />

            <img className={style.dishLogo} src={dishLogo} alt="FoodLogo" />
            <div className={style.sectionTitle}>
                <span
                    className={`${style.sectionSubText} ${style.sectionSubText1}`}
                >
                    The best foodie
                </span>
                <span
                    className={`${style.sectionSubText} ${style.sectionSubText2}`}
                >
                    Experience
                </span>
                <span
                    className={`${style.sectionSubText} ${style.sectionSubText3}`}
                >
                    Now in London
                </span>
            </div>
        </section>
    );
};

export default HomeSection;
