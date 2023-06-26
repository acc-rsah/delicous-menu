import React, { useState, useEffect } from "react";
import style from "./SectionCounter.module.css";

const SectionCounter = () => {
    const [counter, setCounter] = useState(1);
    var userAgent = navigator.userAgent;

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(".menu_section");
            let currentSection = 1;
            for (let i = 0; i < sections.length; i++) {
                const rect = sections[i].getBoundingClientRect();
                if (
                    rect.top <= window.innerHeight / 2 &&
                    rect.bottom >= window.innerHeight / 2
                ) {
                    currentSection = i + 1;
                    break;
                }
            }
            setCounter(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={style.counter}>
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                    className={`${style.section_line} ${
                        counter === index + 1
                            ? `${style.active}`
                            : `${style.inActive}`
                    }`}
                    /* style={{ width: counter === index + 1 ? "30px" : "15px" }} */
                >
                    {counter === index + 1 && (
                        <span
                            className={`${
                                userAgent.match(/Win/i)
                                    ? style.counter_value
                                    : style.counter_valueMac
                            }`}
                        >
                            {counter}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default SectionCounter;
