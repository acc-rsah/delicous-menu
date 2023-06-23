import React from "react";
import style from "./TextContainer.module.css";

const LikeNdCommentCount = ({ count, icon }) => {
    return (
        <div className={`${style.boxContainer} likeCommentBox`}>
            {/* <img src={commnetBtn} alt="comment" /> */}
            <img
                className={style.icons}
                src={require(`../../assets/icons/${icon}`)}
                alt=""
                loading="lazy"
            />
            <span className={style.count}>{count}</span>
        </div>
    );
};

export default LikeNdCommentCount;
