import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Styles = styled.div`
  .navbar {
    background: rgb(63, 94, 251);
    background: linear-gradient(
      58deg,
      rgba(63, 94, 251, 1) 20%,
      rgba(252, 70, 107, 1) 100%
    );
  }

  .navbar-brand,
  .navbar-nav,
  .nav-items,
  nav-link {
    color: #f4f9f9;
  }

  &:hover {
    color: white;
  }
`;

const NavBar = () => {
  //   let user = JSON.parse(localStorage.getItem("user-info"));
  //   const history = useHistory();
  //   function logOut() {
  //     localStorage.clear();
  //     history.push("/login");
  //   }

  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">Coliseum</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <NavLink to="/">Home</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to="/about">About</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to="/login">Login</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to="/register">Register</NavLink>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <NavLink to="/posts">Posts</NavLink>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          {/* {localStorage.getItem("user-info") ? (
            <Nav>
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : null} */}
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavBar;
