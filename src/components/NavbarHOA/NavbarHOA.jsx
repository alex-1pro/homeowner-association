import React from 'react';
import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ActiveUserContext from '../../shared/ActiveUserContext';
import './NavbarHOA.css'
import { BiMessageAltDetail } from 'react-icons/bi'
import { FiLogIn, FiLogOut,FiUsers } from 'react-icons/fi'
import {  TiChartPieOutline} from 'react-icons/ti'
import { AiOutlineForm, AiOutlineHome } from 'react-icons/ai'
import { RiDashboardLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom';
function NavbarHOA({ onLogout }) {

    const activeUser = useContext(ActiveUserContext);


    return (
        <div className="c-navbar">
            {/* <p>Hi {activeUser.fname}</p> */}
            {activeUser ? <p>Hi {activeUser.fname}</p> : null}
            <Navbar bg="primary" expand="lg" variant="dark">

                <Container fluid>

                    <Navbar.Brand href="#/message">HOA  <AiOutlineHome /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/* {activeUser ? <Nav.Link href="#/dashboard">Dashboard  <RiDashboardLine /></Nav.Link> : null} */}
                            {activeUser ? <Nav.Link href="#/message">Message <BiMessageAltDetail /> </Nav.Link> : null}
                            {activeUser ? <Nav.Link href="#/tenants">Tenants <FiUsers /> </Nav.Link> : null}
                            {activeUser ? <Nav.Link href="#/voting">Votings <TiChartPieOutline /> </Nav.Link> : null}

                        </Nav>
                        <Nav className="ms-auto">
                            {!activeUser ? <Nav.Link href="#/login">Login <FiLogIn /> </Nav.Link> : null}
                            
                            {activeUser ? <Nav.Link href="#" onClick={() => onLogout()}>Logout <FiLogOut /> </Nav.Link> : null}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}
export default NavbarHOA;