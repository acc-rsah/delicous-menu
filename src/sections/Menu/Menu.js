import React from "react";
import styles from "./Menu.module.css";
import AppStrikedTitle from "../../components/AppStrikedTitle/AppStrikedTitle";
import KnowMore from "../../components/KnowMore/KnowMore";
import MenuTitleNdFoodCard from "../../components/MenuTitleNdFoodCard/MenuTitleNdFoodCard";

const Menu = ({ data }) => {
    const menuByFoodType = {};

    for (let i = 0; i < data.length; i++) {
        const { type, ...rest } = data[i];
        if (!menuByFoodType[type]) {
            menuByFoodType[type] = [];
        }
        menuByFoodType[type].push(rest);
    }

    return (
        <section id="Menu_Section" className={styles.menuContainer}>
            <AppStrikedTitle text="Our Menu" />
            <KnowMore />
            {Object.keys(menuByFoodType).map((ele, index) => {
                //et menuType = ele.toLowerCase().split("_").join(" ");
                let menuType = ele.toLowerCase();
                switch (menuType) {
                    case "starters":
                        return (
                            <div key={index}>
                                <MenuTitleNdFoodCard
                                    menuType={menuType}
                                    menuByFoodType={menuByFoodType}
                                />
                            </div>
                        );
                    case "main_courses":
                        return (
                            <div key={index}>
                                <MenuTitleNdFoodCard
                                    menuType={menuType}
                                    menuByFoodType={menuByFoodType}
                                />
                            </div>
                        );
                    case "sides":
                        return (
                            <div key={index}>
                                <MenuTitleNdFoodCard
                                    menuType={menuType}
                                    menuByFoodType={menuByFoodType}
                                />
                            </div>
                        );
                    case "desserts":
                        return (
                            <div key={index}>
                                <MenuTitleNdFoodCard
                                    menuType={menuType}
                                    menuByFoodType={menuByFoodType}
                                />
                            </div>
                        );
                    default:
                        return <div key={index}>No Records Found</div>;
                }
            })}
        </section>
    );
};

export default Menu;
