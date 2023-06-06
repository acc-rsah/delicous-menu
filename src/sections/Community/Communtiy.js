import React from "react";
import style from "./Community.module.css";
import AppStrikedTitle from "../../components/AppStrikedTitle/AppStrikedTitle";
import KnowMore from "../../components/KnowMore/KnowMore";
import CommunityImgTxt from "../../components/CommunityImgTxt/CommunityImgTxt";

const Communtiy = () => {
    const menuJSON = [
        {
            picName: "Desert",
            picPath: "desert.png",
            cardDetail: {
                title: "buzzfeedfood",
                cardBodyText:
                    "It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮. Find the recipe from the link in our bio! 📸: @taylormillerphoto",
                likeCount: "14.7k",
                commentCount: "60",
            },
        },
        {
            picName: "Taco",
            picPath: "taco.png",
            cardDetail: {
                title: "love_food",
                cardBodyText:
                    "Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷: @foodwithmichel] #lovefood",
                likeCount: "99.7k",
                commentCount: "789",
            },
        },
        {
            picName: "Burger",
            picPath: "burger.png",
            cardDetail: {
                title: "buzzfeedfood",
                cardBodyText:
                    "Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)",
                likeCount: "18.2k",
                commentCount: "152",
            },
        },
    ];

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
                <CommunityImgTxt
                    imagePath={menuJSON[0].picPath}
                    altText={menuJSON[0].picName}
                    title={menuJSON[0].cardDetail.title}
                    bodyText={menuJSON[0].cardDetail.cardBodyText}
                    commentCount={menuJSON[0].cardDetail.commentCount}
                    heartCount={menuJSON[0].cardDetail.likeCount}
                />
            </div>
            <div
                className={`${style.imgNdTxtContainer} ${style.imgNdTxtContainer_row2}`}
            >
                <CommunityImgTxt
                    imagePath={menuJSON[1].picPath}
                    altText={menuJSON[1].picName}
                    title={menuJSON[1].cardDetail.title}
                    bodyText={menuJSON[1].cardDetail.cardBodyText}
                    commentCount={menuJSON[1].cardDetail.commentCount}
                    heartCount={menuJSON[1].cardDetail.likeCount}
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
                <CommunityImgTxt
                    imagePath={menuJSON[2].picPath}
                    altText={menuJSON[2].picName}
                    title={menuJSON[2].cardDetail.title}
                    bodyText={menuJSON[2].cardDetail.cardBodyText}
                    commentCount={menuJSON[2].cardDetail.commentCount}
                    heartCount={menuJSON[2].cardDetail.likeCount}
                />
            </div>
        </section>
    );
};

export default Communtiy;
