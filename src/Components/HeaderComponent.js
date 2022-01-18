import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
            <div className='container header' >
                <Navbar light expand='md'>
                    <NavbarBrand>
                        <Link to='/home'>
                            <img src="assets/shared/desktop/logo.svg"/>
                        </Link>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.togglerNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ms-auto" >
                            <NavItem>
                                <NavLink className="nav-link text-center" to='/home'>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link text-center" to='/about'>About Us</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="nav-link text-center" to='/create'>Create Your Path</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default Header;