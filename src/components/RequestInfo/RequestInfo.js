import React from "react";
import style from "./RequestInfo.module.css";
import TextBlock from "../TextBlock/TextBlock";

function RequestInfo() {
    return (
        <div className={style.container}>
            <TextBlock text="Request Info" variant="variant_3" />
        </div>
    );
}

export default RequestInfo;
