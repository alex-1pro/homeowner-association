import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function DeleteModal({ onShow, onClose, onDelete ,msg }) {
    function deleteAccept(){
        onDelete();
        onClose();
    }
    return (
        <div>
                <Modal show={onShow} onHide={onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{msg.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you sure want to delete this message?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={onClose}>
                            No
                        </Button>
                        <Button variant="danger" onClick={deleteAccept}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    );
}

export default DeleteModal;