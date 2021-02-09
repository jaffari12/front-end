import React from "react";
import { Form, Card, Button } from "react-bootstrap";
// import loginImg from "../assets/login.svg";

const Login = () => {
    return (
    <Card style={{ width: '25rem' }}>
        <Card.Header className="text-center bg-primary">Login</Card.Header>
        <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button className="btn-lg btn-primary btn-block" >Log in</Button>
            
            
        </Form>
    </Card>
);
}

export default Login;




