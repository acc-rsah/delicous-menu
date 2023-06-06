import React from "react";
import style from "./SkeletonLoader.module.css";

const SkeletonLoader = () => {
    return (
        <div className={style.skeletonLoader}>
            <div className={style.circle}></div>
        </div>
    );
};

export default SkeletonLoader;
