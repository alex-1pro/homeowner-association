import React, { useState } from 'react';
import { Alert, Button, Form, Col, Row,Modal } from 'react-bootstrap';

function NewTenantModal({ onAddTenant, onShow, onClose }) {
    //fname, lname, email, password, isCommittee,apt
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [apt, setApt] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isCommittee, setIsCommittee] = useState("");
    const [img, setImg] = useState("");
    const [showInvalid, setShowInvalid] = useState(false);

    function clearForm() {
        setFname("");
        setLname("");
        setApt("");
        setEmail("");
        setIsCommittee("");
        setPassword("");
        setImg("");
    }

    function addNewTenant() {
        //     if (!fname || !lname || !email || password || !isCommittee || !apt || !img) {
        //         setShowInvalid(true);
        //     }
        //     else{
        //     onAddTenant(fname, lname, email, password, isCommittee, apt, img);
        //     clearForm();
        //    }
        onAddTenant(fname, lname, email, password, isCommittee, apt, img);
        clearForm();
        onClose();
    }


    return (
        <div className={"c-newtenant"}>



            <Modal show={onShow} onHide={onClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>New Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                     
                            {showInvalid ? <Alert variant="danger" onClose={() => setShowInvalid(false)} dismissible>Please enter all required information</Alert> : null}
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalFirstName">
                                <Form.Label column sm={2}>
                                    First Name:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="First Name" value={fname} onChange={e => setFname(e.target.value)} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalLastName">
                                <Form.Label column sm={2}>
                                    Last Name:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Last Name" value={lname} onChange={e => setLname(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalApartment">
                                <Form.Label column sm={2}>
                                    Apartment:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Apartment" value={apt} onChange={e => setApt(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Email
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Password
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalImg">
                                <Form.Label column sm={2}>
                                    Image Link:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="picture link" value={img} onChange={e => setImg(e.target.value)} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Form.Check label="Committee" onChange={() => setIsCommittee(!isCommittee)} />
                                </Col>
                            </Form.Group>

                            {/* <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button onClick={addNewTenant}>Add Tenant</Button>
                                </Col>
                            </Form.Group> */}
                        </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={addNewTenant}>
                            Add Tenant
                    </Button>
                </Modal.Footer>
            </Modal>




        </div>
    );
}

export default NewTenantModal;