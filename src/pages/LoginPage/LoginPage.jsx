import React from 'react';
import { useState } from 'react';
import { Button, Container, Form, Alert } from 'react-bootstrap';
import { Link,Redirect } from 'react-router-dom';

import './LoginPage.css'
function LoginPage({ activeUser, users, onLogin }) {
    const [email, setEmail] = useState("chuck@gmail.com");
    const [pwd, setPwd] = useState("123");
    const [showInvalidLogin, setShowInvalidLogin] = useState(false);

    if (activeUser) {
        return <Redirect to="/dashboard" />
    }

    function login() {
        const activeUser = users.find(user => user.email === email && user.pwd === pwd);

        if (activeUser) {
            onLogin(activeUser);
        } else {
            setShowInvalidLogin(true);
        }
    }

    return (
        <div className="p-login">
          <h1>Login to Homeowner association </h1>
          <p>or <Link to="/signup">create an account</Link></p>
            {showInvalidLogin ?
                <Alert variant="danger" onClose={() => setShowInvalidLogin(false)} dismissible>Invalid Credentials!</Alert> : null}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                        value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                        value={pwd} onChange={e => setPwd(e.target.value)} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="success" type="button" onClick={login}>
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default LoginPage;