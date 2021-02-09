import React from 'react';
import {  Navbar, Nav} from 'react-bootstrap';
import styled from "styled-components";

const Styles = styled.div`
.navbar{
background: rgb(63,94,251);
background: linear-gradient(58deg, rgba(63,94,251,1) 20%, rgba(252,70,107,1) 100%);
}

.navbar-brand, .navbar-nav, .nav-items, nav-link{
    color: #f4f9f9;
}

&:hover{
    color: white;
}
`;

const NavBar = () => {
   return (
    <Styles>
        <Navbar expand="lg" >
        <Navbar.Brand href="#home">Coliseum</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" >
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/register">Register</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>

  );
}

export default NavBar;





