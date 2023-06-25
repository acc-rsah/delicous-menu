import React, { useEffect, useRef, useState } from "react";
import style from "./PopularRecipes.module.css";
import AppStrikedTitle from "../../components/AppStrikedTitle/AppStrikedTitle";
import TextBlock from "../../components/TextBlock/TextBlock";
import RecipeImgTxt from "../../components/RecipeImgTxt/RecipeImgTxt";
import BackBtn from "../../assets/images/back.png";
import NextBtn from "../../assets/images/next.png";

const PopularRecipes = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);

    const scrollToIndex = (index) => {
        if (containerRef.current) {
            containerRef.current.scrollLeft =
                index * containerRef.current.offsetWidth;
        }
        setCurrentIndex(index);
    };

    useEffect(() => {
        let dishTitle = document.querySelector("#dish_title");
        let leftPosition = dishTitle.getBoundingClientRect()?.left;
        let dishSection = document.querySelector("#dish_section");
        dishSection.style.paddingLeft = leftPosition + "px";
    }, []);

    const popRecipes = [
        {
            picName: "Sandwich",
            picPath: "sandwich.png",
            serving: "4",
            chefChoice: true,
            cardSize: "big",
            chefName: "User Full Name",
            cardPosition: "top",
            cardDetail: {
                level: "Difficulty",
                dishName: "CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST",
                dishDesc:
                    "Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful vegetable",
            },
        },
        {
            picName: "PineApple",
            picPath: "pineapple.png",
            serving: "2",
            chefChoice: false,
            cardSize: "small",
            chefName: "User Full Name",
            cardPosition: "top",
            cardDetail: {
                level: "Difficulty",
                dishName: "PINEAPPLE FRUIT SALAD WITH FRESH CREAM",
                dishDesc:
                    "The pineapple juice is the star of the dressing and what gives it such a refreshing and sweet taste. Pineapple juice is known for its health benefit",
            },
        },
        {
            picName: "CheeseSpinach",
            picPath: "CheeseSpinach.png",
            serving: "2",
            chefChoice: true,
            cardSize: "small",
            chefName: "User Full Name",
            cardPosition: "bottom",
            cardDetail: {
                level: "Difficulty",
                dishName: "CHEESE, SPINACH & MUSHROOM STUFFED CHILLY SERVINGS",
                dishDesc:
                    "Amp up this dinner party classic by stuffing three types of cheese, spinach and mushroom into the chicken and flavoured along side with chicken soup",
            },
        },
        {
            picName: "FETAANDPEACH",
            picPath: "FETAANDPEACH.png",
            serving: "8",
            chefChoice: false,
            cardSize: "small",
            chefName: "User Full Name",
            cardPosition: "top",
            cardDetail: {
                level: "Difficulty",
                dishName: "FETA AND PEACH COUSCOUS",
                dishDesc:
                    "Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta alongside of vegies make it so yumm",
            },
        },
        {
            picName: "PineApple",
            picPath: "pineapple.png",
            serving: "2",
            chefChoice: false,
            cardSize: "small",
            chefName: "User Full Name",
            cardPosition: "top",
            cardDetail: {
                level: "Difficulty",
                dishName: "PINEAPPLE FRUIT SALAD WITH FRESH CREAM",
                dishDesc:
                    "The pineapple juice is the star of the dressing and what gives it such a refreshing and sweet taste. Pineapple juice is known for its health benefit",
            },
        },
        {
            picName: "CheeseSpinach",
            picPath: "CheeseSpinach.png",
            serving: "2",
            chefChoice: true,
            cardSize: "small",
            chefName: "User Full Name",
            cardPosition: "bottom",
            cardDetail: {
                level: "Difficulty",
                dishName: "CHEESE, SPINACH & MUSHROOM STUFFED CHILLY SERVINGS",
                dishDesc:
                    "Amp up this dinner party classic by stuffing three types of cheese, spinach and mushroom into the chicken and flavoured along side with chicken soup",
            },
        },
        {
            picName: "FETAANDPEACH",
            picPath: "FETAANDPEACH.png",
            serving: "8",
            chefChoice: false,
            cardSize: "big",
            chefName: "User Full Name",
            cardPosition: "top",
            cardDetail: {
                level: "Difficulty",
                dishName: "FETA AND PEACH COUSCOUS",
                dishDesc:
                    "Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta alongside of vegies make it so yumm",
            },
        },
        {
            picName: "PineApple",
            picPath: "pineapple.png",
            serving: "2",
            chefChoice: false,
            cardSize: "small",
            chefName: "User Full Name",
            cardPosition: "top",
            cardDetail: {
                level: "Difficulty",
                dishName: "PINEAPPLE FRUIT SALAD WITH FRESH CREAM",
                dishDesc:
                    "The pineapple juice is the star of the dressing and what gives it such a refreshing and sweet taste. Pineapple juice is known for its health benefit",
            },
        },
        {
            picName: "CheeseSpinach",
            picPath: "CheeseSpinach.png",
            serving: "2",
            chefChoice: true,
            cardSize: "small",
            chefName: "User Full Name",
            cardPosition: "bottom",
            cardDetail: {
                level: "Difficulty",
                dishName: "CHEESE, SPINACH & MUSHROOM STUFFED CHILLY SERVINGS",
                dishDesc:
                    "Amp up this dinner party classic by stuffing three types of cheese, spinach and mushroom into the chicken and flavoured along side with chicken soup",
            },
        },
    ];

    const scrollToPrevious = () => {
        if (currentIndex > 0) {
            scrollToIndex(currentIndex - 1);
        }
    };

    const scrollToNext = () => {
        if (currentIndex < popRecipes.length - 1) {
            scrollToIndex(currentIndex + 1);
        }
    };

    return (
        <section
            className={`${style.container} menu_section`}
            id="popular_recipes"
        >
            <div className={style.headerTitles} id="dish_title">
                <div>
                    <h2 className={style.title}>Popular</h2>
                    <AppStrikedTitle text="Recipes" variant="variant_1" />
                    <TextBlock text="See All" variant="variant_1" />
                </div>
                <div>
                    <h2 className={style.title}>
                        DO YOU WANT TO SHARE YOUR OWN RECIPE?
                    </h2>
                    <TextBlock text="SEND IT NOW" variant="variant_1" />
                </div>
            </div>

            <div
                className={style.dish_section}
                id="dish_section"
                ref={containerRef}
            >
                {popRecipes.map((recipe, index) => (
                    <RecipeImgTxt recipe={recipe} key={index} />
                ))}
            </div>
            <div className={style.prevNextBtn} id="prevNextBtn">
                <img
                    alt="Back Button"
                    src={currentIndex === 0 ? BackBtn : NextBtn}
                    loading="lazy"
                    onClick={scrollToPrevious}
                    className={
                        currentIndex === 0
                            ? `${style.inactive}`
                            : `${style.imgPrevBtn} ${style.active}`
                    }
                />
                <img
                    alt="Next Button"
                    src={
                        currentIndex === popRecipes.length - 1
                            ? BackBtn
                            : NextBtn
                    }
                    loading="lazy"
                    onClick={scrollToNext}
                    className={
                        currentIndex === popRecipes.length - 1
                            ? `${style.imgNextBtn} ${style.inactive} `
                            : `${style.active}`
                    }
                />
            </div>
        </section>
    );
};

export default PopularRecipes;
