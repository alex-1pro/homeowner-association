import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function DeleteModal({ onShow, onClose, onDelete ,msg }) {
    return (
        <div>
                <Modal show={onShow} onHide={onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{msg.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you sure want to delete this message?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onClose}>
                            No
                        </Button>
                        <Button variant="primary" onClick={onDelete}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    );
}

export default DeleteModal;