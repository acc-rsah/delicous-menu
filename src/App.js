import React, { useEffect, useState } from "react";
import NavHeader from "./sections/NavHeader/NavHeader";
import HomeSection from "./sections/HomeSection/HomeSection";
import Communtiy from "./sections/Community/Communtiy";
import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader";
import useFetch from "./hooks/useFetchApi";
import Menu from "./sections/Menu/Menu";
import Map from "./sections/Maps/Map";
import PopularRecipes from "./sections/PopularRecipes/PopularRecipes";
import Collaborate from "./sections/Collaborate/Collaborate";
import Footer from "./sections/Footer/Footer";
import SectionCounter from "./components/SectionCounter/SectionCounter";
import RequestInfo from "./components/RequestInfo/RequestInfo";
import landingImg from "./assets/images/landingPage.png";
import "./index.css";
/* import FontFaceObserver from "fontfaceobserver";
import font1 from "./fonts/DINCondensedBold.ttf";
import font2 from "./fonts/GillSans.ttc"; */

function App() {
    const [imageLoaded, setImageLoaded] = useState(false);
    /* const [areFontsLoaded, setFontsLoaded] = useState(false); */

    useEffect(() => {
        /* const loadFonts = async () => {
            const font1Observer = new FontFaceObserver("DIN Condensed");
            const font2Observer = new FontFaceObserver("Menu GillSans");

            try {
                await Promise.all([
                    font1Observer.load(font1, 60000),
                    font2Observer.load(font2, 60000),
                ]);

                setFontsLoaded(true);
            } catch (error) {
                console.error("Error loading fonts:", error);
            }
        };

        loadFonts(); */

        const image = new Image();
        image.src = landingImg;
        image.onload = () => {
            setImageLoaded(true);
        };
    }, []);

    const { loading, data, error } = useFetch(
        "https://3gyhzkmhda.eu-west-1.awsapprunner.com/foods"
    );
    if (loading || !imageLoaded) {
        return <SkeletonLoader />;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="App">
            <NavHeader />
            <SectionCounter />
            <RequestInfo />
            <HomeSection />
            <Communtiy />
            <Map />
            <Menu data={data} />
            <PopularRecipes />
            <Collaborate />
            <Footer />
        </div>
    );
}

export default App;
