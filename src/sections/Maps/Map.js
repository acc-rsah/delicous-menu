import React from "react";
import style from "./Map.module.css";

/*
Description: Double tab will zoom you inside the map.
Grab the maps to move around.
 */

const Map = () => {
    return (
        <section className={style.container} id="Map_Iframe">
            <div className={style.location_Box}>
                <div className={style.location_innerBox}>
                    <h2 className={style.location_title}>LOCATION</h2>
                    <p className={style.location_address}>
                        12 Upper St. Martin's Lane WC2H 9FB, London
                    </p>
                </div>
            </div>
            <iframe
                title="location"
                src="https://snazzymaps.com/embed/500285"
                width="100%"
                height="500px"
                style={{ border: "none" }}
                loading="lazy"
            ></iframe>
        </section>
    );
};

export default Map;
