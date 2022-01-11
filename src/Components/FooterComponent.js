import React from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="footer container-fluid">
            <div className='row'>
                <div className="col-sm-12 col-md footer-row-padding">
                    <img src="assets/shared/desktop/logo.svg" />
                </div>
                <div className="col-sm-4 col-md footer-row-padding">
                    Home &nbsp;
                    About Us &nbsp;
                    Create Your Plan
                
                </div>
                <div className="col-sm-12 col-md footer-row-padding" >
                    <img src="assets/shared/desktop/icon-facebook.svg" className="footer-social-padding"/>
                    <img src="assets/shared/desktop/icon-instagram.svg" className="footer-social-padding" />
                    <img src="assets/shared/desktop/icon-twitter.svg" className="footer-social-padding"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;