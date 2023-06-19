import React from "react";
import styles from "./Menu.module.css";
import AppStrikedTitle from "../../components/AppStrikedTitle/AppStrikedTitle";
import TextBlock from "../../components/TextBlock/TextBlock";
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

    const renderMenu = (menuType) => {
        return (
            <div className={styles.foodCardContainer}>
                <MenuTitleNdFoodCard
                    menuType={menuType}
                    menuByFoodType={menuByFoodType}
                />
            </div>
        );
    };

    return (
        <section
            className={`${styles.menuContainer} menu_section`}
            id="dish_menu_section"
        >
            <div className={styles.menuTitle}>
                <AppStrikedTitle text="Our Menu" variant="variant_1" />
                <TextBlock text="Know More" variant="variant_1" />
            </div>
            <div className={styles.foodTypeContainer}>
                {Object.keys(menuByFoodType).map((ele, index) => {
                    //et menuType = ele.toLowerCase().split("_").join(" ");
                    let menuType = ele.toLowerCase();

                    return menuType ? (
                        <React.Fragment key={index}>
                            {renderMenu(menuType)}
                        </React.Fragment>
                    ) : (
                        <div key={index}>No Records Found</div>
                    );

                    /* switch (menuType) {
                        case "starters":
                        case "main_courses":
                        case "sides":
                        case "desserts":
                            return (
                                <React.Fragment key={index}>
                                    {renderMenu(menuType)}
                                </React.Fragment>
                            );
                        default:
                            return <div key={index}>No Records Found</div>;
                    } */
                })}
            </div>
        </section>
    );
};

export default Menu;
