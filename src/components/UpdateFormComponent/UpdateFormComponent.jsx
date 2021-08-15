import React from 'react';
import { useState } from 'react';
import { Col,Form,Button,Row } from 'react-bootstrap';
import UserModel from '../../model/UserModel';

function UpdateFormComponent({ onUpdateTenanat, tenant ,onShowBtnHideForm}) {
    const [fname,setFname] = useState(tenant.fname);
    const [lname,setLname] = useState(tenant.lname);
    const [apt,setApt] =useState(tenant.apt);
    const [email,setEmail] = useState(tenant.email);
    const [password,setPassword] =useState(tenant.psw);
    const [isCommittee, setIsCommittee]=useState(tenant.isCommittee);
   
/**
 *  this.id = plainUser.id;
        this.fname = plainUser.fname;
        this.lname = plainUser.lname;
        this.email = plainUser.email;
        this.pwd = plainUser.pwd;
        this.isCommittee = plainUser.isCommittee;
        this.apt = plainUser.apt;
        this.communityId = plainUser.communityId;
        this.img=plainUser.img;

 */
    // function clearForm(){
    //     setFname(tenant.fname);
    //     setLname(tenant.lname);
    //     setApt(tenant.apt);
    //     setEmail(tenant.email);
    //     setIsCommittee(tenant.isCommittee);
    //     setPassword(tenant.password);
    // }

    function clearForm(){
        setFname("");
        setLname("");
        setApt("");
        setEmail("");
        setIsCommittee("");
        setPassword("");
    }

    function updateTenantParams(){
        const updateTenant=new UserModel(
            {
                id:tenant.id,
                fname:fname,
                lname:lname,
                email:email,
                pwd:password,
                apt:apt,
                communityId:tenant.communityId,
                img:tenant.img,
                isCommittee:isCommittee
            });
            onUpdateTenanat(updateTenant);
            clearForm();
            onShowBtnHideForm();
    }

  
    return (
        <div className="c-update-form">
            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalFirstName">
                    <Form.Label column sm={2}>
                        First Name:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="First Name" value={fname} onChange={e=>setFname(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalLastName">
                    <Form.Label column sm={2}>
                        Last Name:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Last Name" value={lname} onChange={e=>setLname(e.target.value)}/>
                    </Col>
                </Form.Group>
                
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalApartment">
                    <Form.Label column sm={2}>
                    Apartment:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Apartment" value={apt} onChange={e=>setApt(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Committee"  onChange={()=>setIsCommittee(!isCommittee)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button onClick={updateTenantParams}>Update Tenant</Button>
                    </Col>
                </Form.Group>
            </Form>

        </div>
    );
}

export default UpdateFormComponent;