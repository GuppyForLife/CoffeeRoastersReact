import React from "react";
import About from "./AboutUsComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import CreateYourPlan from "./CreateComponent";

const Main = () => {
    return(
        <div>
            <Header />
            <CreateYourPlan />
            <Footer/>
        </div>
    );
}

export default Main;