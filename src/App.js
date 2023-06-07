import React from "react";
import NavHeader from "./components/NavHeader/NavHeader";
import HomeSection from "./components/HomeSection/HomeSection";
import Communtiy from "./sections/Community/Communtiy";
import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader";
import useFetch from "./hooks/useFetchApi";
import Menu from "./sections/Menu/Menu";

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
            <Menu data={data} />
        </div>
    );
}

export default App;
