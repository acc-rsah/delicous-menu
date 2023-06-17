import React from "react";
import style from "./Footer.module.css";
import FooterSection from "../../components/FooterSection/FooterSection";
import facebook from "../../assets/icons/facebook-icon.png";
import twitter from "../../assets/icons/twitter-icon.png";
import insta from "../../assets/icons/instagram-icon.png";
import linkdIn from "../../assets/icons/Linkedin-icon.png";

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.innerContainer}>
                <div className={style.leftTopSection}>
                    <FooterSection title="Section 1" />
                    <FooterSection title="Section 2" />
                    <FooterSection title="Section 3" />
                    <FooterSection title="Section 4" />
                    <FooterSection title="Section 5" />
                </div>
                <div className={style.rightTopSection}>
                    <h3>This is the</h3>
                    <h2>Logo</h2>
                </div>
                <div className={style.leftBottomSection}>
                    2017. Company. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor .
                </div>
                <div className={style.rightBottomSection}>
                    <img alt="facebook" src={facebook} />
                    <img alt="Twitter" src={twitter} />
                    <img alt="Instagram" src={insta} />
                    <img alt="LinkIdn" src={linkdIn} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
