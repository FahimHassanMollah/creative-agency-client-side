import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import creativeAgency from '../../../../images/logos/creativeagency.png';
import * as firebase from "firebase/app";
import "firebase/auth";

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const logOut = (params) => {
        firebase.auth().signOut().then(function() {
            const signOut = { name: "", email:"",photo:"" };
            setLoggedInUser(signOut)
          }).catch(function(error) {
            // An error happened.
          });
    }
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/" >
                        <img className="w-50" src={creativeAgency} alt=""/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            <Link className='btn mr-4' to={'/'}>Home</Link>
                            <Link className='btn mr-4' to={'/ourPortfolio'}>Our Portfolio</Link>
                            <Link className='btn mr-4' to={'/ourTeam'}>Our Team</Link>
                            <Link className='btn mr-4' to={'/contactUs'}>Contact Us</Link>
                           {
                               loggedInUser.email? <Button onClick={logOut} style={{backgroundColor:"#111430"}} className='btn btn-primary mr-4'>Log out</Button>
                               :
                               <Link style={{backgroundColor:"#111430"}} className='btn btn-primary mr-4 px-5' to={'/login'}>Login</Link>
                           }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;