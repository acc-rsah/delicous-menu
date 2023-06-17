import React from "react";
import style from "./InputForm.module.css";

const InputForm = ({ inputObj }) => {
    let { label, placeholder, inputType } = inputObj;

    const InputType = ({ inputType, label, placeholder }) => {
        switch (inputType) {
            case "text":
                return (
                    <input
                        autoComplete="off"
                        type="text"
                        name={label}
                        placeholder={placeholder}
                    />
                );
            default:
                return (
                    <select id={label} name={label}>
                        <option value="">Select</option>
                    </select>
                );
        }
    };

    return (
        <div className={style.container}>
            <label className={style.label}>{label}</label>
            <InputType
                inputType={inputType}
                placeholder={placeholder}
                label={label}
            />
        </div>
    );
};

export default InputForm;
