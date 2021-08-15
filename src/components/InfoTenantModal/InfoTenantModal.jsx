
import React, { useContext } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';
import './InfoTenantModal.css'
import ActiveUserContext from '../../shared/ActiveUserContext';
import UpdateFormComponent from '../UpdateFormComponent/UpdateFormComponent';
import { useState } from 'react';

function InfoTenantModal({ onShow, onClose, tenant, onRemoveTenant, onUpdateTenant }) {
    const activeUser = useContext(ActiveUserContext);
    const [hideForm, setHideForm] = useState(true);




    const adminActions =
        <>
            {hideForm ?
                <Button style={{ margin: "5px" }} variant="success" onClick={() => setHideForm(false)}>
                    Update Info
                </Button> : null}
            <Button style={{ margin: "5px" }} variant="danger" onClick={deletTenant}>
                Delete a {tenant.fname}
            </Button>
            {hideForm ? null : <UpdateFormComponent tenant={tenant} onUpdateTenanat={onUpdateTenant} onShowBtnHideForm={() => setHideForm(true)} />}
        </>

    function close() {
        onClose();
        setHideForm(true)
    }
    function deletTenant() {
        onRemoveTenant(tenant);
        close();
    }

    return (
        <>
            <Modal
                show={onShow} onHide={close} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <Image className="modal-img" src={tenant.img} rounded />
                        {`${tenant.fname} ${tenant.lname}`}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><span style={{ fontWeight: "bold" }}> Email: </span>{tenant.email}</p>
                    <p><span style={{ fontWeight: "bold" }}> apt: </span>{tenant.apt}</p>
                    {activeUser.isCommittee ? adminActions : null}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default InfoTenantModal;