import React from "react";
import style from "./TextContainer.module.css";
import LikeNdCommentCount from "./LikeNdCommentCount";

const TextContainer = ({ title, bodyText, commentCount, heartCount }) => {
    return (
        <div className={style.container}>
            <div className={style.ptextContainer}>
                <h2 className={style.title}>{title ? `@${title}` : ""}</h2>
                <p className={style.bodyText}>{bodyText ? bodyText : ""}</p>
            </div>
            <div className={style.likendComment}>
                <LikeNdCommentCount count={commentCount} icon="comment.png" />
                <LikeNdCommentCount count={heartCount} icon="heart.png" />
            </div>
        </div>
    );
};

export default TextContainer;
