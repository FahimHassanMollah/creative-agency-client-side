import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import creativeAgency from '../../../../images/logos/creativeagency.png';

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home" >
                        <img className="w-50" src={creativeAgency} alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            <Link className='btn mr-4' to={'/home'}>Home</Link>
                            <Link className='btn mr-4' to={'/dentalServices'}>Our Portfolio</Link>
                            <Link className='btn mr-4' to={'/dentalServices'}>Our Team</Link>
                            <Link className='btn mr-4' to={'/contactUs'}>Contact Us</Link>
                            <Link style={{backgroundColor:"#111430"}} className='btn btn-primary mr-4 px-5' to={'/login'}>Login</Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;