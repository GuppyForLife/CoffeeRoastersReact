import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import {OPTIONS} from '../shared/accordionCollection.js';

const RenderAccordionItem = ({option}) => {
    return(
        <Accordion.Item eventKey={option.key}>
            <Accordion.Header>
                <h1 className="create-accordion-header">{option.title}</h1>
            </Accordion.Header>
            <Accordion.Body>
                <div className="row">
                    <div className="col-md ">
                        <button className=" rounded create-accordion-selection-col">
                            <h3 className=" create-accordion-selection-col-header">{option.optionOne.title}</h3>
                            <p>{option.optionOne.description}</p>
                        </button>
                    </div>
                    <div className="col-md ">
                        <button className=" rounded create-accordion-selection-col">
                            <h3 className=" create-accordion-selection-col-header">{option.optionTwo.title}</h3>
                            <p>{option.optionTwo.description}</p>
                        </button>
                    </div>
                    <div className="col-md ">
                        <button className=" rounded create-accordion-selection-col">
                            <h3 className=" create-accordion-selection-col-header">{option.optionThree.title}</h3>
                            <p>{option.optionThree.description}</p>
                        </button>
                    </div>
                </div>
            </Accordion.Body>
        </Accordion.Item>
    );
}


const CreateYourPlan = () => {

    const [options] = useState(OPTIONS);

    return(
        <div className=" container">
            <div className=" container create-hero-img rounded">
                <div className="text-white">
                    <h1 className=" create-jumbotron-header display-2"> Create a plan</h1>
                    <p className="create-jumbotron-text ">Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</p>
                </div>
            </div>
            <div className="container create-steps-div rounded" >
                <div className="row create-steps-row gx-0">
                <div className="col-md">
                        <span className="dot-create"></span>
                        <div className="h-line-create"></div>
                        <h1 className=" howitworks-num display-4">01</h1>
                        <h2 className=" howitworks-header text-white">Pick your coffee</h2>
                        <p className=" howitworks-par text-white">Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                    </div>
                    <div className="col-md">
                        <span className="dot-create"></span>
                        <div className="h-line-create"></div>
                        <h1 className="howitworks-num display-4">02</h1>
                        <h2 className=" howitworks-header text-white">Choose the frequency</h2>
                        <p className=" howitworks-par text-white">Customize your order frequency, quantity, even your roast style and grind type. Pause, skip, or cancel your subscription with no commitment through our online portal.</p>
                    </div>
                    <div className="col-md">
                        <span className="dot-create"></span>
                        <div className=" emptySpaceFor3"></div>
                        <h1 className=" howitworks-num display-4">03</h1>
                        <h2 className=" howitworks-header text-white">Receive and enjoy!</h2>
                        <p className=" howitworks-par text-white">We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning word-class coffees curated to provide a distinct tasting experience.</p>
                    </div>
                </div>
            </div>
            <div className=" container-fluid create-accordian-div">
                <div className="row create-accordian-row">
                    <div className=" col-md-3">
                        <div className="row create-accordian-options">
                            <div className="col">
                                <h4>01&nbsp;&nbsp;&nbsp;&nbsp;Preferences</h4>
                            </div>
                        </div>
                        <div className="row create-accordian-options">
                            <div className="col">
                                <h4>02&nbsp;&nbsp;&nbsp;&nbsp;Bean Type</h4>
                            </div>
                        </div>
                        <div className="row create-accordian-options">
                            <div className="col">
                                <h4>03&nbsp;&nbsp;&nbsp;&nbsp;Quantity</h4>
                            </div>
                        </div>
                        <div className="row create-accordian-options">
                            <div className="col">
                                <h4>04&nbsp;&nbsp;&nbsp;&nbsp;Grind Option</h4>
                            </div>
                        </div>
                        <div className="row create-accordian-options">
                            <div className="col">
                                <h4>05&nbsp;&nbsp;&nbsp;&nbsp;Deliveries</h4>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md">

                        <Accordion defaultActiveKey={['']} alwaysOpen flush>
                            <RenderAccordionItem option={options[0]} />
                            <RenderAccordionItem option={options[1]} />
                            <RenderAccordionItem option={options[2]} />
                            <RenderAccordionItem option={options[3]} />
                            <RenderAccordionItem option={options[4]} />
                        </Accordion>
                        <div className=" container create-summary-div">
                            <div className="row create-summary text-white">
                                <div className="col create-summary-col">
                                    <h6 className="create-ordersummarytext">ORDER SUMMARY</h6>
                                    <h2>“I drink my coffee as Filter, with a Decaf type of bean. 250g ground ala Cafetiére, sent to me Every Week.”</h2>
                                </div>
                            </div>
                            <div className=" row gx-0 justify-content-end">
                                <div className="col-3">
                                <button type="button" className=" button create-button" >Create my plan!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateYourPlan;