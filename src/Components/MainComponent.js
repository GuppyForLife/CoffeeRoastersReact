import React from "react";
import About from "./AboutUsComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";

const Main = () => {
    return(
        <div>
            <Header />
            <About />
            <Footer/>
        </div>
    );
}

export default Main;