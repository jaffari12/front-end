import React from "react";
import { Jumbotron as Jumbo, Container, Button } from "react-bootstrap";
import styled from "styled-components";
import imageBg from "../assets/imageBg.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${imageBg}) no-repeat fixed bottom;
    background-size: cover;
    height: 900px;
    color: #f4f9f9;
    position: relative;
    z-index: -2;
  }

  .button {
    background: rgb(63, 94, 251);
    background: linear-gradient(
      58deg,
      rgba(63, 94, 251, 1) 20%,
      rgba(252, 70, 107, 1) 100%
    );
    color: #f4f9f9;
  }

  .overlay {
    background-color: #000;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const Home = () => {
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container className="mt-5 ml-6 text-auto">
          <h1>Welcome to Coliseum</h1>
          <p>
            Aim for this forum to understand and envelope concerns of an
            unsocial [not anti-social] indivduals. !
          </p>
        </Container>
      </Jumbo>
    </Styles>
  );
};

export default Home;
