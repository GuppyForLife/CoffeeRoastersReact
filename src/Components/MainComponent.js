import React from "react";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";

const Main = () => {
    return(
        <div>
            <Header />
            <Home />
            <Footer/>
        </div>
    );
}

export default Main;