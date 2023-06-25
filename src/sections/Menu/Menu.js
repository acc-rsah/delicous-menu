import React, { useEffect } from "react";
import styles from "./Menu.module.css";
import AppStrikedTitle from "../../components/AppStrikedTitle/AppStrikedTitle";
import TextBlock from "../../components/TextBlock/TextBlock";
import MenuTitleNdFoodCard from "../../components/MenuTitleNdFoodCard/MenuTitleNdFoodCard";

const Menu = ({ data }) => {
    const menuByFoodType = {};

    for (let i = 0; i < data?.length; i++) {
        const { type, ...rest } = data[i];
        if (!menuByFoodType[type]) {
            menuByFoodType[type] = [];
        }
        menuByFoodType[type].push(rest);
    }

    useEffect(() => {
        const handleScroll = () => {
            const menuSection = document.querySelector("#dish_menu_section");
            menuSection.style.opacity = 1;
            const column1 = document.querySelector(
                "#foodCatContainer > div:nth-child(1) > div"
            );

            const column2 = document.querySelector(
                "#foodCatContainer > div:nth-child(2) > div"
            );
            const column3 = document.querySelector(
                "#foodCatContainer > div:nth-child(3) > div"
            );
            const column4 = document.querySelector(
                "#foodCatContainer > div:nth-child(4) > div"
            );
            if (menuSection) {
                const scrollTop =
                    window.pageYOffset || document.documentElement.scrollTop;
                const sectionTop = menuSection.offsetTop;
                const sectionHeight = menuSection.offsetHeight;
                const windowHeight = window.innerHeight;
                const cHeight = menuSection.clientHeight;

                const scrollBottom = scrollTop + windowHeight;

                const visibleHeight = Math.max(
                    0,
                    Math.min(
                        windowHeight,
                        sectionTop + sectionHeight - scrollTop,
                        scrollTop + windowHeight - sectionTop
                    )
                );

                if (visibleHeight <= 50) {
                    menuSection.style.opacity = 0;
                }

                let percentage = (visibleHeight / sectionHeight) * 100;
                if (scrollBottom >= sectionTop + cHeight) {
                    if (percentage) {
                        column2.style.transform = `translateY(${
                            100 - percentage
                        }%)`;
                        column4.style.transform = `translateY(${
                            100 - percentage
                        }%)`;
                        column1.style.transform = `translateY(-${
                            100 - percentage
                        }%)`;
                        column3.style.transform = `translateY(-${
                            100 - percentage
                        }%)`;
                    }
                } else {
                    column2.style.transform = `translateY(-${
                        100 - percentage
                    }%)`;
                    column4.style.transform = `translateY(-${
                        100 - percentage
                    }%)`;
                    column1.style.transform = `translateY(${
                        100 - percentage
                    }%)`;
                    column3.style.transform = `translateY(${
                        100 - percentage
                    }%)`;
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const renderMenu = (menuType) => {
        return (
            <div className={styles.foodCardContainer}>
                <div className={styles.foodInnerContainer}>
                    <MenuTitleNdFoodCard
                        menuType={menuType}
                        menuByFoodType={menuByFoodType}
                    />
                </div>
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
            <div className={styles.foodTypeContainer} id="foodCatContainer">
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
