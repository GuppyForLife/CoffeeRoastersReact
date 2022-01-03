import React from "react";
import { Button } from "bootstrap";

const Home = () => {
    return(
        <div className="container">
            <div className="card text-white border-0" style={{'padding-bottom':'1%'}} >
                <img src="assets/home/desktop/image-hero-coffeepress.jpg" className="card-img" />
                <div className="card-img-overlay">
                    <h1 className="card-title display-1 home-jumbotron-header">Great coffee made simple.</h1>
                    <p className="card-text home-jumbotron-text">Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                    <button className="btn btn-info text-white">Create your plan</button>
                </div>
            </div>
        </div>
    );
}

export default Home;