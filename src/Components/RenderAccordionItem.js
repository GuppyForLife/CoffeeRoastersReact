import React from "react";
import { Accordion } from "react-bootstrap";

const RenderAccordionItem = (props) => {

    const option = props.option;
    const changeWord = props.changeWord;
    
    return(
        <Accordion.Item eventKey={option.key}>
            <Accordion.Header>
                <h1 className="create-accordion-header">{option.title}</h1>
            </Accordion.Header>
            <Accordion.Body>
                    <div className="row">
                        <div className="col-md ">
                            <input type="radio" 
                            name={option.id} 
                            id={option.optionOne.title} 
                            value={option.optionOne.title} 
                            className="hidebx btn-check"
                            onChange={(e) => changeWord(e.target.value)} />
                            <label htmlFor={option.optionOne.title} className="btn">
                                <div className=" rounded create-accordion-selection-col">
                                    <h3 className=" create-accordion-selection-col-header">{option.optionOne.title}</h3>
                                    <p>{option.optionOne.description}</p>
                                </div>
                            </label>
                        </div>
                        <div className="col-md ">
                            <input type="radio" 
                            name={option.id} 
                            id={option.optionTwo.title} 
                            value={option.optionTwo.title} 
                            className="hidebx btn-check"
                            onChange={(e) => changeWord(e.target.value)} />
                            <label htmlFor={option.optionTwo.title} className="btn">
                                <div className=" rounded create-accordion-selection-col">
                                    <h3 className=" create-accordion-selection-col-header">{option.optionTwo.title}</h3>
                                    <p>{option.optionTwo.description}</p>
                                </div>
                            </label>
                        </div>
                        <div className="col-md ">
                            <input type="radio" 
                            name={option.id} 
                            id={option.optionThree.title} 
                            value={option.optionThree.title} className="hidebx btn-check"
                            onChange={(e) => changeWord(e.target.value)} />
                            <label htmlFor={option.optionThree.title} className="btn">
                                <div className=" rounded create-accordion-selection-col">
                                    <h3 className=" create-accordion-selection-col-header">{option.optionThree.title}</h3>
                                    <p>{option.optionThree.description}</p>
                                </div>
                            </label>
                        </div>
                    </div>
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default RenderAccordionItem;