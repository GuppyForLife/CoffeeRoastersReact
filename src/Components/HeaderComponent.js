import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };

        this.togglerNav = this.togglerNav.bind(this);
    }

    togglerNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <div className='container header' style={{'padding-top':'1%', 'padding-bottom':'1%'}}>
            <Navbar light expand='md'>
                <NavbarBrand>
                    <img src="assets/shared/desktop/logo.svg"/>
                </NavbarBrand>
                <NavbarToggler onClick={this.togglerNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar className="ms-auto" >
                        <NavItem className="nav-link text-center">
                            Home
                        </NavItem>
                        <NavItem className="nav-link text-center">
                            About Us
                        </NavItem>
                        <NavItem className="nav-link text-center">
                            Create Your Path
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </div>
        );
    }

}

export default Header;