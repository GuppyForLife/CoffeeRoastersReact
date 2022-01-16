import React, { useState } from "react";
import { Accordion, ModalBody, ModalFooter, ModalTitle } from "react-bootstrap";
import {OPTIONS} from '../shared/accordionCollection.js';
import RenderAccordionItem from "./RenderAccordionItem.js";
import { Modal } from 'react-bootstrap';
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const CreateYourPlan = () => {
    const [ options ] = useState(OPTIONS);

    const [ drink, setDrink ] = useState('_____');
    const [ type, setType ] = useState('_____');
    const [ quantity, setQuantity ] = useState('_____');
    const [ grind, setGrind ] = useState('_____');
    const [ frequency, setFrequency ] = useState('_____');
    const [ price , setPrice ] = useState('Select a delivery option')

    const [ show , setShow ] = useState(false);
    const closeModal = () => setShow(false);
    const showModal = () => {
        setShow(true)
        switch(frequency){
            case 'Every Week':
                setPrice('$14.00/mo');
                break;
            case 'Every 2 Weeks':
                setPrice('$17.25/mo');
                break;
            case 'Every Month':
                setPrice('$22.50/mo');
                break;
            default:
                return price;
        }
    };


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
                    <div className=" col-md-3 d-none d-md-block">
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
                            <RenderAccordionItem option={options[0]} changeWord={word => setDrink(word)} />
                            <RenderAccordionItem option={options[1]} changeWord={word => setType(word)} />
                            <RenderAccordionItem option={options[2]} changeWord={word => setQuantity(word)} />
                            <RenderAccordionItem option={options[3]} changeWord={word => setGrind(word)} />
                            <RenderAccordionItem option={options[4]} changeWord={word => setFrequency(word)} />
                        </Accordion>
                        <div className=" container create-summary-div">
                            <div className="row create-summary text-white rounded">
                                <div className="col create-summary-col">
                                    <h6 className="create-ordersummarytext">ORDER SUMMARY</h6>
                                    <h2>“I drink my coffee as <span>{drink}</span>, with a <span>{type}</span> type of bean. <span>{quantity}</span> ground ala <span>{grind}</span>, sent to me <span>{frequency}</span>.”</h2>
                                </div>
                            </div>
                            <div className=" row gx-0 justify-content-end">
                                <div className="col-md-3 col-sm">
                                <button type="button" className=" button create-button" onClick={showModal} >Create my plan!</button>
                                </div>
                            </div>
                            <Modal show={show} onHide={closeModal} className=" App">
                                <ModalHeader className="modalHeader text-white">
                                    <ModalTitle className=" modalHeaderText"><h1>Order Summary</h1></ModalTitle>
                                </ModalHeader>
                                <ModalBody className="modalBody">
                                    <h3>“I drink my coffee as <span>{drink}</span>, with a <span>{type}</span> type of bean. <span>{quantity}</span> ground ala <span>{grind}</span>, sent to me <span>{frequency}</span>.”</h3>
                                    <p className="modalBodyCorrect">Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout.</p>
                                </ModalBody>
                                <ModalFooter>
                                    <h2 className=" mx-auto">{price}</h2>
                                    <button className=" mx-auto button" onClick={closeModal}>Checkout</button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateYourPlan;