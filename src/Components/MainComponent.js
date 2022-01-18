import React from "react";
import About from "./AboutUsComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import CreateYourPlan from "./CreateComponent";
import { Redirect, Route, Switch } from "react-router-dom";
import { TransitionGroup } from "react-transition-group";

const Main = () => {

    const HomePage = () =>{
        return <Home />
    }

    const AboutPage = () =>{
        return <About />
    }

    const CreatePage = () =>{
        return <CreateYourPlan />
    }

    return(
        <div>
            <Header />
            <TransitionGroup>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/about' component={AboutPage} />
                    <Route path='/create' component={CreatePage} />
                    <Redirect to='/home' />
                </Switch>
            </TransitionGroup>
            <Footer/>
        </div>
    );
}

export default Main;