import React from "react";
import NavHeader from "./components/NavHeader/NavHeader";
import HomeSection from "./components/HomeSection/HomeSection";
import Communtiy from "./sections/Community/Communtiy";

function App() {
    return (
        <div className="App">
            <NavHeader />
            <HomeSection />
            <Communtiy />
        </div>
    );
}

export default App;
