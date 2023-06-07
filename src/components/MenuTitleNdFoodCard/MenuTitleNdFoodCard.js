import React from "react";
import MenuTitle from "../MenuTitle/MenuTitle";
import FoodCard from "../FoodCard/FoodCard";

const MenuTitleNdFoodCard = ({ menuType, menuByFoodType }) => {
    return (
        <>
            <MenuTitle titleText={menuType} />
            {menuByFoodType[menuType]?.map((ele, index) => (
                <React.Fragment key={index}>
                    <FoodCard
                        foodTitle={ele?.title}
                        foodDesc={ele?.description}
                        price={ele?.price}
                    />
                </React.Fragment>
            ))}
        </>
    );
};

export default MenuTitleNdFoodCard;
