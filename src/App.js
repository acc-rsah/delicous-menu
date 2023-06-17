import React from "react";
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

function App() {
    const { loading, data, error } = useFetch(
        "https://3gyhzkmhda.eu-west-1.awsapprunner.com/foods"
    );
    if (loading) {
        return <SkeletonLoader />;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="App">
            <NavHeader />
            <HomeSection />
            <Communtiy />
            {/* <Map /> */}
            <Menu data={data} />
            <PopularRecipes />
            <Collaborate />
            <Footer />
        </div>
    );
}

export default App;
