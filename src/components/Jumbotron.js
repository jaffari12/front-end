import React from "react";
import { Jumbotron as Jumbo, Container, Button } from "react-bootstrap";
import styled from 'styled-components';
import bgimage from "../assets/bgimage.jpg";

const Styles = styled.div`
.jumbo{
    background: url(${bgimage}) no-repeat fixed bottom;
    background-size: cover;
    color: #f4f9f9;
    height: 300px;
    position: relative;
    z-index: -2;
} 

.button{
    background: rgb(63,94,251);
    background: linear-gradient(58deg, rgba(63,94,251,1) 20%, rgba(252,70,107,1) 100%);
    color: #f4f9f9;

}

.overlay{
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

const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className ="jumbo">
            <div className="overlay"></div>
            <Container className="mt-auto">
                <h1>Welcome to Coliseum</h1>
                <p>
                    This forum envelopes the today's concerns of an unsocial indivduals.
                </p>
                <p>
                <a className="btn button" href="/login" role="button">Learn more</a>
                
                </p>
            </Container>

            </Jumbo>

        </Styles>
    );
}

export default Jumbotron;



