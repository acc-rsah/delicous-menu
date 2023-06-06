import React from "react";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import style from "./Community.module.css";
import TextContainer from "../../components/TextContainer/TextContainer";
import AppStrikedTitle from "../../components/AppStrikedTitle/AppStrikedTitle";
import KnowMore from "../../components/KnowMore/KnowMore";

const Communtiy = () => {
    return (
        <section className={style.container} id="community">
            <div
                className={`${style.imgNdTxtContainer} ${style.imgNdTxtContainer_row1}`}
            >
                <div className={style.title_container}>
                    <div>
                        <h2 className={style.titleText}>Meet Our</h2>
                        <AppStrikedTitle text="Community" />
                        <KnowMore />
                    </div>
                    <div>
                        <p className={style.titleSideText}>
                            LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU
                            PER NABORE EN TORNA ENTALTO
                        </p>
                    </div>
                </div>
                <ImageContainer imagePath="desert.png" altText="Desert" />
                <TextContainer
                    title="buzzfeedfood"
                    bodyText="It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮. Find the recipe from the link in our bio! 📸: @taylormillerphoto"
                    commentCount="60"
                    heartCount="14.7k"
                />
            </div>
            <div
                className={`${style.imgNdTxtContainer} ${style.imgNdTxtContainer_row2}`}
            >
                <ImageContainer imagePath="taco.png" altText="taco" />
                <TextContainer
                    title="love_food"
                    bodyText="Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷: @foodwithmichel] #lovefood"
                    commentCount="789"
                    heartCount="99.7k"
                />
            </div>
            <div
                className={`${style.imgNdTxtContainer} ${style.imgNdTxtContainer_row3}`}
            >
                <div className={style.sideText}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Duis aute irure.
                    </p>
                </div>
                <ImageContainer imagePath="burger.png" altText="burger" />
                <TextContainer
                    title="buzzfeedfood"
                    bodyText="Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)"
                    commentCount="152"
                    heartCount="18.2k"
                />
            </div>
        </section>
    );
};

export default Communtiy;
