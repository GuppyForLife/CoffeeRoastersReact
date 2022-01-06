import React, {useState} from "react";
import { COFFEECOLLECTION } from "../shared/coffeeCollection";

const RenderCoffee = ({coffee}) => {
    return(
        <div className=" col-md-3">
            <img src={coffee.image} className=" img-fluid" /><br></br><br></br>
            <h2 className=" text-center">{coffee.title}</h2>
            <p className="text-center">{coffee.description}</p>
        </div>
    );
}

const Home = () => {

    const [coffeeCollection] = useState(COFFEECOLLECTION);

    return(
        <div className="container">
            <div className="card text-white border-0" style={{'padding-bottom':'1%'}} >
                <img src="assets/home/desktop/image-hero-coffeepress.jpg" className="card-img" />
                <div className="card-img-overlay">
                    <h1 className="card-title display-1 home-jumbotron-header">Great coffee made simple.</h1>
                    <p className="card-text home-jumbotron-text">Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                    <button type="button" className="button home-jumbotron-button">Create your plan</button>
                </div>
            </div>
            <div className=" container-fluid">
                <div className="row collection-spacing">
                    <div className="col">
                        <h1 className="text-center display-1">our collection</h1>
                        <div className="row">
                            <RenderCoffee coffee={coffeeCollection[0]} />
                            <RenderCoffee coffee={coffeeCollection[1]} />
                            <RenderCoffee coffee={coffeeCollection[2]} />
                            <RenderCoffee coffee={coffeeCollection[3]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col rounded text-center choose-us-col       text-white ">
                        <h1 className=" choose-us-heading">Why choose us?</h1>
                        <p className="choose-us-par-spacing">A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
                    </div>
                </div>
            </div>
            <div className=" container-fluid">
                <div className="row text-center text-white choose-us-card-row ">
                    <div className="col-md">
                        <div className="choose-us-col-color rounded">
                            <img src="assets/home/desktop/icon-coffee-bean.svg" className=" img-fluid choose-us-col-img"/>
                            <h5 className=" choose-us-col-header">Best Quality</h5>
                            <p className=" choose-us-col-par">Discover an endless variety of the world's best artisan coffee from each of our roasters.</p>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="choose-us-col-color rounded">
                            <img src="assets/home/desktop/icon-gift.svg" className=" img-fluid choose-us-col-img"/>
                            <h5 className=" choose-us-col-header">Exclusive Benefits</h5>
                            <p className=" choose-us-col-par">Special offers and swag when you subscribe, including 30% off your first shipment.</p>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="choose-us-col-color rounded">
                            <img src="assets/home/desktop/icon-truck.svg" className=" img-fluid choose-us-col-img-truck"/>
                            <h5 className=" choose-us-col-header">Free shipping</h5>
                            <p className=" choose-us-col-par">We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className=" container-fluid" >
                <div className="row howitworks-row">
                    <h5>How it works</h5>
                </div>
                <div className="row g-0 howitworks-row2">
                    <div className="col-md">
                        <span className="dot"></span>
                        <div className="h-line"></div>
                        <h1 className=" display-3 howitworks-num">01</h1>
                        <h2 className=" howitworks-header">Pick your coffee</h2>
                        <p className=" howitworks-par">Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                    </div>
                    <div className="col-md">
                        <span className="dot"></span>
                        <div className="h-line"></div>
                        <h1 className=" display-3 howitworks-num">02</h1>
                        <h2 className=" howitworks-header">Choose the frequency</h2>
                        <p className=" howitworks-par">Customize your order frequency, quantity, even your roast style and grind type. Pause, skip, or cancel your subscription with no commitment through our online portal.</p>
                    </div>
                    <div className="col-md">
                        <span className="dot"></span>
                        <div className=" emptySpaceFor3"></div>
                        <h1 className=" display-3 howitworks-num">03</h1>
                        <h2 className=" howitworks-header">Receive and enjoy!</h2>
                        <p className=" howitworks-par">We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning word-class coffees curated to provide a distinct tasting experience.</p>
                    </div>
                </div>
                <div className="row choose-us-card-row">
                    <div className=" col-md-3">
                        <button type="button" className="button">Create your plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;