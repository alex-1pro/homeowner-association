import React from 'react';
import { useContext } from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import './TenantComponent.css';
import ActiveUserContext from '../../shared/ActiveUserContext';
import { useState } from 'react';
import InfoTenantModal from '../InfoTenantModal/InfoTenantModal';

function TenantComponent({ tenant,tenantAction }) {
    // const [hide, setHide] = useState("hide");
    const [showModal,setShowModal]=useState(false);
    
    return (
        <>
            <Container>
            {/* <Row className="c-tenant" onClick={() => setHide(hide ? "" : "hide")}> */}
                <Row className="c-tenant" onClick={() => setShowModal(true)}>
                    <Col key={tenant.id} md={3} sm={6}>
                        <Image className="tenant-img" src={tenant.img} roundedCircle />
                        {`${tenant.fname} ${tenant.lname}`}
                    </Col>
                </Row>
                {/* <Row className={"tenant-info "+hide}>
            </Row> */}
            <InfoTenantModal onShow={showModal} onClose={()=>setShowModal(false)}  tenant={tenant} onRemoveTenant={tenantAction.onRemoveTenant} onUpdateTenant={tenantAction.onUpdateTenant}/>
            </Container>

        </>
    );
}

export default TenantComponent;