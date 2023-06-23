import React from "react";
import style from "./ImageContainer.module.css";
import instaBtn from "../../assets/icons/instagram.png";

const ImageContainer = ({ imagePath, altText }) => {
    return (
        <div className={style.container}>
            <img
                className={style.instaBtn}
                src={instaBtn}
                alt="insta pic"
                loading="lazy"
            />
            <img
                className={style.menuPic}
                src={require(`../../assets/images/${imagePath}`)}
                alt={altText}
                loading="lazy"
            />
        </div>
    );
};

export default ImageContainer;
