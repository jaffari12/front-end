import React, { useContext, useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";
import "./NavBar.css";

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
  const { logout, isLoggedIn } = useContext(AuthContext);
  // const [logged, setLogged] = useState(isLoggedIn());

  const handleLogin = () => {
    if (isLoggedIn()) {
      logout();
      //setLogged(isLoggedIn());
    }
  };

  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand className="text" href="#home">
          Coliseum
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <NavLink className="nav-text" to="/">
                  Home
                </NavLink>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <NavLink onClick={handleLogin} className="nav-text" to="/login">
                  {isLoggedIn() ? "Logout" : "Login"}
                </NavLink>
              </Nav.Link>
            </Nav.Item>
            {isLoggedIn() ? null : (
              <Nav.Item>
                <Nav.Link>
                  <NavLink className="nav-text" to="/register">
                    Register
                  </NavLink>
                </Nav.Link>
              </Nav.Item>
            )}
            <Nav.Item>
              <Nav.Link>
                <NavLink className="nav-text" to="/posts">
                  Posts
                </NavLink>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavBar;
