import React from 'react';
import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ActiveUserContext from '../../shared/ActiveUserContext';
import './NavbarHOA.css'
function NavbarHOA({onLogout}) {

const activeUser = useContext(ActiveUserContext);


    return (
        <div className="c-navbar">
            {/* <p>Hi {activeUser.fname}</p> */}
            {activeUser ? <p>Hi {activeUser.fname}</p> : null}
            <Navbar bg="primary" expand="lg" variant="dark">

                <Container fluid>

                    <Navbar.Brand href="#/">HOA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* {activeUser ? <Nav.Link href="#/recipes">Recipes</Nav.Link> : null} */}
                          { activeUser? <Nav.Link href="#/dashboard">Dashboard</Nav.Link>:null}
                          { activeUser? <Nav.Link href="#/message">Message</Nav.Link>:null}
                                                  </Nav>
                        <Nav className="ms-auto">
                            {!activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null}
                            {!activeUser ? <Nav.Link href="#/signup">Signup</Nav.Link> : null}
                            {activeUser ? <Nav.Link href="#" onClick={() => onLogout()}>Logout</Nav.Link> : null}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}
export default NavbarHOA;