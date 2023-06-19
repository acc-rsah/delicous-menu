import React from "react";
import style from "./Collaborate.module.css";
import AppStrikedTitle from "../../components/AppStrikedTitle/AppStrikedTitle";
import InputForm from "../../components/InputForm/InputForm";
import TextBlock from "../../components/TextBlock/TextBlock";
import detail from "../../assets/images/detail02.png";

const Collaborate = () => {
    const inputForm = [
        { label: "Name", placeholder: "Name", inputType: "text" },
        { label: "Surname", placeholder: "Surname", inputType: "text" },
        { label: "Phone", placeholder: "Phone", inputType: "text" },
        { label: "Email Address", placeholder: "Email", inputType: "text" },
        { label: "Experience", placeholder: "Select", inputType: "select" },
        {
            label: "WHERE DID YOU HEAR ABOUT US?",
            placeholder: "Select",
            inputType: "select",
        },
    ];
    return (
        <section className={`${style.container} menu_section`} id="collaborate">
            <div className={style.pContainer}>
                <div className={style.innerContainer}>
                    <div className={style.leftSection}>
                        <div className="title_Container">
                            <h2 className={style.title}>Collaborate</h2>
                            <AppStrikedTitle
                                text="with us"
                                variant="variant_2"
                            />
                        </div>
                        <div className={style.titleDesc}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p>
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore
                            </p>
                        </div>
                    </div>
                    <div className={style.rightSectionContainer}>
                        <img
                            alt="Details"
                            src={detail}
                            className={style.detailImg}
                        />
                        {inputForm.map((inputObj, index) => (
                            <InputForm key={index} inputObj={inputObj} />
                        ))}
                    </div>
                </div>
                <div className={style.sendSubmit}>
                    <TextBlock text="Send" variant="variant_2" />
                </div>
            </div>
        </section>
    );
};

export default Collaborate;
