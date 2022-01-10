import React, { useReducer, useState } from "react";
import { HEADQUARTERS } from "../shared/headquarters";

const RenderHeadquarters = ({location}) => {
    return(
        <div className="col-md about-headquarters-col">
            <img src={location.image} className=" img-fluid about-headquarters-col-img"/>
            <h3 className=" about-headquarters-col-heading">{location.country}</h3>
            <p>
                {location.street}<br></br>
                {location.city}<br></br>
                {location.state}<br></br>
                {location.phoneNumber}
            </p>
        </div>
    );
}

const About = () => {

    const [headquarters] = useState(HEADQUARTERS);

    return(
        <div className=" container">
            <div className=" about-hero-img rounded">
                <div className="text-white">
                    <h1 className=" about-jumbotron-header display-4"> About Us</h1>
                    <p className="about-jumbotron-text ">Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment</p>
                </div>
            </div>
            <div className=" container-fluid commitment-div-spacing">
                <div className=" row commitment-row-spacing">
                    <div className=" col-md">
                        <img src="assets/about/desktop/image-commitment.jpg" className=" rounded img-fluid" />
                    </div>
                    <div className=" col-md commitment-col-words">
                        <h2 className=" commitment-heading display-4">Our commitment</h2>
                        <p>We're built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world's best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.</p>
                    </div>
                </div>
            </div>
            <div className=" container-fluid about-quality-div-spacing">
                <div className=" row">
                <div className="col rounded choose-us-col text-white ">
                        <h1 className="about-quality-header ">Uncompromising quality</h1>
                        <p className="about-quality-par">Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
                    </div>
                </div>
            </div>
            <div className=" container-fluid">
            <div className="row">
                    <div className="col d-flex justify-content-end">
                        <div className="about-quality-img">
                            <img src="assets/about/desktop/image-quality.jpg" className="rounded about-quality-img-rules" />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" container-fluid about-headquarters-div-spacing">
                <div className="row about-headquarters-row-spacing">
                    <div className="col">
                        <h5 className="headquarters">Our headquarters</h5>
                    </div>
                </div>
                <div className="row about-headquarters-row-spacing">
                    <RenderHeadquarters location={headquarters[0]}/>
                    <RenderHeadquarters location={headquarters[1]}/>
                    <RenderHeadquarters location={headquarters[2]}/>
                </div>
            </div>
        </div>
    );
}

export default About;