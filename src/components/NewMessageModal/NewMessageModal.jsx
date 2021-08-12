import React from 'react';
import { useState } from 'react';
import { Button, Modal, Form, Row, Col, Image } from 'react-bootstrap';

function NewMessageModal({ onShow, onClose, onCreate }) {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [priority, setPriority] = useState("Info");
    const [img, setImg] = useState(null);

    function clearForm() {
        setTitle("");
        setDetails("");
        setPriority("");
        setImg(null);
    }

    console.log(priority);
    return (
        <Modal show={onShow} onHide={onClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>New Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                        <Form.Label column sm={3}>
                            Message Title:
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalDesc">
                        <Form.Label column sm={3}>
                            Details:
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control as="textarea" value={details} rows={3} onChange={e => setDetails(e.target.value)} />

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalImage">
                        <Form.Label column sm={3}>
                            Image:
                        </Form.Label>
                        <Col sm={9}>
                            {/* <Form.Control type="file" accept="image/*" onChange={handleFileChange} /> */}
                            <Form.Control type="file" accept="image/*" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalImage">
                    <Form.Label column sm={3}>
                            Chose Priority:
                        </Form.Label>  
                    <Col sm={9}>
                    <Form.Select aria-label="Default select example"value={priority} onChange={e=>setPriority(e.target.value)}>
                        <option value="Info">Info</option>
                        <option value="Important">Important</option>
                    </Form.Select>
                    </Col>
                    </Form.Group>
                </Form>
                <Image src={img ? URL.createObjectURL(img) : ""} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                {/* <Button variant="primary" onClick={createRecipe}> */}
                <Button variant="primary" >
                    Create Recipe
                </Button>
            </Modal.Footer>
        </Modal>

    );
}

export default NewMessageModal;