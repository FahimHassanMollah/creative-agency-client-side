import React, { useContext } from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/creativeagency.png';
const DashboardHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                       <h4>{((window.location.pathname==='/dashboardAdminServiceList'&&'Services list')||(window.location.pathname==='/dashboardAddService'&&'Add Services')||(window.location.pathname==='/dashboardMakeAdmin'&&'Add Services'))||'Order'}</h4>
                       

                    </Nav>
                    <Form inline>

                     <h4>{loggedInUser.name}</h4>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default DashboardHeader;