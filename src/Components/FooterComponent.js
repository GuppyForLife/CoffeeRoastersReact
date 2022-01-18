import React from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
    return(
        <footer className="footer container-fluid">
            <div className='row'>
                <div className="col-sm-12 col-md footer-row-padding">
                    <img src="assets/shared/desktop/logo.svg" />
                </div>
                <div className="col-sm-4 col-md footer-row-padding">
                    <NavLink activeClassName="footer-active" to='/home' className='footer-link'>Home</NavLink> &nbsp;
                    <NavLink activeClassName="footer-active" to='/about' className='footer-link'>About</NavLink> &nbsp;
                    <NavLink activeClassName="footer-active" to='/create' className='footer-link'>Create Your Plan</NavLink>
                
                </div>
                <div className="col-sm-12 col-md footer-row-padding" >
                    <a href="https://www.facebook.com" target='_blank' rel="noopener noreferrer" >
                        <img src="assets/shared/desktop/icon-facebook.svg" className="footer-social-padding"/>
                    </a>
                    <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer" >
                        <img src="assets/shared/desktop/icon-instagram.svg" className="footer-social-padding" />
                    </a>
                    <a href="https://www.twitter.com" target='_blank' rel="noopener noreferrer" >
                        <img src="assets/shared/desktop/icon-twitter.svg" className="footer-social-padding"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;