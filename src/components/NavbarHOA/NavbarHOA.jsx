import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavbarHOA.css'
function NavbarHOA({ activeUser, onLogout }) {
    return (
        <div className="c-navbar">
                 <p>Hi {activeUser.fname}</p>
            <Navbar bg="primary" expand="lg" variant="dark">
              
                <Container fluid>
                
                    <Navbar.Brand href="#/">HOA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* {activeUser ? <Nav.Link href="#/recipes">Recipes</Nav.Link> : null} */}
                            <Nav.Link href="#/dashboard">Dashboard</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            {/* {!activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null} */}
                            {/* {!activeUser ? <Nav.Link href="#/signup">Signup</Nav.Link> : null} */}
                            {/* {activeUser ? <Nav.Link href="#" onClick={() => onLogout()}>Logout</Nav.Link> : null} */}
                            {!activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null}
                            {activeUser ?<Nav.Link href="#" onClick={()=>onLogout()}>Logout</Nav.Link> : null }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       
        </div>
    );
}
export default NavbarHOA;