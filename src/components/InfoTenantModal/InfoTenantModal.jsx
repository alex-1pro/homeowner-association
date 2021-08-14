
import React from 'react';
import { Modal,Image } from 'react-bootstrap';
import './InfoTenantModal.css'
function InfoTenantModal({ onShow, onClose,tenant }) {
    return (
        <>
            <Modal
                show={onShow} onHide={onClose} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <Image className="modal-img" src={tenant.img} rounded  />  
                       {`${tenant.fname} ${tenant.lname}`} 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p><span style={{fontWeight:"bold"}}> Email: </span>{tenant.email}</p>
                <p><span style={{fontWeight:"bold"}}> apt: </span>{tenant.apt}</p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default InfoTenantModal;