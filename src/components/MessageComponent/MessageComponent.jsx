import React from 'react';
import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import "./MessageComponent.css";
function MessageComponent({ msg,msgCreatedBy ,setIsRead, isRead}) {
    const [hide, setHide] = useState("hide");   
    
 // const createdBy=users.filter(user=>user.id===msg.createdBy)
   // console.log(msg);
    function showDetails(){
        setHide(hide ? "" : "hide");
        setIsRead("true");
    }
    return (
        <div className={"c-message "+isRead} onClick={showDetails} >

           

            <Container>
                <Row>
                    <Col >{msgCreatedBy.fname+" "+ msgCreatedBy.lname }</Col>
                    <Col>{msg.title}</Col>
                    <Col>{msg.createdAt}</Col>
                </Row>
                <Row>
                    <Col className={hide}>{msg.details}</Col>
                </Row>
            </Container>
        </div>
    );
}

export default MessageComponent;