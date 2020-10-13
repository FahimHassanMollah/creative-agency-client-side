import React from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/creativeagency.png';
const DashboardHeader = () => {
    return (
        <div>
            <Navbar bg="" expand="sm">
                <Link to={'/'} className="w-25">
                    <Navbar.Brand className="w-50">
                        <img
                            alt="logo"
                            src={logo}
                            className="d-inline-block align-top img-fluid w-100"
                        />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                       <h4>Order</h4>
                       

                    </Nav>
                    <Form inline>

                        <h4>Fahim Hassan</h4>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default DashboardHeader;