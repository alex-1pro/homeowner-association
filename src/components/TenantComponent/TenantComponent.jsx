import React from 'react';
import { useContext } from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import './TenantComponent.css';
import ActiveUserContext from '../../shared/ActiveUserContext';
import { useState } from 'react';

function TenantComponent({ tenant }) {
    const [show, setShow] = useState(false);
    return (
        <>
            <Row className="c-tenant ">
                <Col key={tenant.id} md={3} sm={6}>
                <Image className="tenant-img" src={tenant.img} roundedCircle />
                    

                    {`${tenant.fname} ${tenant.lname}`}
                </Col>
                {/* <Col xs={6} md={4}> <Image className="tenant-img" src="https://pbs.twimg.com/profile_images/1407346896/89.jpg" roundedCircle /> </Col> */}
            </Row>
            <div className="">

            </div>
        </>
    );
}

export default TenantComponent;