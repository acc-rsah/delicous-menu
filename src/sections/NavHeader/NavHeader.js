import React from "react";
import style from "./NavHeader.module.css";

const NavHeader = () => {
    return (
        <header>
            <nav className={style.container} id="home-section">
                <ul className={style.leftNavSection}>
                    <li className={style.logo}>LOGO</li>
                    <li className={`${style.navCat} leftNavli`}>ABOUT</li>
                    <li className={`${style.navCat} leftNavli`}>LOCATION</li>
                    <li className={`${style.navCat} leftNavli`}>OUR MENU</li>
                    <li className={`${style.navCat} leftNavli`}>RECIPES</li>
                </ul>
                <ul className={style.rightNavSection}>
                    <li className={`${style.navCat} rightNavli`}>CONTACT</li>
                    <li className={`${style.navCat} rightNavli`}>LOGIN</li>
                </ul>
            </nav>
        </header>
    );
};

export default NavHeader;
