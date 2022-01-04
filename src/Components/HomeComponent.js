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
                    <a className=" btn btn-info text-white ">Create your plan</a>
                </div>
            </div>
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
    );
}

export default Home;